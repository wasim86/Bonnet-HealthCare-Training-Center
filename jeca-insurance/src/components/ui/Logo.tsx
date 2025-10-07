'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white' | 'dark'
  animated?: boolean
}

export default function Logo({ size = 'md', variant = 'default', animated = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  }

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  }

  const colorClasses = {
    default: {
      shield: 'from-blue-600 to-blue-800',
      text: 'text-gray-900',
      accent: 'text-blue-600'
    },
    white: {
      shield: 'from-white to-gray-100',
      text: 'text-white',
      accent: 'text-blue-200'
    },
    dark: {
      shield: 'from-gray-800 to-gray-900',
      text: 'text-gray-900',
      accent: 'text-blue-600'
    }
  }

  const colors = colorClasses[variant]

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1
    },
    hover: {
      scale: 1.05
    }
  }

  const shieldVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1
    }
  }

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      className="flex items-center space-x-3"
      variants={animated ? logoVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
      whileHover={animated ? "hover" : undefined}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            className={`fill-gradient-to-br ${colors.shield}`}
            style={{
              background: `linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)`,
              fill: 'url(#gradient)'
            }}
            variants={animated ? shieldVariants : undefined}
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Shield Shape */}
          <motion.path
            d="M50 15 L75 25 L75 45 Q75 65 50 85 Q25 65 25 45 L25 25 Z"
            fill="url(#gradient)"
            stroke="white"
            strokeWidth="2"
            variants={animated ? shieldVariants : undefined}
          />

          {/* Inner Shield Design */}
          <motion.path
            d="M50 25 L65 30 L65 45 Q65 60 50 75 Q35 60 35 45 L35 30 Z"
            fill="url(#innerGradient)"
            variants={animated ? shieldVariants : undefined}
            transition={{ delay: 0.5 }}
          />

          {/* Center Emblem - J */}
          <motion.text
            x="50"
            y="55"
            textAnchor="middle"
            className="fill-white font-bold text-2xl"
            variants={animated ? shieldVariants : undefined}
            transition={{ delay: 1 }}
          >
            J
          </motion.text>

          {/* Decorative Elements */}
          <motion.circle
            cx="50"
            cy="35"
            r="2"
            fill="white"
            opacity="0.8"
            variants={animated ? shieldVariants : undefined}
            transition={{ delay: 1.2 }}
          />
          <motion.circle
            cx="42"
            cy="65"
            r="1.5"
            fill="white"
            opacity="0.6"
            variants={animated ? shieldVariants : undefined}
            transition={{ delay: 1.4 }}
          />
          <motion.circle
            cx="58"
            cy="65"
            r="1.5"
            fill="white"
            opacity="0.6"
            variants={animated ? shieldVariants : undefined}
            transition={{ delay: 1.4 }}
          />
        </svg>
      </div>

      {/* Company Name */}
      <motion.div 
        className="flex flex-col"
        variants={animated ? textVariants : undefined}
      >
        <div className={`${textSizeClasses[size]} font-bold ${colors.text} leading-none`}>
          JECA
        </div>
        <div className={`text-xs ${colors.accent} font-medium tracking-wider uppercase`}>
          Insurance
        </div>
      </motion.div>
    </motion.div>
  )
}

// Floating Logo Animation Component
export function FloatingLogo({ size = 'lg' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Logo size={size} animated={true} />
    </motion.div>
  )
}
