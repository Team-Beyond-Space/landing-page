'use client'
import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink, Heart, Rocket, Code, Users } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '#mission' },
      { name: 'Our Team', href: '#team' },
      { name: 'Projects', href: '#projects' },
      { name: 'Join Us', href: '#join' }
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com/Team-Beyond-Space', external: true },
      { name: 'Discussions', href: 'https://github.com/Team-Beyond-Space/discussions', external: true },
      { name: 'Issues', href: 'https://github.com/Team-Beyond-Space/issues', external: true },
      { name: 'Contributors', href: 'https://github.com/Team-Beyond-Space/contributors', external: true }
    ],
    resources: [
      { name: 'Documentation', href: '#', external: true },
      { name: 'API Reference', href: '#', external: true },
      { name: 'Tutorials', href: '#', external: true },
      { name: 'Blog', href: '#', external: true }
    ]
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Team-Beyond-Space',
      icon: <Github size={24} />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      href: 'mailto:hello@teambeyondspace.org',
      icon: <Mail size={24} />,
      color: 'hover:text-cosmic-primary'
    }
  ]

  const stats = [
    { icon: <Code size={20} />, label: 'Open Source', value: '100%' },
    { icon: <Users size={20} />, label: 'Community', value: 'Growing' },
    { icon: <Rocket size={20} />, label: 'Mission', value: 'Active' }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-cosmic-darker border-t border-cosmic-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-cosmic-primary animate-pulse" />
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full border border-cosmic-secondary animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border border-cosmic-primary animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 p-1 cosmic-glow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-cosmic-dark flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Team Beyond Space Logo"
                    width={36}
                    height={36}
                    className="object-contain filter drop-shadow-sm"
                  />
                </div>
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-cosmic-primary to-cosmic-secondary bg-clip-text text-transparent">
                Team Beyond Space
              </span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building open source technology to explore the beyond. 
              Join us in pushing the boundaries of space exploration through innovation and collaboration.
            </p>

            {/* Stats */}
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-cosmic-primary">{stat.icon}</div>
                  <span className="text-gray-400">{stat.label}:</span>
                  <span className="text-cosmic-secondary font-medium">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {/* Organization Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Organization</h4>
              <ul className="space-y-3">
                {footerLinks.organization.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-cosmic-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-cosmic-primary transition-colors duration-300 text-sm flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-cosmic-primary transition-colors duration-300 text-sm flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Coming Soon Notice */}
              <motion.div
                className="mt-4 p-3 glass rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-cosmic-secondary">
                  🚀 Documentation and resources coming soon!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cosmic-primary/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Team Beyond Space.</span>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>for space exploration</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-full glass hover:scale-110`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Final Tagline */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-cosmic-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-cosmic-primary font-medium">
            🚀 Tech to explore the beyond 🌌
          </p>
        </motion.div>
      </div>
    </footer>
  )
}