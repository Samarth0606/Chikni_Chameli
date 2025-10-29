import React from 'react'

function RestaurantCard() {
  return (
    <div className='border flex'>
        <img className='w-58 h-42 rounded-2xl border' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/9afabb63-f704-4437-acbf-c7a6b7a72d11_101574.JPG" />
        <div className='ml-4'>
            <h1 className='font-bold text-xl'>PIZZA HUT</h1>
            <span className='font-bold'>4.2</span>
            <span className='font-bold mx-4'>25-30 Mins</span>
            <p>Pizza snacks</p>
            <p>Civil lines</p>
        </div>
    </div>
  )
}

export default RestaurantCard