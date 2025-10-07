'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MotorcycleInsurancePage() {
  const coverageTypes = [
    {
      title: 'Accessory Coverage',
      description: 'Covers loss, theft, or damage to motorcycle accessories like saddlebags, custom handlebars, and OEM electronics.',
      icon: '🔧'
    },
    {
      title: 'Comprehensive Physical Damage Coverage',
      description: 'Covers physical damage or loss of the motorcycle that is not the direct result of a moving vehicle collision.',
      icon: '🛡️'
    },
    {
      title: 'Collision Coverage',
      description: 'Pays for damage to an insured motorcycle when it hits or is hit by another car or object, or if the motorcycle overturns.',
      icon: '💥'
    },
    {
      title: 'Bodily Injury Liability Coverage',
      description: 'Pays damages for bodily injury or death resulting from an accident for which you are at fault and provides you with a legal defense. This includes passengers riding on your motorcycle.',
      icon: '🚑'
    },
    {
      title: 'Property Damage Liability Coverage',
      description: 'Pays damages for physical damage resulting from an accident for which you are at fault and provides you with a legal defense.',
      icon: '🏠'
    },
    {
      title: 'Medical Payments Coverage',
      description: 'Pays medical expenses of the parties riding on the motorcycle involved in a motorcycle accident.',
      icon: '🏥'
    },
    {
      title: 'Personal Injury Protection Coverage',
      description: 'This is an extension of motorcycle insurance available in some states that covers medical expenses and, in some cases, lost wages and other damages. PIP is designed to be paid without regard to legal liability.',
      icon: '🩹'
    },
    {
      title: 'Uninsured/Underinsured Motorist Coverage',
      description: 'Provides for a motorcycle operator to receive damages for any injury he or she receives from an uninsured, negligent driver. The coverage pays the difference between what the uninsured or underinsured driver can pay and what the injured operator would be entitled to as if the uninsured motorist had proper insurance.',
      icon: '🚫'
    },
    {
      title: 'Motorcycle Roadside Assistance Coverage',
      description: 'Roadside assistance and breakdown coverage assist operators whose motorcycle has suffered a mechanical failure that leaves the operator stranded.',
      icon: '🛣️'
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
      description: 'Customize your coverage to fit your riding needs',
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
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Motorcycle Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your ride and yourself with comprehensive motorcycle insurance coverage designed for riders who live for the open road.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What is Motorcycle Insurance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-orange-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Motorcycle Insurance?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Motorcycle insurance provides financial protection against physical damage and/or bodily injury resulting from traffic collisions and against liability that could also arise from the actions of the motorcycle driver. Motorcycle insurance may also offer financial protection against theft of the motorcycle and damage sustained from things other than traffic collisions. There several different types of motorcycle insurance coverages. Some may be required by law. Others are optional.
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
            <div className="text-sm font-semibold text-orange-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Some of the Motorcycle Insurance Coverages
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
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{coverage.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {index + 1}. {coverage.title}
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <span className="text-3xl">📞</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Talk to our insurance experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For our clients motorcycles aren&apos;t just transportation, they&apos;re a way of life. We know motorcycle insurance because we love motorcycles too. Let us help you save money and protect your bike.
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
                    href="/quote/motorcycle"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center mr-3">
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
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
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
                  At JECA, the customer comes first. We&apos;re always delighted to hear from you, any time of the day.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-orange-600 hover:text-orange-800 font-medium">
                    Leave a Feedback
                  </Link>
                  <Link href="/contact" className="block text-orange-600 hover:text-orange-800 font-medium">
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
          className="text-center bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road Protected?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free motorcycle insurance quote today and ride with confidence knowing you&apos;re fully covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/motorcycle"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
