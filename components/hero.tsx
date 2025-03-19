"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Navbar from "./navbar"
import CustomButton from "./custom-button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Frontend Developer"
  const [index, setIndex] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 8000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Code lines for the animated code block
  const codeLines = [
    "function Portfolio() {",
    "  const skills = ['React', 'Next.js', 'TypeScript'];",
    "  const passion = 'Building beautiful UIs';",
    "",
    "  return (",
    "    <Developer",
    '      name="Welington"',
    "      skills={skills}",
    "      passion={passion}",
    "    />",
    "  );",
    "}",
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 flex flex-col md:flex-row items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl md:w-1/2 text-center md:text-left md:pr-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-purple-400 dark:from-purple-400 dark:to-purple-200 text-transparent bg-clip-text">
            Hello, I'm Welington Manfrim
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300 h-10">
            {text}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            I build beautiful, interactive, and responsive web experiences with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <CustomButton href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white">
              <span className="flex items-center justify-center gap-1">View My Work</span>
            </CustomButton>
            <CustomButton
              href="#"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950"
            >
              <span className="flex items-center justify-center gap-1">Download Resume</span>
            </CustomButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
        >
          {/* Particle animation canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

          {/* Animated code block */}
          <motion.div
            className="relative z-10 bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-purple-500/30 w-full max-w-md overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center px-4 py-2 bg-gray-800/80 dark:bg-gray-900/80 border-b border-purple-500/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400">portfolio.tsx</div>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300 dark:text-gray-300">
              <div className="relative">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="whitespace-pre"
                  >
                    <span className="text-gray-500 inline-block w-8">{index + 1}</span>
                    <span className="text-purple-400">{line.includes("function") ? "function" : ""}</span>
                    <span className="text-yellow-300">{line.includes("Portfolio") ? "Portfolio" : ""}</span>
                    <span className="text-white">
                      {line.includes("function")
                        ? line.replace("function", "")
                        : line.includes("Portfolio")
                          ? line.replace("Portfolio", "")
                          : line.includes("const")
                            ? line.split("=")[0]
                            : line.includes("return")
                              ? "return"
                              : line.includes("<Developer")
                                ? "<Developer"
                                : line.includes("/>")
                                  ? "/>"
                                  : line}
                    </span>
                    <span className="text-green-400">{line.includes("=") ? "= " + line.split("=")[1] : ""}</span>
                    <span className="text-blue-400">
                      {line.includes("name")
                        ? "name"
                        : line.includes("skills")
                          ? "skills"
                          : line.includes("passion")
                            ? "passion"
                            : ""}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-purple-500/20 to-transparent"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </a>
      </motion.div>
    </section>
  )
}

