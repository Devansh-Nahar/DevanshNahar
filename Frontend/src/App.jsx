import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Story from './Components/Story'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#f8f5f0] w-full min-h-screen'>
      <Navbar />
      <Hero />
      <Story />
      <Projects />
      <Services />
      <Contact />
    </div>
  )
}

export default App