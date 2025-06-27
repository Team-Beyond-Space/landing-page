'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Star } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-cosmic-primary/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 p-1 cosmic-glow"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-cosmic-dark flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Team Beyond Space Logo"
                  width={32}
                  height={32}
                  className="object-contain filter drop-shadow-sm"
                  priority
                />
              </div>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">
              Team Beyond Space
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cosmic-primary transition-colors duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cosmic-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            
            {/* GitHub Link */}
            <motion.a
              href="https://github.com/Team-Beyond-Space"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-cosmic-primary/20 hover:bg-cosmic-primary/30 px-4 py-2 rounded-full transition-all duration-300 cosmic-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cosmic-primary p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-cosmic-primary/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-cosmic-primary transition-colors duration-300 py-2"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href="https://github.com/Team-Beyond-Space"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-cosmic-primary py-2"
                whileHover={{ x: 10 }}
              >
                <Github size={18} />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}