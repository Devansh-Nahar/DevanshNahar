import React from 'react'
import { motion } from 'motion/react'

const Story = () => {
  return (
    <section id="story" className="w-full py-16 lg:py-24">
      <div className="section-container flex flex-col gap-8 lg:gap-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-dot"></div>
          <h2 className="section-title">My Story</h2>
        </motion.div>

        {/* Text columns */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-16 sm:justify-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-700 font-normal font-poppins text-center sm:text-left sm:max-w-xs lg:max-w-sm"
            style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
          >
            I am a MERN stack developer who builds production ready applications and complex workflows
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-gray-700 font-normal font-poppins text-center sm:text-left sm:max-w-xs lg:max-w-sm"
            style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
          >
            I enjoy working on complex workflows, backend systems, and improving how products scale and perform.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Story