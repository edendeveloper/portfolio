"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import CustomButton from "./custom-button"

export default function Contact() {
  const ref = useRef(null)
  const canvasRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create stars
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.blinkSpeed = Math.random() * 0.05 + 0.01
        this.alpha = Math.random()
        this.alphaDirection = Math.random() > 0.5 ? 1 : -1
        this.color = `rgba(147, 51, 234, ${this.alpha})`
      }

      update() {
        this.alpha += this.alphaDirection * this.blinkSpeed

        if (this.alpha >= 1 || this.alpha <= 0.3) {
          this.alphaDirection *= -1
        }

        this.color = `rgba(147, 51, 234, ${this.alpha})`
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize stars
    const stars = []
    const starCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const contactLinks = [
    {
      name: "Email",
      value: "welington.robertodev@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:welington.robertodev@gmail.com",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      name: "GitHub",
      value: "github.com/edendeveloper",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/janedoe",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/welington-manfrim",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/welington-manfrim/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-purple-50 dark:bg-purple-950/30 relative overflow-hidden">
      {/* Background animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100/50 dark:to-purple-900/30 z-0"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 md:gap-8 max-w-3xl mx-auto">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5, x: 0 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-purple-100/50 dark:border-purple-800/50 flex items-center group"
              >
                <div
                  className={`${link.color} text-white p-4 md:p-5 flex items-center justify-center rounded-full m-4 md:m-5`}
                >
                  {link.icon}
                </div>
                <div className="flex-1 p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{link.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{link.value}</p>
                </div>
                <div className="pr-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <CustomButton href="#home" className="bg-purple-600 hover:bg-purple-700 text-white">
              Back to Top
            </CustomButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden z-0 pointer-events-none">
        <motion.div
          className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-200/30 dark:bg-purple-800/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 w-40 h-40 bg-purple-300/20 dark:bg-purple-700/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}

