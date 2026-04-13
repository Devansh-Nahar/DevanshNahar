import React from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='w-full h-[80px] flex items-center justify-around'>
        <h1 className="font-semibold font-[Ubuntu] text-3xl relative right-20">Devansh</h1>
        <div className="flex items-center gap-6">
            <a href="#" className="text-xl font-normal text-gray-600 font-[poppins]">Works</a>
            <a href="#" className="text-xl font-normal text-gray-600 font-[poppins]">My Story</a>
            <a href="#" className="text-lg font-normal text-gray-600 font-[poppins]">Contact</a>
        </div>
        <div className="flex items-center gap-3 relative left-20">
            <i className="bx bx-menu bg-gray-950 rounded-full text-white w-10 h-10 flex items-center justify-center text-xl"></i>
            <p className="text-xl font-medium font-[poppins]">Menu</p>
        </div>
    </motion.div>
  )
}

export default Navbar