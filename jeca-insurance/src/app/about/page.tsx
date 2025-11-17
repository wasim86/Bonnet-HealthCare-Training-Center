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
  CheckCircleIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Years in Business', value: '50+' },
  { id: 2, name: 'Customers Protected', value: '2M+' },
  { id: 3, name: 'Claims Processed', value: '500K+' },
  { id: 4, name: 'States Licensed', value: '50' },
]

const values = [
  {
    name: 'Expert Instructors',
    description: 'Our training courses incorporate hands-on exercises and simulations, allowing participants to apply their skills.',
    icon: HeartIcon,
  },
  {
    name: 'Hands-On Experience',
    description: 'Our trainers are certified professionals with extensive experience.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Customized Solutions',
    description: 'We offer tailored training solutions to meet your specific needs to enhance your skills.',
    icon: TrophyIcon,
  },
  {
    name: 'Ongoing Support',
    description: 'We provide ongoing support and resources to help you stay updated on the latest techniques and guidelines.',
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
                className="flex items-center  space-x-2  mb-6 ml-90"
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
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> BONNET HEALTHCARE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl leading-8 text-blue-100 mb-8"
              >
                For over 20 years, Bonnet HealthCare has been safeguarding families and businesses with comprehensive health solutions, cost-effective plans, and superior service. We're more than a healthcare provider – we're your trusted partner in better health outcomes.
              </motion.p>

              {/* Trust Indicators */}
              {/* <motion.div
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
              </motion.div> */}
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BONNET HEALTHCARE</span> 
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
                  src="/images/jeca-resources-logo.png"
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
              Building a healthier future for your loved ones through comprehensive healthcare solutions and compassionate service.
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
            <div className="mt-20">
              <div className="flex items-stretch overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
                {/* Rating Card (Left) */}
                <div className="bg-blue-600 text-white w-full md:w-80 p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-5xl font-bold leading-none">4.7</div>
                  <div className="mt-1 text-sm">of 5</div>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className={`${i < 4 ? 'text-white' : 'text-white/60'} h-5 w-5`} />
                    ))}
                  </div>
                </div>
                {/* Achievements (Right) */}
                <div className="flex-1 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-10">
                    <div className="flex items-center gap-4">
                      <UsersIcon className="h-8 w-8 text-red-600" />
                      <div>
                        <div className="text-4xl font-bold text-gray-900">500+</div>
                        <div className="text-sm text-gray-600">Happy Clients</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <ClipboardDocumentCheckIcon className="h-8 w-8 text-red-600" />
                      <div>
                        <div className="text-4xl font-bold text-gray-900">20+</div>
                        <div className="text-sm text-gray-600">Years experience</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <TrophyIcon className="h-8 w-8 text-red-600" />
                      <div>
                        <div className="text-4xl font-bold text-gray-900">10+</div>
                        <div className="text-sm text-gray-600">Awards Winners</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Us</span>
            </h2>
            <p className="text-xl leading-8 text-gray-600">
             Bonnet HealthCare Training Center is a trusted provider of evidence‑based life‑support education. Our programs translate current guidelines into rigorous, hands‑on instruction designed to build competence, confidence, and reliable performance in time‑critical situations. Select Bonnet HealthCare as your training partner to develop practitioners who respond effectively when seconds matter. Here’s why:
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
              Real stories from real customers who trust BONNET HealthCare
            </p>
          </motion.div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Kevin Martin",
                role: "Homeowner",
                location: "Austin, TX",
                content: "Bonnet HealthCare delivered a high‑impact Mental Health Awareness program. The facilitator created psychological safety, encouraged thoughtful dialogue, and translated evidence‑based concepts into actionable skills. I left with clear frameworks to recognize warning signs and respond effectively, with greater empathy and confidence to support others.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "Business Owner",
                location: "Denver, CO",
                content: "I recently completed the Safety Training program with Bonnet HealthCare , and it was outstanding from start to finish. The instructor’s deep expertise and engaging style made complex topics clear and memorable. I now confidently spot hazards and implement preventive measures—highly recommended for anyone serious about creating a safe, secure environment.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Jennifer Chen",
                role: "Family Protection",
                location: "Seattle, WA",
                content: "This life skills program from Bonnet HealthCare Training Center exceeded expectations. CPR was taught in a way that truly sticks, learning the Heimlich maneuver felt empowering, and the Epi‑Pen training removed the fear of responding during severe allergic reactions. I’m grateful for the practical skills and the confidence to protect my family, colleagues, and community.  ",
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
                <div className="text-3xl font-bold text-blue-600 mb-2">4.7/5</div>
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
      <div >
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

        {/* <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
      </div> */}
      {/* Our Vision Section */}
      <div className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <GlobeAmericasIcon className="h-7 w-7 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Our Vision</h1>
            </div>
            <p className=" font-semibold text-sm md:text-base">
              To Globally change the way we think about saving lives.
            </p>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600 max-w-3xl mx-auto">
              Bonnet HealthCare Training Center is a safe and trusted organization with a proven track record of providing high-quality, evidence-based healthcare education to communities globally. Our tailored strategies and effective training solutions help participants build confidence and competence through programs backed by leading healthcare standards, where our goal is to raise awareness, improve health outcomes, and save lives.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Venice Gamble',
                role: 'Instructor',
                image: 'https://picsum.photos/seed/venice-gamble/1200/800',
              },
              {
                name: 'Michelle Clark',
                role: 'Trainer',
                image: 'https://picsum.photos/seed/michelle-clark/1200/800',
              },
              {
                name: 'Betty Gray',
                role: 'RNC-BC, PMHN, CCAP',
                image: 'https://picsum.photos/seed/betty-gray/1200/800',
              },
            ].map((person) => (
              <div key={person.name} className="space-y-3">
                <div className="rounded-2xl overflow-hidden shadow-md bg-white">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-72 md:h-80 object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">{person.name}</div>
                  <div className="text-xs text-gray-500">{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
