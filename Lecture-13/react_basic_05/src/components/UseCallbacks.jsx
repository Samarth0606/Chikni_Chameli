import React, { memo, useCallback, useState } from 'react'

function UseCallbacks() {
    const [count,setCount] = useState(0);
    // let a = function(){ console.log("hello") };
    let a = useCallback(function(){ console.log("hello") },[])
  return (
    <div>
        <Chotu chai={a} />
        <button onClick={()=>setCount(count+1)}>COUNTER: {count}</button>
    </div>
  )
}
const Chotu = memo(  function({chai}){
    return(
            <h1>mai launga chai: {chai()}</h1>
    )
} )


export default UseCallbacks