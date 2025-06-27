'use client'
import { motion } from 'framer-motion'
import { Github, ArrowDown, Rocket } from 'lucide-react'
import AnimatedLogo from './AnimatedLogo'

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#mission')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo with extra mobile spacing */}
        <motion.div
          className="mb-8 md:mb-8 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <AnimatedLogo size={120} className="md:w-[150px] md:h-[150px]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-space-bold mb-8 md:mb-12 bg-gradient-to-r from-cosmic-primary via-white to-cosmic-secondary bg-clip-text text-transparent tracking-tight px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Team Beyond Space
        </motion.h1>

        {/* Slogan */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-space-light tracking-wide px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Tech to explore the beyond
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-space-normal px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Building open source technology and cool projects to augment space related tech or simulation engines.
          Join us in pushing the boundaries of space exploration through code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <motion.a
            href="https://github.com/Team-Beyond-Space"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-space-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-cosmic-primary/50 transition-all duration-300 w-full sm:w-auto max-w-xs"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="md:w-6 md:h-6" />
            <span>Explore Our GitHub</span>
          </motion.a>

          <motion.button
            onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center space-x-3 glass px-6 md:px-8 py-3 md:py-4 rounded-full text-cosmic-primary font-space-semibold text-base md:text-lg border border-cosmic-primary/50 hover:bg-cosmic-primary/10 transition-all duration-300 w-full sm:w-auto max-w-xs"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={20} className="md:w-6 md:h-6" />
            <span>Join Our Mission</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown size={28} className="md:w-8 md:h-8 text-cosmic-primary mx-auto" />
        </motion.button>
      </div>
    </section>
  )
}