'use client'

import { useState, useEffect } from 'react'
import AutoQuoteForm from '@/components/quote/AutoQuoteForm'
import { TruckIcon, ShieldCheckIcon, ClockIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import ClientOnly from '@/components/ClientOnly'

export default function AutoQuotePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-6"></div>
              <div className="h-12 bg-gray-200 rounded mb-6"></div>
              <div className="h-6 bg-gray-200 rounded mb-8"></div>
              <div className="flex justify-center space-x-4">
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <ClientOnly>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-12 h-12 bg-green-100 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-100 rounded-full opacity-50"
        />
        </div>
      </ClientOnly>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 relative">
          <ClientOnly>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <TruckIcon className="h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="text-sm font-semibold text-blue-600 tracking-wider">AUTO INSURANCE QUOTE</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SparklesIcon className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Get Your Free Auto Insurance Quote
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Compare rates and get comprehensive auto insurance coverage in minutes.
              No obligation, instant quotes available 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center justify-center space-x-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ShieldCheckIcon className="h-5 w-5" />
                </motion.div>
                <span className="text-sm font-medium">Secure & Protected</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <ClockIcon className="h-5 w-5" />
                </motion.div>
                <span className="text-sm font-medium">Quick 5-Min Quote</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-purple-600 bg-purple-50 px-4 py-2 rounded-full"
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <StarIcon className="h-5 w-5" />
                </motion.div>
                <span className="text-sm font-medium">Best Rates</span>
              </motion.div>
            </motion.div>
          </motion.div>
          </ClientOnly>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 relative">
        <ClientOnly>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <AutoQuoteForm />
          </motion.div>
        </ClientOnly>
      </div>
    </div>
  )
}
