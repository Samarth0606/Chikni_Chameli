import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard({restaurant}) {
  // console.log(restaurant , "rest");
  return (
    <Link to={`/restaurant/${restaurant.info.id}`}>
      <div className='m-2 w-58'>
        <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} />
        <div className='ml-4'>
            <h1 className='font-bold text-xl'>{restaurant.info.name}</h1>
            <span className='font-bold'>{restaurant.info.avgRating}</span>
            <span className='font-bold mx-4'>{restaurant.info.sla.slaString}</span>
            <p>{restaurant.info.cuisines[0]}</p>
            <p>{restaurant.info.locality}</p>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard