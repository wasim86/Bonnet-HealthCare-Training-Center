'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    content: "JECA Insurance made the claims process so easy after my car accident. Their customer service team was incredibly helpful and responsive throughout the entire process.",
    author: "Sarah Johnson",
    role: "Auto Insurance Customer",
    location: "Austin, TX",
    rating: 5,
  },
  {
    id: 2,
    content: "I've been with JECA for over 10 years and they've consistently provided excellent coverage at competitive rates. When I had a house fire, they handled everything professionally.",
    author: "Michael Chen",
    role: "Home & Auto Insurance Customer",
    location: "Seattle, WA",
    rating: 5,
  },
  {
    id: 3,
    content: "As a small business owner, finding the right insurance was crucial. JECA's business insurance gave me peace of mind and their agents really understood my industry needs.",
    author: "Emily Rodriguez",
    role: "Business Insurance Customer",
    location: "Miami, FL",
    rating: 5,
  },
  {
    id: 4,
    content: "The life insurance process was straightforward and the agent explained everything clearly. I feel confident that my family is protected with JECA's coverage.",
    author: "David Thompson",
    role: "Life Insurance Customer",
    location: "Denver, CO",
    rating: 5,
  },
  {
    id: 5,
    content: "Switching to JECA saved me hundreds on my auto insurance without sacrificing coverage. Their online tools make managing my policy incredibly convenient.",
    author: "Lisa Park",
    role: "Auto Insurance Customer",
    location: "Phoenix, AZ",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="h-6 w-6 text-yellow-400" />
            </motion.div>
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            What Our Customers
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl leading-8 text-gray-300">
            Don't just take our word for it. Here's what real customers have to say about their experience with JECA Insurance.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="mx-auto mt-20 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center mb-6"
                >
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <StarIcon className="h-6 w-6 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl leading-8 text-white sm:text-2xl sm:leading-9 mb-8"
                >
                  <p>"{currentTestimonial.content}"</p>
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="font-bold text-white text-lg">{currentTestimonial.author}</div>
                  <div className="text-blue-200 font-medium">{currentTestimonial.role}</div>
                  <div className="text-gray-300 text-sm">{currentTestimonial.location}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-16 lg:-left-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-lg ring-1 ring-white/30 hover:bg-white/30 transition-all duration-300 text-white"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -right-16 lg:-right-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-lg ring-1 ring-white/30 hover:bg-white/30 transition-all duration-300 text-white"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                viewport={{ once: true }}
              >
                4.9/5
              </motion.div>
              <div className="text-white font-medium mb-2">Customer Rating</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="text-4xl font-bold text-green-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                viewport={{ once: true }}
              >
                98%
              </motion.div>
              <div className="text-white font-medium">Customer Retention</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="text-4xl font-bold text-blue-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <div className="text-white font-medium">Claims Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
