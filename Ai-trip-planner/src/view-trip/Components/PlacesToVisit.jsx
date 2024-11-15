import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
      <h2 className='text-lg font-bold mt-4'>Places To Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item, index)=>(
            <div className='mt-9 mb-5' key={index}>
                <h2 className='font-medium text-lg '>{item.day}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                {item.plan.map((place,index)=>(
                    <div key={index}>
                    <h2 className='font-medium text-xs text-orange-600'>{place?.time}</h2>
                    <PlaceCardItem place={place} />
                    </div>
                ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
