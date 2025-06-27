'use client'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, GraduationCap } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Shiven Saini",
      role: "Founder & Lead Developer",
      education: "BTech ECE, DCRUST Sonipat",
      bio: "Passionate about space technology and open source development. Leading the mission to make space exploration accessible through innovative software solutions.",
      skills: ["Electronics", "Embedded Systems", "Space Tech", "Open Source"],
      avatar: "SS"
    },
    {
      name: "Pankaj",
      role: "Co-Founder & Software Architect",
      education: "BTech CSE, DCRUST",
      bio: "Expert in software architecture and simulation engines. Dedicated to building robust, scalable systems for space exploration technologies.",
      skills: ["Software Architecture", "Algorithms", "Simulation", "Backend"],
      avatar: "P"
    },
    {
      name: "Sahil",
      role: "Co-Founder & Hardware Specialist",
      education: "BTech ECE, DCRUST",
      bio: "Hardware specialist with a passion for space systems. Focused on bridging the gap between software and hardware in space technology.",
      skills: ["Hardware Design", "Electronics", "Systems Integration", "IoT"],
      avatar: "S"
    }
  ]

  return (
    <section id="team" className="py-20 relative">
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
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the founding members driving the future of space technology through innovation and collaboration.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl p-8 text-center group hover:bg-cosmic-primary/5 transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Avatar */}
              <motion.div
                className="relative mb-6 mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-primary to-cosmic-secondary p-1 mx-auto">
                  <div className="w-full h-full rounded-full bg-cosmic-dark flex items-center justify-center">
                    <span className="text-3xl font-bold text-cosmic-primary">
                      {member.avatar}
                    </span>
                  </div>
                </div>
                
                {/* Orbital ring around avatar */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-cosmic-primary/30"
                  style={{ width: 140, height: 140, left: -4, top: -4 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cosmic-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-cosmic-secondary font-semibold mb-2">
                {member.role}
              </p>
              <div className="flex items-center justify-center text-gray-400 mb-4">
                <GraduationCap size={16} className="mr-2" />
                <span className="text-sm">{member.education}</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-cosmic-primary/20 text-cosmic-primary text-sm rounded-full border border-cosmic-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-cosmic-primary/20 text-cosmic-primary hover:bg-cosmic-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-cosmic-primary/20 text-cosmic-primary hover:bg-cosmic-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-cosmic-primary/20 text-cosmic-primary hover:bg-cosmic-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
          <motion.div
            className="w-96 h-96 rounded-full border-2 border-cosmic-primary"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  )
}