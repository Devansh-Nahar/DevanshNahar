import React from 'react'
import { motion } from 'motion/react'
import UniSpaceImg from '../assets/UniSpace.png'
import FinexusImg from '../assets/Finexus.png'

const projectData = [
  {
    title: 'Finexus',
    image: FinexusImg,
    description:
      'Built a conversational AI system that centralizes financial operations like invoicing, reporting, and bookkeeping across platforms like Stripe and PayPal.',
    link: 'https://finexus-delta.vercel.app/',
    features: [
      'Conversational interface (no dashboard dependency)',
      'Multi-platform integrations (Stripe, PayPal)',
      'AI-driven workflows for financial tasks',
    ],
  },
  {
    title: 'UniSpace',
    image: UniSpaceImg,
    description:
      'Built a platform enabling businesses to book shared resources with real-time availability and dynamic pricing.',
    link: 'https://unispace-rho.vercel.app/',
    features: [
      'Multi-role system (users + managers)',
      'Custom booking engine (date/time logic)',
      'Stripe payment integration',
    ],
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.2 }}
    className="flex flex-col lg:flex-row gap-6 lg:gap-10"
  >
    <img
      src={project.image}
      alt={`${project.title} project screenshot`}
      loading="lazy"
      className="w-full lg:w-1/2 border-2 border-gray-300 rounded-2xl object-cover"
    />

    <div className="flex flex-col gap-2 lg:gap-3">
      <h3 className="text-xl sm:text-2xl font-semibold font-poppins">
        {project.title}
      </h3>

      <p
        className="text-gray-600 font-normal"
        style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
      >
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 transition-colors duration-200 break-all"
        style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
      >
        {project.link}
      </a>

      <h4 className="text-lg sm:text-xl font-normal font-poppins mt-1">
        Key Features:
      </h4>

      <ul className="flex flex-col gap-1">
        {project.features.map((feature, i) => (
          <li
            key={i}
            className="text-gray-600 font-normal"
            style={{ fontSize: 'clamp(0.938rem, 2vw, 1.125rem)' }}
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 lg:py-24">
      <div className="section-container flex flex-col gap-8 lg:gap-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="section-header"
        >
          <div className="section-dot"></div>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="font-medium font-lato"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3.75rem)' }}
        >
          FEATURED WORKS
        </motion.h2>

        {/* Project cards */}
        <div className="flex flex-col gap-16 lg:gap-20">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects