import React, { useState, useSyncExternalStore } from 'react'

let data = 0
let emit=null
const UseSyncExternalHook = () => {
    function score() {
        data++
        console.log('data', data)
emit()
    }
    return (
        <div>
            <Upadeted />
            <button onClick={() => score()}>add</button>
        </div>
    )
}

function subscribe(notify){
return emit=notify
}

function getSnapShot(){
return data
}

function Upadeted() {
    const upadetedScore = useSyncExternalStore(subscribe, getSnapShot)
    return (
        <div>
            <h1>by using hook : {upadetedScore}</h1>
            <h4>normal acces : {data}</h4>
        </div>
    )
}


export default UseSyncExternalHook