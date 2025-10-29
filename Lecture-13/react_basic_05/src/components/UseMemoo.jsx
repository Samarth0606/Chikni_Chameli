import React, { useMemo, useState } from 'react'

function UseMemoo() {
    const [inp,setInp] = useState(0);
    const [count,setCount] = useState(0);
    let out = useMemo(()=>{
        let ans = 0;
        for(let item=1;item<=inp;item++){
            console.log("loop chala");
            ans+=item;
        }
        return ans
    },[inp])

    function handleInp(e){
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={handleInp} type="number" value={inp} />
        <h1>Ans: {out} </h1>
        <button  onClick={()=>setCount(count+1)} >Counter: {count}</button>
    </div>
  )
}

export default UseMemoo