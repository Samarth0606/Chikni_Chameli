

// let rootEl = document.getElementById('root');

// // let h1 = React.createElement('h1' , null , "HELLO FROM REACT")
// let h1 = React.createElement('h1' , {id:"sam", className:"vohra"} , "HELLO FROM REACT")

// let root = ReactDOM.createRoot(rootEl);

// root.render(h1)

// ------------------------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('div' , null , 
//     React.createElement('div' , null , 
//         React.createElement('h1', null , " Mai hu h1 div ke andar")
//     )
// )

// let root = ReactDOM.createRoot(rootEl);

// root.render(h1)

// // ------------------------------------------

// let rootEl = document.getElementById('root');

// let h1 = React.createElement('div' , null , 
//     [
//         React.createElement('div' , null , 
//             React.createElement('h1', null , " Mai hu h1 div ke andar h1.1")
//         ),
//         React.createElement('div' , null , 
//             React.createElement('h1', null , " Mai hu h1 div ke andar h1.2")
//         )
//     ]
// )

// let root = ReactDOM.createRoot(rootEl);

// root.render(h1)


// ------------------------------------------

let rootEl = document.getElementById('root');

let h1 = <div>
            <div>
                <h1>Hello from h1.1</h1>
            </div>
            <h2> bye bye</h2>
            <div>
                <h1>Hello from h1.2</h1>
            </div>
        </div>

let root = ReactDOM.createRoot(rootEl);

root.render(h1)
