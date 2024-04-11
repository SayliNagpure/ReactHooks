import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHooks = () => {
    const [add,setAdd]=useState(0)
const [count,setCount]=useState(0)
    const abc=useCallback(function cc(){
        console.log('function call')
    },[count])
  return (
    <div>
        <h4>{add}</h4>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <br/>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count+5)}>Count</button>
        <Child data={abc}/>
    </div>
  )
}

export default UseCallBackHooks