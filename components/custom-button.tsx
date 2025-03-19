"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  type?: "button" | "submit" | "reset"
}

export default function CustomButton({
  href,
  onClick,
  children,
  variant = "default",
  className,
  size = "default",
  type = "button",
  ...props
}: CustomButtonProps) {
  const [isRippling, setIsRippling] = useState(false)
  const [rippleX, setRippleX] = useState(0)
  const [rippleY, setRippleY] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setRippleX(e.clientX - rect.left)
    setRippleY(e.clientY - rect.top)
    setIsRippling(true)

    setTimeout(() => {
      setIsRippling(false)
    }, 600)

    if (onClick) onClick()
  }

  const isPurpleButton =
    variant === "default" || (className && (className.includes("bg-purple") || className.includes("border-purple")))

  const buttonContent = <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
        onClick={handleClick}
      >
        <Button variant={variant} size={size} className={className} asChild {...props}>
          <span>{buttonContent}</span>
        </Button>
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        size={size}
        className={cn("relative overflow-hidden", className)}
        onClick={handleClick}
        type={type}
        {...props}
      >
        {buttonContent}
        {isRippling && (
          <motion.span
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("absolute rounded-full", isPurpleButton ? "bg-white/30" : "bg-purple-500/30")}
            style={{
              left: rippleX,
              top: rippleY,
              width: 5,
              height: 5,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </Button>
    </motion.div>
  )
}

