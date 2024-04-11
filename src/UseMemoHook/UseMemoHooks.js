import React, { useMemo, useState } from 'react'

const UseMemoHooks = () => {

  const [add,setAdd]=useState(0)
const [subraction,setSubraction]=useState(100)

const mulitiplywithMemo=useMemo(function mulitiply(){
  console.log('when add call')
  return add*10
},[add])
  return (
    <div>
      <span>{mulitiplywithMemo}</span><br/>
      <span>{add}</span>
      <br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <br/>
      <br/>
      <span>{subraction}</span><br/>
      <button onClick={()=>setSubraction(subraction-1)}>subraction</button>
    </div>
  )
}

export default UseMemoHooks


/*
when we have useMemo to handel the cathcing means it store the prevoius state and if we again pass same value it not rerender the component 
and when we we pass new value it give upadated value

*/