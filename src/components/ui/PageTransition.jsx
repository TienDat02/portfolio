'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const loadingVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    rotate: [0, 180, 360],
    borderRadius: ["0%", "50%", "0%"]
  },
  exit: { scale: 0.8, opacity: 0 }
}

const loadingTransition = {
  duration: 1.5,
  ease: "easeInOut",
  times: [0, 0.5, 1],
  repeat: Infinity,
  repeatDelay: 0.5
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1500) // Show loader for 1.5 seconds
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={loadingTransition}
          />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}