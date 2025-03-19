"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isNavigating, setIsNavigating] = useState(false)
  const [targetHash, setTargetHash] = useState("")

  useEffect(() => {
    // Function to handle navigation clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      // Only handle internal hash navigation
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault()
        setTargetHash(anchor.hash)
        setIsNavigating(true)

        // After animation completes, navigate to the section
        setTimeout(() => {
          window.location.hash = anchor.hash
          setIsNavigating(false)

          // Smooth scroll to element with a slight delay to ensure hash change is processed
          setTimeout(() => {
            const element = document.getElementById(anchor.hash.substring(1))
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }, 100)
        }, 800) // Match this with the animation duration
      }
    }

    // Add event listener to all clicks
    document.addEventListener("click", handleNavClick)

    return () => {
      document.removeEventListener("click", handleNavClick)
    }
  }, [])

  return (
    <>
      {children}

      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{
              scaleY: [0, 1, 1, 0],
              originY: [0, 0, 1, 1],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 0.6, 1],
              ease: [0.645, 0.045, 0.355, 1.0],
            }}
            className="fixed inset-0 bg-purple-600 dark:bg-purple-800 z-50 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20],
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.4, 0.6, 1],
              }}
              className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
            >
              {targetHash.substring(1).charAt(0).toUpperCase() + targetHash.substring(2)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

