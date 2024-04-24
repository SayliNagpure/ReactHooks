import { useId } from "react"

export const UseIdHook=(props)=>{
console.log('props', props)
const userId=useId()
    return(
<div>
    <div>
        <label htmlFor={userId} >{props?.Name} : </label>
        <input id={userId} type={props?.type}/>
    </div>
</div>
    )
}