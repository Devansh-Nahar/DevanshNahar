import React from 'react'
import profile from '../assets/profile.png'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 mt-40">
        <motion.div initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="border-b-2 border-b-black w-[90vw] pb-3 flex items-center gap-2 ml-20">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h1 className="text-xl font-[poppins] font-normal ">Let's talk</h1>
        </motion.div>
        <div className='w-full h-[70vh] grid grid-cols-2 gap-20'>
            <div className="flex flex-col gap-6">
                <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-8xl font-bold font-[Ubuntu] ml-16 mt-10'>Devansh</motion.h1>
                <motion.p initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-lg text-gray-600 font-normal font-[poppins] ml-[68px] relative bottom-4'>Open to collaboration</motion.p>
                <motion.img src={profile} initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='w-[150px] ml-[68px] mt-6'></motion.img>
            </div>

            <div className="flex flex-col gap-8">
                <motion.h1 initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-4xl font-[800] font-[Lato] mt-20'>devansh@devanshnahar.tech</motion.h1>
                <motion.a href='https://github.com/Devansh-sys899' initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-4xl font-extrabold font-[Lato]'>Github</motion.a>
                <motion.a href='https://www.linkedin.com/in/devansh-nahar-9a093a3b8?utm_source=share_via&utm_content=profile&utm_medium=member_android' initial={{ opacity: 0, y: 30}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='text-4xl font-extrabold font-[Lato]'>LinkedIn</motion.a>
            </div>
        </div>
    </div>
  )
}

export default Contact