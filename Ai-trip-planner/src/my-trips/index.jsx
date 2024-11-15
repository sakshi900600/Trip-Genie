import { db } from '@/Service/firbaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserTripCard from './components/UserTripCard'

function MyTrips() {
    const navigate = useNavigate()
    const [userTrips, setUserTrips] = useState([])

    useEffect(() => {
      GetUserTrips()
    }, [])
    
    /**
     * Use to get all user trips
     * @returns 
     */

    const GetUserTrips = async ()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        
        if(!user){
            navigate('/')
            return;
        }
        
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q)
        setUserTrips([])
        querySnapshot.forEach((doc) =>{
            // console.log(doc.id, "=>", doc.data());
            setUserTrips(prevVal =>[...prevVal,doc.data()] )
        })
    }
    


  return (
    <div className='sm:px-10 md:px-39 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2> 


      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {userTrips?.length>0 ? userTrips.map((trip,index)=>(
            <UserTripCard  trip={trip} key={index}/>
        ))
        :[1,2,3,4,5,6].map((item,index)=>(
          <div className='h-[240px] w-full bg-slate-200 animate-pulse rounded-xl' key={index}>

          </div>
        ))
      }
      </div>
    </div>
  )
}

export default MyTrips
