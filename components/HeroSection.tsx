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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        {/* Logo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <AnimatedLogo size={150} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-cosmic-primary via-white to-cosmic-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Team Beyond Space
        </motion.h1>

        {/* Slogan */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Tech to explore the beyond
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Building open source technology and cool projects to augment space related tech or simulation engines.
          Join us in pushing the boundaries of space exploration through code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <motion.a
            href="https://github.com/Team-Beyond-Space"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cosmic-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            <span>Explore Our GitHub</span>
          </motion.a>

          <motion.button
            onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center space-x-3 glass px-8 py-4 rounded-full text-cosmic-primary font-semibold text-lg border border-cosmic-primary/50 hover:bg-cosmic-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={24} />
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
          <ArrowDown size={32} className="text-cosmic-primary mx-auto" />
        </motion.button>
      </div>
    </section>
  )
}