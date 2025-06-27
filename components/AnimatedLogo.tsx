'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface AnimatedLogoProps {
  size?: number
  className?: string
}

export default function AnimatedLogo({ size = 120, className = '' }: AnimatedLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer orbital ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cosmic-primary/30"
        style={{ width: size * 1.4, height: size * 1.4, left: -size * 0.2, top: -size * 0.2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle orbital ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cosmic-secondary/40"
        style={{ width: size * 1.2, height: size * 1.2, left: -size * 0.1, top: -size * 0.1 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Logo container with glow effect */}
      <motion.div
        className="relative z-10 rounded-full bg-gradient-to-br from-cosmic-primary/20 to-cosmic-secondary/20 p-2 cosmic-glow overflow-hidden"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {/* Actual Logo Image - Circular Crop */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-cosmic-dark">
          <Image
            src="/images/logo.png"
            alt="Team Beyond Space Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cosmic-primary rounded-full"
          style={{
            left: `${50 + Math.cos((i * Math.PI) / 3) * 60}%`,
            top: `${50 + Math.sin((i * Math.PI) / 3) * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  )
}