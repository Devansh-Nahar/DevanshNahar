import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Story from './Components/Story'
import Projects from './Components/Projects'
import TechStack from './Components/TechStack'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#f8f5f0] w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Story />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  )
}

export default App