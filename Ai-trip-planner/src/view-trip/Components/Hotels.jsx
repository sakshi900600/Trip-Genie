import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({trip}) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5 mb-3'>Hotel Recommendation</h2>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4'>
        {trip?.tripData?.hotelOptions?.map((hotel, index)=>(
          
          <HotelCardItem hotel={hotel} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Hotels
