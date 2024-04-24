import React, { useDeferredValue, useEffect,useState } from 'react'
const UseDefferhook = () => {
    const [text, setText] = useState("")
    const [slowtext,setSlowtext]=useState("")
    useEffect(() => {
        setTimeout(() => {
            setSlowtext(text)
        }, 3000)
    }, [text])


    const deffervalue = useDeferredValue(slowtext)

    return (
        <div>
            <input value={text} onChange={(e) => setText(e?.target?.value)} />

            <label>this is the search text</label>
            <h4>normal text call == {text}</h4>
            <h4>with hook it is calling == {deffervalue}</h4>
        </div>
    )
}

export default UseDefferhook