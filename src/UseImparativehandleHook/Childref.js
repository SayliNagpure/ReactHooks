import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Childref = (props, ref) => {
  const [count, setCount] = useState(0)
  // const data=ref
  useImperativeHandle(ref, () => ({
    onHeader
  }))
  function onHeader (){
    // count
    // console.log('count', count)
    return (
      count
    )
  }

  function increment() {
    setCount(count + 1)
  }
  return (
    <div>
      <input value={count} />
      <button onClick={increment}>count</button>
      {/* <h1>h: {ref.current.onHeader}</h1> */}
    </div>
  )
}

export default forwardRef(Childref)