'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function UmbrellaInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal umbrella insurance information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific umbrella insurance needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and comprehensive protection for your assets',
      icon: '💰'
    }
  ]

  const protectedSituations = [
    {
      title: 'Motor vehicle accidents with excessive physical damage, bodily injuries, or death',
      icon: '🚗',
      color: 'text-red-600'
    },
    {
      title: 'Slip and fall accidents on your property',
      icon: '🏠',
      color: 'text-orange-600'
    },
    {
      title: 'Boating Accidents',
      icon: '⛵',
      color: 'text-blue-600'
    },
    {
      title: 'Swimming Pool Accidents',
      icon: '🏊',
      color: 'text-cyan-600'
    },
    {
      title: 'Physical damage or bodily injury caused by your dog',
      icon: '🐕',
      color: 'text-amber-600'
    },
    {
      title: 'Slander, libel, and defamation lawsuits',
      icon: '⚖️',
      color: 'text-purple-600'
    },
    {
      title: 'Judgments that exceed the limits of your auto or home policies',
      icon: '📋',
      color: 'text-green-600'
    }
  ]

  const coverageTypes = [
    {
      title: 'Personal Liability Coverage',
      description: 'Protects you from lawsuits and claims that exceed your primary insurance limits. Covers bodily injury and property damage claims.',
      icon: '🛡️',
      color: 'border-blue-500 bg-blue-50',
      features: ['Bodily injury protection', 'Property damage coverage', 'Legal defense costs', 'Worldwide coverage']
    },
    {
      title: 'Personal Injury Coverage',
      description: 'Covers claims for libel, slander, defamation, invasion of privacy, and other personal injury claims not covered by standard policies.',
      icon: '👤',
      color: 'border-purple-500 bg-purple-50',
      features: ['Libel and slander protection', 'Defamation coverage', 'Privacy invasion claims', 'False imprisonment']
    },
    {
      title: 'Excess Coverage',
      description: 'Provides additional coverage above your existing auto, home, or boat insurance when claims exceed those policy limits.',
      icon: '📈',
      color: 'border-green-500 bg-green-50',
      features: ['Auto insurance excess', 'Homeowners excess', 'Boat insurance excess', 'Additional protection']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Umbrella Insurance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Extra Protection When You Need It Most - Comprehensive liability coverage that goes beyond your standard policies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ≫≫≫ INSURANCE BENEFITS ≪≪≪
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Umbrella Insurance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection with unmatched service and competitive rates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What is Umbrella Insurance Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ≫≫≫ INSURANCE BENEFITS ≪≪≪
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Umbrella Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Umbrella insurance refers to liability insurance that is in excess of specified other policies and also potentially primary insurance for losses not covered by the other policies. When an insured is liable to someone, the insured's primary insurance policies pay up to their limits and any additional amount is paid by the umbrella policy up to the limit of the umbrella policy.
              </p>
              <Link
                href="/quotes/life-financial/umbrella"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Protected Today
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Common Situations Protected Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ≫≫≫ INSURANCE BENEFITS ≪≪≪
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Common Situations Protected by Umbrella Insurance:
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive protection for life's unexpected moments and potential liability risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protectedSituations.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500"
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl ${situation.color} flex-shrink-0`}>
                    {situation.icon}
                  </div>
                  <div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-800 font-medium leading-relaxed">
                      {situation.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Umbrella Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection tailored to your specific needs and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coverageTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-xl p-8 border-2 ${type.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
                <div className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Talk to Insurance Experts Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our insurance experts</h2>
              <div className="mb-6">
                <a
                  href="tel:877-601-5400"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
                >
                  877-601-5400
                </a>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your future with guaranteed income for the rest of your life. Speak with our financial experts today to find the best options for your financial situation.
              </p>
              <Link
                href="/quotes/life-financial/umbrella"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Insured Now
              </Link>
            </div>
          </motion.div>

              {/* Service Columns */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy Online */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy online</h3>
              <p className="text-gray-600 mb-6">
                You can pay through multiple payment options, you can pay through:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Paypal Account</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Online ATM</span>
                </div>
              </div>
            </div>

            {/* Pay Online */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay Online</h3>
              <p className="text-gray-600 mb-6">
                You can pay through multiple payment options, you can pay through:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Paypal Account</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Online ATM</span>
                </div>
              </div>
            </div>

            {/* Leave Feedback */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leave Feedback</h3>
              <p className="text-gray-600 mb-6">
                At JECA, the customer comes first. We always delighted to hear from you, any time of the day.
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <div className="flex items-center justify-start space-x-3 hover:text-purple-600 transition-colors duration-300">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm text-gray-600">Leave a Feedback</span>
                  </div>
                </Link>
                <Link href="/contact" className="block">
                  <div className="flex items-center justify-start space-x-3 hover:text-purple-600 transition-colors duration-300">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm text-gray-600">Contact with Experts</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 rounded-xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Assets?</h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Get your free Umbrella Insurance quote today and ensure your financial security when you need extra liability protection beyond your standard policies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quotes/life-financial/umbrella"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
