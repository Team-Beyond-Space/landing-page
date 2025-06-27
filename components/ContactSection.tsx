'use client'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Github, MapPin, Send, User, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with email service or GitHub issues
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub Organization",
      content: "Team-Beyond-Space",
      link: "https://github.com/Team-Beyond-Space",
      description: "Follow our repositories and contribute to our projects"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@teambeyondspace.org",
      link: "mailto:hello@teambeyondspace.org",
      description: "Get in touch for collaborations and partnerships"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Discussions",
      content: "Join our community",
      link: "https://github.com/Team-Beyond-Space/discussions",
      description: "Participate in technical discussions and share ideas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "DCRUST, Sonipat",
      link: "#",
      description: "Based in Haryana, India - Building globally"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission or have questions? We'd love to hear from you. 
            Let's build the future of space technology together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're a developer, researcher, student, or space enthusiast, 
              we welcome you to be part of our growing community. Here's how you can reach us:
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-start space-x-4 p-4 glass rounded-xl hover:bg-cosmic-primary/5 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 flex items-center justify-center text-cosmic-primary group-hover:from-cosmic-primary/30 group-hover:to-cosmic-secondary/30 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cosmic-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-cosmic-secondary font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              className="mt-8 p-4 glass rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-cosmic-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Quick Response</span>
              </div>
              <p className="text-gray-300 mt-2">
                We typically respond within 24-48 hours. For urgent matters, 
                reach out directly through GitHub issues.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 cosmic-glow">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cosmic-primary w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-cosmic-dark/50 border border-cosmic-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-primary focus:outline-none focus:ring-2 focus:ring-cosmic-primary/20 transition-all duration-300"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cosmic-primary w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-cosmic-dark/50 border border-cosmic-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-primary focus:outline-none focus:ring-2 focus:ring-cosmic-primary/20 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cosmic-dark/50 border border-cosmic-primary/30 rounded-lg text-white focus:border-cosmic-primary focus:outline-none focus:ring-2 focus:ring-cosmic-primary/20 transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="contribution">Want to Contribute</option>
                    <option value="project-idea">Project Idea</option>
                    <option value="question">General Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-cosmic-dark/50 border border-cosmic-primary/30 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-primary focus:outline-none focus:ring-2 focus:ring-cosmic-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your ideas, questions, or how you'd like to contribute to our mission..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cosmic-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 opacity-10">
        <motion.div
          className="w-40 h-40 rounded-full border-2 border-cosmic-primary"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  )
}