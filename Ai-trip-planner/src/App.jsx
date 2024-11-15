import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import Hero1 from './components/custom/Hero1'
import HeroSection from './components/custom/Hero1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      {/* <Hero1 /> */}
    </>
  )
}

export default App
