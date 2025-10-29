import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <div className='m-12'>
        <h1 className='text-xl font-bold'>Restaurants with online food delivery in Aligarh</h1>
        <button className='border rounded-3xl m-4 p-4 text-2xl'>Rating 4.2+</button>
        <button className='border rounded-3xl m-4 p-4 text-2xl'>Reset</button>

        <div>
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body