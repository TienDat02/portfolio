"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] mix-blend-lighten relative">
            <Image
              src="/Avatar/avatar.png"
              alt="avatar"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
        
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-2 border-accent opacity-30"
            style={{
              inset: `${-18 - index * 10}px`,
              borderRadius: '55%',
              borderStyle: 'dashed',
              borderWidth: '2px',
              borderColor: 'var(--accent)',
              borderDasharray: `${3 + index} ${3 + index}`,
            }}
            animate={{
              rotate: 180,
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 16 + index * 4,
              repeat: Infinity,
              ease: "backInOut",
              scale: {
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              },
              delay: index * 2,
            }}
          />
        ))}
        
        <motion.div
          className="absolute rounded-full border-2 border-accent opacity-50"
          style={{
            inset: '-5px',
            borderRadius: '55%',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: 'var(--accent)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;