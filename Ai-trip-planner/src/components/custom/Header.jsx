import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from 'react-router-dom';


function Header() {

  const user = JSON.parse(localStorage.getItem('user'))
  const [openDialog, setOpenDialog] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(user);
  }, [])


  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })


  const GetUserProfile = (tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers:{
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) =>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data))
      setOpenDialog(false)
      window.location.reload()
    })
  }


  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <a href="/"><img src="/logo.svg" alt="" /></a>
      <div>
        {user ?
          <div className='flex items-center gap-3'>

<a href="/create-trip"><Button variant="outline" className="rounded-full">➕ New Trip</Button></a>

            <a href="/my-trips"><Button variant="outline" className="rounded-full">My Trips</Button></a>
            
            <Popover>
              <PopoverTrigger>
              <img src={user.picture} className='h-[40px] w-[40px] rounded-full' alt="" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={()=>{
                  googleLogout()
                  localStorage.clear()
                  window.location.reload()
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div> :
          <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
        }
      </div>

      <Dialog open={openDialog}>

        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
              <p>Sign in to the App with Google Authentication securly.</p>

              <Button disabled={loading} onClick={login} className='w-full mt-5 flex gap-4 items-center'>
                <FcGoogle className='h-7 w-7' />Sign In With Google</Button>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Header
