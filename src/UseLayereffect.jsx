import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayereffect = () => {
    const inputRef=useRef(null);
    useEffect(()=>{
inputRef.current.value="HELLO";

    },[])

    // uselayout is always call before the page is rendered
    // it is faster than useeffect 
    useLayoutEffect(() => {
        console.log('inputRef.current.value', inputRef.current.value);
    }, [])
   
  return (
    <div>
        <h1>UseLayout</h1>
        <input type="text" value={"PETTER"} ref={inputRef}/>
        {/* <button onClick={submit}>click</button> */}
        
    </div>
  )
}

export default UseLayereffect