'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
      </div>

      <div className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="h-8 w-8 text-yellow-300" />
            </motion.div>
            <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
              Get Started Today
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Ready to Get
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Protected?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-xl leading-8 text-gray-100 mb-10"
          >
            Join millions of satisfied customers who trust JECA Insurance. Get your personalized quote in minutes
            and start protecting what matters most today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/quote"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-purple-600 shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-3xl"
              >
                Get Free Quote →
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Talk to an Agent
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Options */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
              Multiple Ways to Connect
            </h3>
            <p className="text-lg leading-8 text-gray-200">
              Choose the way that works best for you
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 sm:max-w-4xl sm:grid-cols-3">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <motion.div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PhoneIcon className="h-8 w-8 text-white" />
              </motion.div>
              <h4 className="mt-4 text-xl font-bold text-white">Call Us</h4>
              <p className="mt-2 text-gray-200">Speak with a licensed agent</p>
              <p className="mt-3 text-2xl font-bold text-yellow-300">877-501-5460</p>
              <p className="text-sm text-green-300 font-medium">Available 24/7</p>
            </motion.div>

            {/* Chat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <motion.div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
              </motion.div>
              <h4 className="mt-4 text-xl font-bold text-white">Live Chat</h4>
              <p className="mt-2 text-gray-200">Get instant help online</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 rounded-xl bg-white px-6 py-3 text-sm font-bold text-purple-600 hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Chat
              </motion.button>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <motion.div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DocumentTextIcon className="h-8 w-8 text-white" />
              </motion.div>
              <h4 className="mt-4 text-xl font-bold text-white">Online Quote</h4>
              <p className="mt-2 text-gray-200">Get quotes in minutes</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="mt-4 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-purple-600 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
