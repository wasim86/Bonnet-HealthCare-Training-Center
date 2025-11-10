'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import {
  TruckIcon,
  HomeIcon,
  HeartIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid'



const quoteCategories = [
  {
    id: 'auto',
    name: 'ACLS',
    description: 'ACLS training empowers healthcare professionals to manage cardiac...',
    icon: TruckIcon,
    color: 'from-blue-600 to-indigo-700',
    href: '/services/advanced-cardiovascular-life-support-acls'
  },
  {
    id: 'health',
    name: 'BLS',
    description: 'BLS training turns individuals into capable first responders.',
    icon: HeartIcon,
    color: 'from-green-600 to-emerald-700',
    href: '/services/basic-life-support-bls'
  },
  {
    id: 'life',
    name: 'Hands Only CPR',
    description: 'Our CPR courses provide practical, hands-on training through simulations.',
    icon: HeartIcon,
    color: 'from-amber-600 to-red-600',
    href: '/services/cardiopulmonary-resuscitation-cpr'
  },
  {
    id: 'home',
    name: 'AED',
    description: 'Our AED training provides hands-on, confidence-building experience.',
    icon: HomeIcon,
    color: 'from-purple-600 to-pink-600',
    href: '/services/automated-external-defibrillator-aed'
  },
  {
    id: 'first-aid',
    name: 'Heart Savers First AID',
    description: 'Everyone deserves access to comprehensive first aid training.',
    icon: BuildingOfficeIcon,
    color: 'from-gray-600 to-slate-700',
    href: '/services/heart-savers-first-aid'
  },
   {
    id: 'heimlich',
    name: 'Heimlich Maneuve',
    description: 'Heimlich training: step-by-step abdominal thrusts to clear airways.',
    icon: BuildingOfficeIcon,
    color: 'from-gray-600 to-slate-700',
    href: '/services/heimlich-maneuve'
  },
  //  {
  //   id: 'first-aid',
  //   name: 'EPI-PEN',
  //   description: 'Epi‑Pen training is essential for at‑risk individuals.',
  //   icon: TruckIcon,
  //   color: 'from-blue-600 to-slate-700',
  //   href: '/quote/business'
  // },
]

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen flex items-center">
      {/* Animated Background Elements - Temporarily disabled to fix hydration issues */}
      {/*
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      */}

      {/* Floating Particles - Temporarily disabled to fix hydration issues */}
      {/* Will be re-enabled once hydration issue is resolved */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </motion.div>
                <span className="text-yellow-400 font-semibold text-lg lg:text-lg tracking-wider">
                  Welcome to Bonnet Healthcare Training Center – Committed to Lifesaving Skills and Compassionate Care Education.
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Building Hope, 
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Shaping Tomorrow

                </motion.span>
              </h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                At Bonnet Healthcare Training Center, we truly believe that taking care of your mental health is just as important as taking care of your physical health. Our mission is to make mental health education accessible to everyone by offering hands-on training and learning opportunities. We’re here to help people gain the confidence and knowledge they need to understand, support, and strengthen mental well-being in their own lives and in their communities.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-30">
                  <span className="text-white font-semibold text-xs sm:text-sm">Make An Appointment</span>
                </div>
                <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-30">
                  <span className="text-white font-semibold text-xs sm:text-sm">Learn More</span>
                </div> */}
                <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-30">
                  <span className="text-white font-semibold text-xs sm:text-sm">✓ Expert Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            {/* Quote Categories */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Categories Container */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl max-w-md mx-auto ml-30">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Choose Our Services</h3>
                    <p className="text-sm text-gray-300">Click on Services to get more details about it</p>
                  </div>

                  {/* Insurance Category Selector */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {quoteCategories.map((category) => (
                      <Link key={category.id} href={category.href}>
                        <motion.div
                          className="relative p-4 rounded-lg border-2 border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 touch-target min-h-[120px] cursor-pointer hover:border-blue-400 hover:bg-blue-500/20"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex flex-col items-center space-y-2 text-center">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-medium leading-tight">{category.name}</div>
                              <div className="text-gray-300 text-xs mt-1 leading-tight">{category.description}</div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <Link
                      href="/services"
                      className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-200"
                    >
                      View All Services Options →
                    </Link>
                  </div>

                  {/* <p className="text-center text-gray-400 text-xs mt-3">
                    Instant services, no hidden fees. Compare rates in under 2 minutes.
                  </p> */}
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

