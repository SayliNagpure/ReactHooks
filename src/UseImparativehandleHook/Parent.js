import React, { useRef, useState } from 'react'
import Childref from './Childref'

const Parent = () => {
    const [data1,setData1]=useState("")
    const ref=useRef("")
    console.log('data.current',ref.current)
  return (
    <div>
        <div>
        <div>
        <Childref ref={ref}/>
        </div>
            <h1>here is the data : {data1}</h1>
            <button onClick={()=>setData1(ref.current.onHeader())}>ok</button>

        </div>
        
    </div>
  )
}

export default Parent