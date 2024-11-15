import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+ place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0K1F1AOqJVXKTwD1tzFX2Um-uUu9Rpasv3w&s" className='w-[130px] h-[130px] rounded-xl ' />

    <div>
        <h2 className='font-bold text-lg'>{place.placeName}</h2>
        <h2 className='text-sm text-gray-400'>{place.placeDetails}</h2>
        <h2 className='text-sm mt-2 text-green-700'>{place.ticketPricing}</h2>
        {/* <Button><FaMapLocationDot /></Button> */}
    </div>

    </div>
    </Link>
  )
}

export default PlaceCardItem
