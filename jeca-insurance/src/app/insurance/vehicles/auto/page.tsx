'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AutoInsurancePage() {
  const coverageTypes = [
    {
      title: 'Bodily injury liability',
      description: 'for injuries the policyholder causes to someone else.',
      icon: '🚑'
    },
    {
      title: 'Medical payments or Personal Injury Protection (PIP)',
      description: 'for treatment of injuries to the driver and passengers of the policyholder\'s car.',
      icon: '🏥'
    },
    {
      title: 'Property damage liability',
      description: 'for damage the policyholder causes to someone else\'s property.',
      icon: '🏠'
    },
    {
      title: 'Collision',
      description: 'for damage to the policyholder\'s car from a collision.',
      icon: '🚗'
    },
    {
      title: 'Comprehensive',
      description: 'for damage to the policyholder\'s car not involving a collision with another car (including damage from fire, explosions, earthquakes, floods, and riots), and theft.',
      icon: '🌪️'
    },
    {
      title: 'Uninsured motorists coverage',
      description: 'for costs resulting from an accident involving a hit-and-run driver or a driver who does not have insurance.',
      icon: '🚫'
    }
  ]

  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Your information is protected with bank-level security',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize your coverage to fit your needs',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available',
      icon: '💰'
    }
  ]

  const paymentOptions = [
    'Any Visa/Master Credit Card',
    'Paypal Account',
    'Online ATM'
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auto Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect yourself and your vehicle with comprehensive auto insurance coverage that fits your needs and budget.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What is Auto Insurance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-blue-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Auto Insurance?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Auto insurance provides financial protection against physical damage and/or bodily injury resulting from traffic collisions and against liability that could also arise therefrom. Auto insurance may also offers financial protection against theft of the vehicle and damage to the vehicle, sustained from things other than traffic collisions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coverage Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-blue-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Some of the Auto Insurance Coverages
            </h2>
          </div>

          <div className="space-y-6">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{coverage.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {coverage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {coverage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Talk to Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <span className="text-3xl">📞</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Talk to our insurance experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get an auto insurance quote from our agency and you may save thousands of dollars a year. It only takes a few minutes to find out how much we can save you!
              </p>
              <div className="space-y-4">
                <a
                  href="tel:877-501-5460"
                  className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  877-501-5460
                </a>
                <div>
                  <Link
                    href="/quote/auto"
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Insured Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Buy Online Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Buy online</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  You can pay through multiple payment options, you can pay through:
                </p>
                <ul className="space-y-2">
                  {paymentOptions.map((option, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pay Online Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💳</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pay Online</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  You can pay through multiple payment options, you can pay through:
                </p>
                <ul className="space-y-2">
                  {paymentOptions.map((option, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leave Feedback Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Leave Feedback</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  At JECA, the customer comes first. We always delighted to hear from you, any time of the day.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Leave a Feedback
                  </Link>
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Contact with Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free auto insurance quote today and discover how much you can save with JECA Insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/auto"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
