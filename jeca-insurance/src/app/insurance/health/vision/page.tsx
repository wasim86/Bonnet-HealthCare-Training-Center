'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VisionInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal vision insurance information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific vision needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for vision care',
      icon: '💰'
    }
  ]

  const salientBenefits = [
    {
      title: 'Room Entitlement & Annual Limits',
      description: 'Comprehensive room coverage with annual benefit limits for vision care services',
      icon: '🏥',
      color: 'border-blue-500 bg-blue-50'
    },
    {
      title: 'In-patient Hospitalization',
      description: 'Coverage for inpatient vision-related medical procedures and treatments',
      icon: '🛏️',
      color: 'border-green-500 bg-green-50'
    },
    {
      title: 'Day Care Treatment',
      description: 'Outpatient day care procedures for vision correction and eye treatments',
      icon: '🌅',
      color: 'border-purple-500 bg-purple-50'
    },
    {
      title: 'Specialized investigations',
      description: 'Advanced diagnostic tests and specialized eye examinations',
      icon: '🔬',
      color: 'border-red-500 bg-red-50'
    },
    {
      title: 'Pre-Post Hospitalization',
      description: 'Coverage for pre and post hospitalization expenses related to vision care',
      icon: '📋',
      color: 'border-yellow-500 bg-yellow-50'
    },
    {
      title: 'Ambulance Services',
      description: 'Emergency ambulance services for vision-related medical emergencies',
      icon: '🚑',
      color: 'border-orange-500 bg-orange-50'
    },
    {
      title: 'Accidental Out-patient Expense',
      description: 'Coverage for accidental eye injuries and emergency outpatient treatments',
      icon: '🚨',
      color: 'border-pink-500 bg-pink-50'
    }
  ]

  const visionCoverage = [
    {
      title: 'Eye Examinations',
      description: 'Annual comprehensive eye exams with qualified optometrists and ophthalmologists',
      icon: '👁️',
      features: ['Comprehensive eye exams', 'Glaucoma testing', 'Retinal imaging', 'Vision screening']
    },
    {
      title: 'Eyeglasses Coverage',
      description: 'Partial or full coverage for prescription eyeglasses and designer frames',
      icon: '👓',
      features: ['Prescription lenses', 'Designer frames', 'Anti-reflective coating', 'Progressive lenses']
    },
    {
      title: 'Contact Lenses',
      description: 'Coverage for contact lenses including specialty and daily disposable lenses',
      icon: '🔍',
      features: ['Daily disposables', 'Monthly lenses', 'Specialty contacts', 'Colored contacts']
    },
    {
      title: 'Sunglasses Protection',
      description: 'Coverage for prescription sunglasses and UV protection eyewear',
      icon: '🕶️',
      features: ['Prescription sunglasses', 'UV protection', 'Polarized lenses', 'Transition lenses']
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vision Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive vision insurance coverage for eye care services, examinations, eyeglasses, and contact lenses. Protect your vision and eye health with quality coverage.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Vision Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-4 tracking-wider">
                &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Vision Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Vision insurance is a form of insurance that provides coverage for the services rendered by eye care professionals such as ophthalmologists and optometrists. The typical vision insurance plan provides yearly coverage for eye examinations and partial or full coverage eyeglasses, sunglasses, and contact lenses, with or without copays, depending on the plan chosen. If you see the big picture, you know how important eye health is to overall well-being. A little attention to those baby blues, browns, greens, or hazels can make all the difference. We can help you obtain affordable vision coverage including an annual routine eye exam for a low copayment. Plus you get coverage for contact lenses or eyeglass lenses and frames – including designer names.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Salient Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-blue-600 mb-4 tracking-wider">
              &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Some of the salient benefits of the Vision Insurance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salientBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${benefit.color} p-6 rounded-r-lg hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl mt-1">{benefit.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Coverage Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision Coverage Types</h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive vision insurance coverage for all your eye care needs, from routine exams to specialty eyewear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionCoverage.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 hover:border-blue-300"
              >
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{coverage.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coverage.title}</h3>
                  <p className="text-gray-600">{coverage.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">Coverage Includes:</h4>
                  {coverage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs Vision Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Vision Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vision insurance is essential for maintaining eye health and managing vision care costs. Coverage is especially important for individuals and families who value their eyesight and want comprehensive eye care protection.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Individuals and families needing regular eye care</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">People who wear glasses or contact lenses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Those with family history of eye conditions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Computer users and digital device workers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Anyone wanting to budget for vision care expenses</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vision Plan Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👁️</span>
                  <span className="text-gray-700"><strong>Annual Exams:</strong> Comprehensive eye examinations every year</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👓</span>
                  <span className="text-gray-700"><strong>Eyewear Coverage:</strong> Glasses, contacts, and designer frames</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Cost Savings:</strong> Reduced fees for vision care services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Provider Network:</strong> Wide network of eye care professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔍</span>
                  <span className="text-gray-700"><strong>Specialty Care:</strong> Coverage for advanced eye treatments</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Vision Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Vision insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your vision and eye health with comprehensive vision insurance coverage. Our experts will help you compare vision plans and find the right coverage for your eye care needs and budget.
            </p>
            <Link
              href="/quotes/health/vision"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Vision Insurance Quote
            </Link>
          </div>
        </motion.div>

        {/* Service Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Buy Online */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
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
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💳</span>
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
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
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
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Vision with Quality Eye Care Coverage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Vision Insurance quote today and ensure you have access to quality eye care while managing your vision care expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/health/vision"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Vision Insurance Quote
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
