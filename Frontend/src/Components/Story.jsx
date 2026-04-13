import React from 'react'
import { motion } from 'motion/react'

const Story = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}  transition={{duration: 0.5 }} className='w-full h-[70vh] flex flex-col gap-6 mt-20'>
        <div className="border-b-2 border-b-black w-[90vw] pb-3 flex items-center gap-2 ml-20">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h1 className="text-xl font-[poppins] font-normal ">My Story</h1>
        </div>
        <div className='flex items-center justify-end ml-[30%] relative right-16 gap-16'>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="text-gray-700 font-normal text-lg font-[poppins]">I am a MERN stack <br /> developer who builds production <br /> ready applications and  <br /> complex workflows </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="text-gray-700 font-normal text-lg font-[poppins]">I enjoy working on complex workflows, <br /> backend systems, and improving <br /> how products scale and perform.</motion.p>
        </div>
    </motion.div>
  )
}

export default Story