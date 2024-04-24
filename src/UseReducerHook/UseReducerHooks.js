import React, { useReducer, useState } from 'react'

let instalvalue=0
function reduce(state,action){
if(action=="Increment"){
  return state+1
}else if(action=="Decrement"){
  return state-1
}
}
const UseReducerHooks = () => {
   const [count,dispatch] =useReducer(reduce,instalvalue)

  return (
    <div>
      <h2>Data : {count}</h2>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducerHooks