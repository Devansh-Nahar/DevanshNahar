import React from 'react'
import { motion } from 'motion/react'
import UniSpaceImg from '../assets/UniSpace.png'
import FinexusImg from '../assets/Finexus.png'

const Projects = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-10'>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="border-b-2 border-b-black w-[90vw] pb-3 flex items-center gap-2 ml-20">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <h1 className="text-xl font-[poppins] font-normal ">Projects</h1>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className='text-6xl font-[500] font-[Lato] ml-[70px]'>FEATURED WORKS</motion.h1>

            <div className="w-full h-auto flex flex-col gap-20 mt-4">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="flex justify-center gap-32 ml-16">
                    <img src={FinexusImg} className='w-[500px] border-2 border-gray-300 mt-2 rounded-2xl' />
                    <div className='flex flex-col gap-2'>
                        <h1 className="text-2xl font-semibold ml-2 font-[poppins]">Finexus</h1>
                        <p className='text-lg text-gray-600 font-normal ml-2'>Built a conversational AI system that centralizes financial operations like invoicing, reporting, and bookkeeping across platforms like Stripe and PayPal.</p>
                        <a href="https://unispace-rho.vercel.app/" className='ml-2 text-lg text-blue-500'> https://finexus-delta.vercel.app/</a>
                        <h2 className="text-xl font-normal font-[poppins] ml-2">Key Features:</h2>
                        <p className="text-gray-600 font-normal text-lg ml-2">Conversational interface (no dashboard dependency)</p>
                        <p className="text-gray-600 font-normal text-lg ml-2">Multi-platform integrations (Stripe, PayPal)</p>
                        <p className="text-gray-600 font-normal text-lg ml-2">AI-driven workflows for financial tasks</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="flex justify-center gap-32 ml-16">
                    <img src={UniSpaceImg} className='w-[500px] border-2 border-gray-300 mt-2 rounded-2xl' />
                    <div className='flex flex-col gap-2'>
                        <h1 className="text-2xl font-semibold ml-2 font-[poppins]">UniSpace</h1>
                        <p className='text-lg text-gray-600 font-normal ml-2'>Built a platform enabling businesses to book shared resources with real-time availability and dynamic pricing.</p>
                        <a href="https://unispace-rho.vercel.app/" className='ml-2 text-lg text-blue-500'> https://unispace-rho.vercel.app/</a>
                        <h2 className="text-xl font-normal font-[poppins] ml-2">Key Features:</h2>
                        <p className="text-gray-600 font-normal text-lg ml-2">Multi-role system (users + managers)</p>
                        <p className="text-gray-600 font-normal text-lg ml-2">Custom booking engine (date/time logic)</p>
                        <p className="text-gray-600 font-normal text-lg ml-2">Stripe payment integration</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects