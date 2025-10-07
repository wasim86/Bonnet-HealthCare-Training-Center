'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeIcon, ShieldCheckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline'
import HomeQuoteForm from '@/components/quote/HomeQuoteForm'

export default function HomeQuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
            >
              <HomeIcon className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Home Insurance Quote
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8"
            >
              Protect your most valuable asset with comprehensive home insurance coverage. 
              Get personalized quotes tailored to your property and needs.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <ShieldCheckIcon className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Coverage</h3>
                <p className="text-blue-100 text-sm">Protection for your home, belongings, and liability</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CurrencyDollarIcon className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Competitive Rates</h3>
                <p className="text-blue-100 text-sm">Best prices from top-rated insurance providers</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <ClockIcon className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Quick Quotes</h3>
                <p className="text-blue-100 text-sm">Get your personalized quote in minutes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <HomeQuoteForm />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Thousands of Homeowners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Homes Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Claims Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Insurance Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
