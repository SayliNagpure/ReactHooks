import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'

const UseInsertingHook = () => {
    const [data, setData] = useState(0)

    useLayoutEffect(() => {
        console.log('uselayout')
    }, [])
    useEffect(() => {
        console.log("useeffcet call")
    }, [])

    useInsertionEffect(() => {
        console.log('hook call 1')
        // addData()
    }, [])


    useInsertionEffect(() => {
        console.log('hook call2')
    }, [])

    function addData() {
        setData(data + 1)
    }
    return (
        <div>
            <input value={data} />
            <button onClick={() => addData}>Add</button>
        </div>
    )
}

export default UseInsertingHook