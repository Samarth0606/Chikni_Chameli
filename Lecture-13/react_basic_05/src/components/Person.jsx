import React, { memo, useState } from 'react'

function Person() {
    let [dog,setDog] = useState("Maverick");
    function handleNaam(){
        setDog(Math.floor(Math.random()*10))
    }
    let [inp,setInp] = useState('');
    function handleInput(e){
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={handleInput} type="text" value={inp} />
        <Chotu naam={dog} />
        <button onClick={handleNaam} >Naam badal dunga</button>
        <Chotu naam="Simba" />
        <Chotu naam="Nepali" />
        <Chotu naam="Dodo" />
    </div>
  )
}
const Chotu = memo( function({naam}){
    return(
        <h1>Chai leke aaya maalik:{naam} </h1>
    )
} )

export default Person