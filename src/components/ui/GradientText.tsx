import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ text, className }) => {
  return (
    <motion.h1
      className={className}
      style={{
        backgroundImage: "linear-gradient(270deg, #04ffa8, #04d9ff, #045cff)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {text}
    </motion.h1>
  );
};

export default GradientText;