import React from 'react'
import { motion } from 'motion/react'
import profileImg from '../assets/profile.png'

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)]">
      <div className="section-container flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 items-center py-8 sm:py-12 lg:py-0">
        {/* Text content */}
        <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-700 font-normal text-base lg:text-lg"
          >
            Hey! I am Devansh Nahar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-ubuntu font-semibold leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
          >
            Building production-ready web platforms.
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            href="/Devansh_Nahar_CV.pdf"
            download={"Devansh_Nahar_CV.pdf"}
            className="w-full sm:w-64 h-12 rounded-3xl bg-black flex items-center justify-center gap-4 text-white text-base font-normal font-poppins hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            <i className="bx bxs-chat text-white text-2xl relative top-0.5"></i>
            Download Resume
          </motion.a>
        </div>

        {/* Profile image — shows ABOVE text on mobile (flex-col-reverse) */}
        <motion.img
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          src={profileImg}
          alt="Devansh Nahar — Full Stack Developer"
          loading="lazy"
          className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[450px] mx-auto lg:mx-0 lg:ml-auto object-cover rounded-lg rotate-0 lg:rotate-2 lg:mt-24"
        />
      </div>
    </section>
  )
}

export default Hero