import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  duration?: number;
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

const GradientText: React.FC<GradientTextProps> = ({ 
  text, 
  className = '',
  colors = ['#04ffa8', '#04d9ff', '#045cff'],
  duration = 3,
  textSize = 'base',
  fontWeight = 'normal',
  as: Component = 'h1'
}) => {
  const textSizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const fontWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const gradientColors = colors.join(', ');
  
  return (
    <div className={className}>
      <div className={`${textSizeClasses[textSize]} ${fontWeightClasses[fontWeight]}`}>
        <motion.div
          style={{
            backgroundImage: `linear-gradient(270deg, ${gradientColors})`,
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <Component>{text}</Component>
        </motion.div>
      </div>
    </div>
  );
};

export default GradientText;