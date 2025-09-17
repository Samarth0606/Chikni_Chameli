import { useEffect, useState } from "react";

function Live(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count === 0){
            console.log("component Did Mount");
        }
        if(count>0 && count<5){
            console.log("component Did Update");
        }
        if(count === 5){
            return ()=>console.log("component Will Unmount");
        }
    }, [count])

    return(
        <button onClick={()=>setCount(count+1)} >click - {count}</button>
    )
}

export default Live;