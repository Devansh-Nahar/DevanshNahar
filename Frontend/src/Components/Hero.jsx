import React from 'react'
import { motion } from 'motion/react'
import profileImg from '../assets/profile.png'

const Hero = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-8 items-center">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-gray-700 font-normal text-lg relative right-44 mt-24">Hey! I am Devansh Nahar</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-[80px] font-[Ubuntu] font-semibold ml-24 leading-[1.1]">Building Scalable web applications with impact</motion.h1>
            <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className='w-64 h-12 rounded-3xl bg-black flex items-center justify-center gap-4 text-white text-base font-normal relative right-40 font-[poppins]'>
            <i className="bx bxs-chat text-white text-2xl relative top-1"></i>
            Book an intro call 
            </motion.button>
        </div>
        <motion.img initial={{ opacity: 0, y: 20, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 0.4, delay: 0.4 }} src={profileImg} alt="Profile Image" className="h-[600px] w-[450px] object-cover mt-24 ml-52 rotate-4" />
    </div>
  )
}

export default Hero