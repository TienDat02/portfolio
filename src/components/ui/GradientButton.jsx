'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ThreeDMotionButton = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <motion.button
        className="
          relative
          text-white
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:focus:ring-cyan-800
          shadow-lg
          overflow-hidden
        "
        whileHover={{
          scale: 1.05,
          rotateX: [-5, 5, -5],
          rotateY: [5, -5, 5],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ rotateX: 0, rotateY: 0 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        <motion.span
          className="block relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          style={{ 
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-20"
          style={{ transform: "translateZ(10px)" }}
        />
      </motion.button>
    </Link>
  )
}

export default ThreeDMotionButton