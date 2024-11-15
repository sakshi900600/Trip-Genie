import { db } from '@/Service/firbaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import InfoSection from '../Components/InfoSection'
import Hotels from '../Components/Hotels'
import PlacesToVisit from '../Components/PlacesToVisit'
import Footer from '../Components/Footer'

function Viewtrip() {

    const {tripId} = useParams()
    const [trip, setTrip] = useState([])

    useEffect(() => {
      tripId && GetTripData()
    }, [tripId])
    

    // fetch data from database
    const GetTripData = async ()=>{
        const docRef = doc(db,'AITrips', tripId)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            // console.log("document:", docSnap.data()); 
            setTrip(docSnap.data())
        }
        else{
            console.log("No such document exists");
            toast("No trip found")
        }
    }



  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information Section */}
      <InfoSection trip={trip} />

      {/* Recommended hotels */}
      <Hotels trip={trip} />

      {/* daily plan */}
      <PlacesToVisit trip={trip} />

      {/* footer */}
      <Footer />
      
    </div>
  )
}

export default Viewtrip
