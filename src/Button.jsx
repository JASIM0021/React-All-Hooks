import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {
    const [toogle, settoogle] = useState(false)
    useImperativeHandle(ref,()=>({
        alterToggle(){
            settoogle(!toogle)

        }
    }))
  return (
    <div>
        <button 
       
        >
            Button from child components
        </button>
        {toogle && <span>Toggle</span>}
    </div>
  )
});

export default Button