import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Works', href: '#projects' },
    { label: 'My Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="w-full relative z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="section-container h-[72px] lg:h-[80px] flex items-center justify-between"
      >
        {/* Logo */}
        <h1 className="font-semibold font-ubuntu text-2xl lg:text-3xl">Devansh</h1>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg xl:text-xl font-normal text-gray-600 font-poppins hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 lg:gap-3 cursor-pointer"
          aria-label="Toggle menu"
        >
          <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} bg-gray-950 rounded-full text-white w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center text-lg lg:text-xl transition-transform duration-200`}></i>
          <p className="text-lg lg:text-xl font-medium font-poppins hidden sm:block">
            {isOpen ? 'Close' : 'Menu'}
          </p>
        </button>
      </motion.div>

      {/* Mobile / Tablet overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 w-full bg-[#f8f5f0] border-b border-gray-200 shadow-lg z-40 overflow-hidden lg:hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-800 font-poppins py-2 hover:text-black transition-colors duration-200 border-b border-gray-200 last:border-b-0"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar