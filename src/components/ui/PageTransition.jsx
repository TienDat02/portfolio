'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const loadingVariants = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
  }
}

const loadingTransition = {
  duration: 1,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 1
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1000) // Show loader for 2 seconds
    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return (
      <motion.div
        className="loader"
        variants={loadingVariants}
        animate="animate"
        transition={loadingTransition}
      />
    )
  }

  return children
}