'use client'
import { motion } from 'framer-motion'
import { Code, Rocket, Users, Globe } from 'lucide-react'

export default function MissionSection() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source Innovation",
      description: "Building cutting-edge space technology through collaborative open source development."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Simulation",
      description: "Creating advanced simulation engines for space exploration and mission planning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Fostering a global community of space enthusiasts and developers."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Beyond Earth",
      description: "Pushing the boundaries of human exploration and technological advancement."
    }
  ]

  return (
    <section id="mission" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to advancing space exploration through innovative technology, 
            open collaboration, and the relentless pursuit of knowledge beyond our world.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-16 cosmic-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cosmic-primary mb-6">
              Building the Future of Space Technology
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              At Team Beyond Space, we believe that the future of space exploration lies in the hands of 
              passionate developers, engineers, and visionaries working together. Our mission is to create 
              powerful, accessible tools and simulations that enable researchers, students, and space 
              enthusiasts to contribute to humanity's greatest adventure: exploring the cosmos.
            </p>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:bg-cosmic-primary/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 mb-6 text-cosmic-primary group-hover:from-cosmic-primary/30 group-hover:to-cosmic-secondary/30 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-cosmic-primary transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <motion.div
            className="w-32 h-32 rounded-full border border-cosmic-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <motion.div
            className="w-24 h-24 rounded-full border border-cosmic-secondary"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  )
}