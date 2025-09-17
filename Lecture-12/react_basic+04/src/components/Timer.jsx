import { useEffect, useState } from "react"

function Timer(){
    const [time,setTime] = useState(0);

    useEffect(function(){
        setTimeout(function(){
            setTime(time+1)
        }, 1000)
    },[time])

    // useEffect(function(){
    //     let id = setInterval(function(){
    //         setTime(time+1)
    //     }, 1000)
    //     return ()=>clearInterval(id) //cleanup fn
    // },[time])

    return(
        <h1>Time: {time}</h1>
    )
}

export default Timer