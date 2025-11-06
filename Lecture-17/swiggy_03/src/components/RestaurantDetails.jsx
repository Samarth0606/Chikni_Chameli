import React from 'react'
import { useParams } from 'react-router-dom'

function RestaurantDetails() {

    
    let {id} = useParams();
    console.log(id , "id");
  return (
    <div>RestaurantDetails</div>
  )
}

export default RestaurantDetails