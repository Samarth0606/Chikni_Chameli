import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'
import Search from './Search';

function Body() {
  const allRestaurants = Apicalling();
  const [allRestData,setAllRestData] = useState(allRestaurants);

  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)

  useEffect(()=>{
    if(allRestaurants && allRestaurants.length){
      setAllRestData(allRestaurants)
    }
  },[allRestaurants])

  function handleTopRest(allRestaurants){
    setAllRestData( allRestaurants.filter((rest)=> rest.info.avgRating>4.2) )
    setIsClicked1(true) 
    setIsClicked2(false) 
  }
  function handleReset(allRestaurants){
    setAllRestData(allRestaurants)
    setIsClicked1(false)
    setIsClicked2(true) 
  }
  return (
    <div className='m-12'>
        <h1 className='text-xl font-bold'>Restaurants with online food delivery in Aligarh</h1>
        <button onClick={()=>handleTopRest(allRestaurants)} className={isClicked1?'bg-amber-200 border rounded-3xl m-4 p-4 text-2xl' : 'border rounded-3xl m-4 p-4 text-2xl' } >Rating 4.2+</button>
        <button onClick={()=>handleReset(allRestaurants)} className={isClicked2?'bg-amber-200 border rounded-3xl m-4 p-4 text-2xl' : 'border rounded-3xl m-4 p-4 text-2xl' }>Reset</button>

        <div>
            <Search allRestaurants={allRestaurants} setAllRestData={setAllRestData} />
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
           {
            allRestData.map((restaurant)=>{
              return(
                <RestaurantCard restaurant={restaurant} />
              )
            })
           }
        </div>
    </div>
  )
}

export default Body