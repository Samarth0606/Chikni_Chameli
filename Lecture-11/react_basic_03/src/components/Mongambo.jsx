import { useState } from "react";

    function Mogambo({naam}){
        let [name,setName] = useState(naam);
        function handleNaam(){
            console.log(name , "before");
            setName('Anonymous')
            console.log(name , "after");
        }
    
        return(
            <div>
                <button onClick={handleNaam} >Naam Badal Dunga- {name}</button>
            </div>
        )
    }
    
    export default Mogambo;




// // function Mogambo(props){
// function Mogambo({naam}){
//     let myName = naam;
//     function handleNaam(){
//         console.log(myName, "before");
//         myName="Anonymous"
//         console.log(myName, "after");
//     }

//     return(
//         <div>
//             <button onClick={handleNaam} >Naam Badal Dunga- {myName}</button>
//         </div>
//     )
// }

// export default Mogambo;