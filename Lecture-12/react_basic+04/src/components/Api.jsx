import { useEffect, useState } from "react";
import axios from 'axios';

function Api(){
    const [data,setData] = useState([]);
    const API="https://jsonplaceholder.typicode.com/todos";
    
    useEffect(()=>{
        async function apicalling(){
            let data = await axios.get(API);
            setData(data.data)
        }
        apicalling()
    },[])

    return(
        <div>
            <h1>Api</h1>
            {
                data.map((item,index)=>{
                    return(
                        <div>
                          <h1>Title: {item.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Api


// -----------------------------------------------

// import { useEffect, useState } from "react";
// import axios from 'axios';

// function Api(){
//     const [data,setData] = useState([]);
//     const API="https://jsonplaceholder.typicode.com/todos";
    
//     useEffect(()=>{
//         axios.get(API)
//         .then((data)=>{
//             setData(data.data)
//         })
//         .catch((err)=>{
//             console.log(err , "catch");
//         })
//     },[])

//     return(
//         <div>
//             <h1>Api</h1>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                           <h1>Title: {item.title}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Api


// ------------------------------------------------------------
// import { useEffect, useState } from "react";
// import axios from 'axios';
// function Api(){
//     const [data,setData] = useState([]);
//     const API="https://jsonplaceholder.typicode.com/todos";
    
//     useEffect(()=>{
//         fetch(API)
//         .then((data)=>{
//             return data.json();
//         })
//         .then((resp)=>{
//             setData(resp)
//         })
//         .catch((err)=>{
//             console.log(err, "err");
//         })
//     },[])
//     // },[data])

//     return(
//         <div>
//             <h1>Api</h1>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                           <h1>Title: {item.title}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Api