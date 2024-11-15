import { GetPlaceDetais, PHOTO_REF_URL } from '@/Service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {


    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        hotel && GetPlacePhoto()
    }, [hotel])
    
  
    const GetPlacePhoto = async()=>{
      
      const data = {
        textQuery: hotel?.hotelName
      }
  
      const result = await GetPlaceDetais(data).then(resp =>{
        console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
        setPhotoUrl(PhotoUrl);
        
      })
    }



    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel.hotelName + "," + hotel?.hotelAddress} target='_blank'>

            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src="https://images.squarespace-cdn.com/content/v1/58eb4273c534a5cb83c85625/1502452675149-OL4KLO33HZYK242B5WLW/1.jpg?format=1500w" className='rounded-xl' />

                <div className='my-3 flex flex-col gap-3'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>💰 {hotel?.price}</h2>
                    <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem
