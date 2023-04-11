import React, { useState } from 'react'
import Child from './Child'

const UseCallBack = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("This is dummy data ")
    const returnComment=()=>{
        return data;
    };
  return (
    <div>
        <h1>UseCallBack</h1>
        <Child returnComponent={returnComment}/>
        <button
        onClick={()=>{
            setToggle(!toggle)
        }}
        >
            Toogle
        </button>
        {
            toggle && <h1> Toggle</h1>
        }
    </div>
  )
}

export default UseCallBack