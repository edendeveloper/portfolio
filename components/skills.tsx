"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Framer Motion", level: 50 },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const canvasRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    window.addEventListener("resize", handleResize)
    handleResize()
    
    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 15 + 5
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `rgba(147, 51, 234, ${Math.random() * 0.1 + 0.05})`
        this.shape = Math.random() > 0.5 ? 'circle' : 'square'
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed
        
        if (this.x > canvas.width + this.size) this.x = -this.size
        else if (this.x < -this.size) this.x = canvas.width + this.size
        
        if (this.y > canvas.height + this.size) this.y = -this.size
        else if (this.y < -this.size) this.y = canvas.height + this.size
      }
      
      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        
        if (this.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        }
        
        ctx.restore()
      }
    }
    
    // Initialize particles
    function init() {
      particles = []
      const particleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 20000))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    init()
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="skills" className="py-20 bg-purple-50 dark:bg-purple-950/30 relative overflow-hidden">
      {/* Background animation canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 -right-64 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              My <span className="text-purple-600 dark:text-purple-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world. Here are my main areas of
              expertise:
            </p>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 dark:border-purple-800/50 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden relative">
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-purple-400 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 h-full w-4 bg-white/30"
                      animate={{ 
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
