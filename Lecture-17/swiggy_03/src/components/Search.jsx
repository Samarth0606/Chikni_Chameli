import React from 'react'

function Search({allRestaurants,setAllRestData}) {
    function handleSearch(searchedText){
        setAllRestData( allRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchedText.toLowerCase())))
    }
  return (
    <div>
        <input className=' m-8 border text-2xl rounded-2xl p-2' placeholder='Enter name here...' onChange={(e)=>handleSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Search