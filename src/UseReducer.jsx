import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
      case "INCREMENT":
        return {...state,count:state.count+1};
        case "toogleShowText":
          return {...state,showText:!state.showText}
          default:
            return state;
    }
  }
const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true});  

    return (
      <div className="App">
        <p>Use Reducer Hooks</p>
        <h2>{state.count}</h2>
        <button
        onClick={()=>{dispatch({type:"INCREMENT"});
        dispatch({type:"toogleShowText"})
      }}
        >
          Click here
        </button>
        <h3>{state.showText && 'This is showtext state'}</h3>
      </div>
    )
}

export default UseReducer