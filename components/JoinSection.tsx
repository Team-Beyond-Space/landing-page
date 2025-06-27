'use client'
import { motion } from 'framer-motion'
import { Users, Code, Rocket, Star, Github, MessageCircle } from 'lucide-react'

export default function JoinSection() {
  const ways = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Contribute Code",
      description: "Help build the next generation of space technology tools and simulations.",
      action: "Start Contributing"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Star Our Repos",
      description: "Show your support by starring our repositories and following our progress.",
      action: "Star on GitHub"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Join Discussions",
      description: "Share ideas, ask questions, and collaborate with fellow space enthusiasts.",
      action: "Join Community"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Propose Projects",
      description: "Have a space tech idea? Propose new projects and help shape our roadmap.",
      action: "Share Ideas"
    }
  ]

  const stats = [
    { number: "3", label: "Founding Members" },
    { number: "∞", label: "Possibilities" },
    { number: "100%", label: "Open Source" },
    { number: "0", label: "Barriers to Entry" }
  ]

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-cosmic-primary/20"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-cosmic-secondary/20"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of a community that's pushing the boundaries of space exploration through technology.
            Every contribution, no matter how small, helps us reach for the stars.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-cosmic-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ways to Join */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 text-center group hover:bg-cosmic-primary/5 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 mb-6 text-cosmic-primary group-hover:from-cosmic-primary/30 group-hover:to-cosmic-secondary/30 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {way.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cosmic-primary transition-colors duration-300">
                {way.title}
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {way.description}
              </p>
              <motion.button
                className="w-full py-3 px-4 bg-cosmic-primary/20 text-cosmic-primary rounded-lg border border-cosmic-primary/50 hover:bg-cosmic-primary/30 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {way.action}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 text-center cosmic-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Users className="w-10 h-10 text-cosmic-primary" />
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore the Beyond?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Team Beyond Space today and be part of the open source community that's building 
            the future of space exploration. Your journey to the stars starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://github.com/Team-Beyond-Space"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cosmic-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              <span>Join on GitHub</span>
            </motion.a>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-3 glass px-8 py-4 rounded-full text-cosmic-primary font-semibold text-lg border border-cosmic-primary/50 hover:bg-cosmic-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} />
              <span>Get in Touch</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}