import React from 'react'
import { motion } from 'motion/react'
import visual from '../assets/visual.png'

const services = [
  'React',
  'Express',
  'NodeJS',
  'MongoDB',
  'TailwindCSS',
  'Github',
  'Docker'
]

const TechStack = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="section-container flex flex-col gap-8 lg:gap-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="section-header"
        >
          <div className="section-dot"></div>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="font-semibold font-lato"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3.75rem)' }}
        >
          HOW CAN I HELP?
        </motion.h2>

        {/* Content grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Service list */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {services.map((service, i) => (
              <motion.h3
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                className="text-gray-600 font-normal font-lato"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)' }}
              >
                {service}
              </motion.h3>
            ))}
          </div>

          {/* Visual image */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            src={visual}
            alt="Development workflow visualization"
            loading="lazy"
            className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default TechStack