import { GetPlaceDetais } from '@/Service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTripCard({trip}) {


  const [photoUrl, setPhotoUrl] = useState()

  useEffect(()=>{
    trip && GetPlacePhoto()
  }, [trip])

  const GetPlacePhoto = async()=>{
    const data ={
      textQuery: trip?.userSelection?.location?.label
    }

    const result = await GetPlaceDetais(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);
      
      // import PHOTO_REF_URL
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
      setPhotoUrl(PhotoUrl)
    })
  }


  return (
    <Link to={'/view-trip/'+ trip?.id}>
    <div className='hover:scale-105 transition-all '>
      <img className='object-cover rounded-xl h-[240px]' src={photoUrl? photoUrl: "https://images.squarespace-cdn.com/content/v1/58eb4273c534a5cb83c85625/1502452675149-OL4KLO33HZYK242B5WLW/1.jpg?format=1500w"} />
      
      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCard
