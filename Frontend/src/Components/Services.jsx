import React from 'react'
import { motion } from 'motion/react'
import visual from '../assets/visual.png'

const Services = () => {
  return (
    <div className='flex flex-col gap-10 mt-52'>
        <motion.div initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="border-b-2 border-b-black w-[90vw] pb-3 flex items-center gap-2 ml-20">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h1 className="text-xl font-[poppins] font-normal ">Services</h1>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className='text-6xl font-[550] font-[Lato] ml-[70px]'>HOW CAN I HELP?</motion.h1>

      <div className="w-full h-[70vh] grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className='text-3xl text-gray-600 font-normal font-[Lato] ml-[70px] mt-10'> Full Stack Development</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className='text-3xl text-gray-600 font-normal font-[Lato] ml-[70px] mt-10'> Backend System & APIs</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }} className='text-3xl text-gray-600 font-normal font-[Lato] ml-[70px] mt-10'> Product Development Support</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }} className='text-3xl text-gray-600 font-normal font-[Lato] ml-[70px] mt-10'> Application Opitimization</motion.h1>
        </div>

        <img src={visual} className='w-[600px] rounded-2xl relative right-6' />
      </div>
    </div>
  )
}

export default Services