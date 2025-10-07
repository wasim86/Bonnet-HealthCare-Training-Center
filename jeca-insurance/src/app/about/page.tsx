'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
  BuildingOfficeIcon,
  GlobeAmericasIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Years in Business', value: '50+' },
  { id: 2, name: 'Customers Protected', value: '2M+' },
  { id: 3, name: 'Claims Processed', value: '500K+' },
  { id: 4, name: 'States Licensed', value: '50' },
]

const values = [
  {
    name: 'Customer First',
    description: 'We put our customers at the center of everything we do, providing personalized service and support.',
    icon: HeartIcon,
  },
  {
    name: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical business practices in all our interactions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in our products, services, and customer experience.',
    icon: TrophyIcon,
  },
  {
    name: 'Community',
    description: 'We\'re committed to supporting the communities where our customers live and work.',
    icon: UsersIcon,
  },
]

const leadership = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'Sarah has over 20 years of experience in the insurance industry and leads JECA with a vision for innovation and customer service excellence.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael drives our digital transformation initiatives and ensures our technology serves our customers\' evolving needs.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Claims Officer',
    bio: 'Emily oversees our claims operations, ensuring fast, fair, and compassionate service when our customers need us most.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 min-h-[90vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
            className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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

        {/* Floating Particles - Fixed positioning to avoid hydration issues */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const leftPosition = ((i * 43) % 100); // Pseudo-random but deterministic
            const topPosition = ((i * 71) % 100);
            const duration = 10 + ((i * 2.5) % 10);
            const delay = (i * 0.6) % 5;

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${leftPosition}%`,
                  top: `${topPosition}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="h-8 w-8 text-yellow-300" />
                </motion.div>
                <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6"
              >
                About
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> JECA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl leading-8 text-blue-100 mb-8"
              >
                For over 50 years, JECA Insurance has been protecting families and businesses
                with comprehensive coverage, competitive rates, and exceptional service.
                We're more than an insurance company – we're your trusted partner in protection.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">2M+</div>
                  <div className="text-sm text-blue-100">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">A+</div>
                  <div className="text-sm text-blue-100">AM Best Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">98%</div>
                  <div className="text-sm text-blue-100">Retention Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* JECA Logo Section */}
      <div className="relative py-16 sm:py-20 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
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
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                Our Brand
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">JECA</span> Resources & Services
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <img
                  src="/images/jeca-logo.png"
                  alt="JECA Resources & Services Logo"
                  className="w-full h-auto max-w-sm mx-auto"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            >
              Creating a better future for your loved ones through comprehensive insurance solutions and exceptional service.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -50, 0],
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
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <StarIcon className="h-6 w-6 text-blue-600" />
                </motion.div>
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  Our Impact
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Trusted by millions
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> across America</span>
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-20 grid grid-cols-1 gap-8 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="group flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <motion.dd
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="order-first text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    {stat.value}
                  </motion.dd>
                  <dt className="text-sm font-semibold leading-6 text-gray-600 group-hover:text-blue-600 transition-colors">
                    {stat.name}
                  </dt>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <HeartIcon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Our Core
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </motion.div>
          <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-28 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative pl-16"
                >
                  <dt className="text-lg font-bold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                    <motion.div
                      className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </motion.div>
                    {value.name}
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -50, 0],
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
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <StarIcon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                Customer Stories
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              What Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Customers Say</span>
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Real stories from real customers who trust JECA Insurance
            </p>
          </motion.div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Kevin Martin",
                role: "Homeowner",
                location: "Austin, TX",
                content: "JECA Insurance made the claims process so easy when our home was damaged in a storm. Their team was responsive, professional, and got us back on our feet quickly. I couldn't be happier with their service.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "Business Owner",
                location: "Denver, CO",
                content: "As a small business owner, I need insurance I can trust. JECA has been protecting my business for over 10 years. Their rates are competitive and their service is outstanding.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Jennifer Chen",
                role: "Family Protection",
                location: "Seattle, WA",
                content: "When I needed life insurance for my growing family, JECA's agents took the time to explain all my options. They helped me find the perfect coverage at a price I could afford. Highly recommended!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-blue-300/50 transition-all duration-300"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">A+</div>
                <div className="text-sm text-gray-600">AM Best Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Community Commitment */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated Background Elements */}
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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <HeartIcon className="h-8 w-8 text-yellow-300" />
                </motion.div>
                <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
                  Giving Back
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Committed to Our
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Communities</span>
              </h2>
              <p className="text-xl leading-8 text-blue-100 mb-8 max-w-3xl mx-auto">
                JECA Insurance believes in giving back to the communities we serve. Through our JECA Cares
                initiative, we support local charities, disaster relief efforts, and educational programs.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                >
                  <BuildingOfficeIcon className="h-8 w-8 text-yellow-300 mb-2 mx-auto" />
                  <div className="text-lg font-bold text-white">50+</div>
                  <div className="text-sm text-blue-100">Local Offices</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                >
                  <GlobeAmericasIcon className="h-8 w-8 text-yellow-300 mb-2 mx-auto" />
                  <div className="text-lg font-bold text-white">All 50</div>
                  <div className="text-sm text-blue-100">States Covered</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {['Disaster Relief', 'Education Programs', 'Local Charities', 'Community Events'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/30"
                  >
                    <CheckCircleIcon className="h-4 w-4 inline mr-2 text-yellow-300" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
