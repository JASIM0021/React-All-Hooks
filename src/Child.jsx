import React, { useEffect } from 'react'

const Child = ({returnComponent}) => {
    console.log('returnComponent', returnComponent)
    useEffect(()=>{
        console.log("Function was called");
    },[returnComponent])
  return (
    <div>
       
        <h1>
         {returnComponent}
        </h1>
        </div>
  )
}

export default Child