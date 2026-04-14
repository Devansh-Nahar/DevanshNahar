import React from 'react'
import profile from '../assets/profile.png'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 lg:py-24">
      <div className="section-container flex flex-col gap-8 lg:gap-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="section-header"
        >
          <div className="section-dot"></div>
          <h2 className="section-title">Let's talk</h2>
        </motion.div>

        {/* Content grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left — Name + avatar */}
          <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-bold font-ubuntu"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
            >
              Devansh
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-gray-600 font-normal font-poppins"
              style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
            >
              Open to collaboration
            </motion.p>

            <motion.img
              src={profile}
              alt="Devansh Nahar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              loading="lazy"
              className="w-24 sm:w-32 lg:w-[150px] rounded-full mt-2"
            />
          </div>

          {/* Right — Links */}
          <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left lg:mt-8">
            <motion.a
              href="mailto:devansh@devanshnahar.tech"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-extrabold font-lato text-gray-900 hover:text-black transition-colors duration-200 break-all"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
            >
              devansh@devanshnahar.tech
            </motion.a>

            <motion.a
              href="https://github.com/Devansh-sys899"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-extrabold font-lato hover:text-gray-600 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Github
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/devansh-nahar-9a093a3b8"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="font-extrabold font-lato hover:text-gray-600 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact