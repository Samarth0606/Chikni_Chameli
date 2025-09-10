import { useState } from "react"
function Counter(){
    let [count,setCount] = useState(0);
    function handleDec(){
        setCount(count-1)
    }
    function handleInc(){
        
        setCount((lol)=>lol+1) // 1
        
        setCount((lol)=>lol+2) // 3
        
        setCount(count+2)     // 2

        setCount((lol)=>lol+1) // 3
    }
    return(
        <div>
            <button onClick={handleDec} >DEC</button>
            <h1>Count: {count} </h1>
            <button onClick={handleInc} >INC</button>
        </div>
    )
}
export default Counter



// import { useState } from "react"
// function Counter(){
//     let [count,setCount] = useState(0);
//     function handleDec(){
//         setCount(count-1)
//     }
//     function handleInc(){
//         console.log(count , "1"); //0 
//         setCount((lol)=>lol+1) // 1
//         console.log(count , "2");
//         setCount((doll)=>doll+1) // 2
//         console.log(count , "3");
//         setCount((count)=>count+1) //3
//         console.log(count , "4");
//     }
//     return(
//         <div>
//             <button onClick={handleDec} >DEC</button>
//             <h1>Count: {count} </h1>
//             <button onClick={handleInc} >INC</button>
//         </div>
//     )
// }
// export default Counter



// import { useState } from "react"
// function Counter(){
//     let [count,setCount] = useState(0);
//     function handleDec(){
//         setCount(count-1)
//     }
//     function handleInc(){
//         console.log(count , "1");
//         setCount(count+1)
//         console.log(count , "2");
//         setCount(count+1)
//         console.log(count , "3");
//         setCount(count+1)
//         console.log(count , "4");
//     }
//     return(
//         <div>
//             <button onClick={handleDec} >DEC</button>
//             <h1>Count: {count} </h1>
//             <button onClick={handleInc} >INC</button>
//         </div>
//     )
// }
// export default Counter