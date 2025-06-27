'use client'
import { motion } from 'framer-motion'
import { Rocket, Code, Cpu, Satellite, Github, ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  const upcomingProjects = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Mission Simulator",
      description: "Advanced space mission planning and simulation platform for trajectory calculations and mission optimization.",
      tags: ["Simulation", "Physics", "3D Graphics"],
      status: "Coming Soon"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Orbital Mechanics Engine",
      description: "Open-source orbital mechanics calculation engine for satellite tracking and space debris monitoring.",
      tags: ["Physics", "Mathematics", "Real-time"],
      status: "In Development"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Space Hardware Simulator",
      description: "Hardware-in-the-loop simulation platform for testing space electronics and embedded systems.",
      tags: ["Hardware", "Embedded", "Testing"],
      status: "Planning"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Constellation Tracker",
      description: "Real-time satellite constellation visualization and tracking system with predictive analytics.",
      tags: ["Visualization", "Data Science", "APIs"],
      status: "Research"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Coming Soon': return 'from-yellow-500 to-orange-500'
      case 'In Development': return 'from-cosmic-primary to-cosmic-secondary'
      case 'Planning': return 'from-purple-500 to-pink-500'
      case 'Research': return 'from-green-500 to-teal-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="py-20 relative">
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
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge space technology projects that will shape the future of space exploration and research.
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-16 text-center cosmic-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-10 h-10 text-cosmic-primary" />
            </motion.div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            🚀 Projects in Active Development
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            We're currently building the foundation for our space technology ecosystem. 
            Each project is designed to be open source and community-driven.
          </p>
          <motion.a
            href="https://github.com/Team-Beyond-Space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-cosmic-primary/20 hover:bg-cosmic-primary/30 px-6 py-3 rounded-full text-cosmic-primary font-semibold transition-all duration-300 border border-cosmic-primary/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>Watch Our Progress</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {/* Upcoming Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 group hover:bg-cosmic-primary/5 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 mb-6 text-cosmic-primary group-hover:from-cosmic-primary/30 group-hover:to-cosmic-secondary/30 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {project.icon}
              </motion.div>

              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-cosmic-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-cosmic-secondary/20 text-cosmic-secondary text-sm rounded-full border border-cosmic-secondary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 py-2 px-4 bg-cosmic-primary/20 text-cosmic-primary rounded-lg border border-cosmic-primary/50 hover:bg-cosmic-primary/30 transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled
                >
                  Coming Soon
                </motion.button>
                <motion.button
                  className="p-2 bg-cosmic-secondary/20 text-cosmic-secondary rounded-lg border border-cosmic-secondary/50 hover:bg-cosmic-secondary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  disabled
                >
                  <Github size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Have an idea for a space technology project? We'd love to hear from you!
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cosmic-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Propose a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}