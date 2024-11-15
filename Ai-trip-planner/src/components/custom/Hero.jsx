import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center m-53 gap-9'>
      <h1
      className='font-extrabold text-[49px] text-center m-12'
      > <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>

      <p className='text-xl text-gray-500 text-center mt-0 mb-0 ml-9 mr-9'>Your personal trip planner and travel curator, creating custom itenearies tailored to your interest and budget.</p>

      <Link to={'/create-trip'}>
      <Button>Get Started, It's Free</Button> </Link>
    </div>
  )
}

export default Hero
