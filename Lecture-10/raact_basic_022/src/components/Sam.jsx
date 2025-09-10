
export function Sam(){
    // UPAR VAAL DUNIYA
    let a = 10;
    let b = "sam";
    let c = true;
    let d = false;
    let e = null;
    let f  = undefined;

    function handleKids(){
        console.log("GRWM");
    }
    function ankit(a,b,c){
        console.log("jai baba ki" , a,b,c);
    }
    // neecvhe waali duniya
    return (
        <div>
            <div>
                <h1>Welcome Sam</h1>
                <h1>A: a </h1>
                <h1>A: {a} </h1>
                <h1>B: {b} </h1>
                <h1>C: { JSON.stringify(c) } </h1>
                <h1>D: { JSON.stringify(d) } </h1>
                <h1>E: { JSON.stringify(e) } </h1>
                <h1>F: { JSON.stringify(f) } </h1>
            </div>
            <button onClick={handleKids} > BTN 1 </button>
            <button onClick={ ()=> ankit(10,20,30) } > BTN 2 </button>
        </div>
    )
}

export default Sam

// ---------------------------------

// export function sam(){
//     return (
//             <div>
//                 <h1>Welcome Sam</h1>
//             </div>
//         )
// }

// export default sam;

// --------------------------------


