'use client'
import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: Star[] = []
    const numStars = 250  // More stars for darker theme

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,  // Smaller, more subtle stars
        opacity: Math.random() * 0.6 + 0.1,  // Dimmer stars
        speed: Math.random() * 0.3 + 0.05,   // Slower movement
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Update star position
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = -5
          star.x = Math.random() * canvas.width
        }

        // Update opacity for twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.01
        star.opacity = Math.max(0.05, Math.min(0.6, star.opacity))

        // Draw star with darker blue
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#0ea5e9'  // Updated to match new primary color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 60%, #010409 100%)' 
      }}
    />
  )
}