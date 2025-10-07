'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BOPInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined approval',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your business information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific business needs and operations',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for businesses',
      icon: '💰'
    }
  ]

  const coverageAreas = [
    {
      number: '1.',
      title: 'Property insurance for buildings and contents owned by the company',
      description: 'There are two different forms, standard and special, which provides more comprehensive coverage.',
      color: 'border-orange-500 bg-orange-50'
    },
    {
      number: '2.',
      title: 'Business interruption insurance',
      description: 'Which covers the loss of income resulting from a fire or other catastrophe that disrupts the operation of the business. It can also include the extra expense of operating out of a temporary location.',
      color: 'border-blue-500 bg-blue-50'
    },
    {
      number: '3.',
      title: 'Liability protection',
      description: 'Which covers your company\'s legal responsibility for the harm it may cause to others. This harm is a result of things that you and your employees do or fail to do in your business operations that may cause bodily injury or property damage due to defective products, faulty installations and errors in services provided.',
      color: 'border-purple-500 bg-purple-50'
    }
  ]

  const bopAdvantages = [
    {
      title: 'Cost Savings',
      description: 'Bundle of services often costs less than the total cost of all individual coverages',
      icon: '💰'
    },
    {
      title: 'Simplified Management',
      description: 'One policy, one renewal date, one point of contact for all your business insurance needs',
      icon: '📋'
    },
    {
      title: 'Comprehensive Protection',
      description: 'Covers property, liability, and business interruption in one convenient package',
      icon: '🛡️'
    },
    {
      title: 'Customizable Coverage',
      description: 'Alter what is included in a BOP based on your company\'s specific needs',
      icon: '⚙️'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Owner's Package (BOP) Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive business protection combining General Liability and Commercial Property coverage in one convenient, cost-effective package.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is a Business Owner's Package Insurance Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-orange-600 mb-4 tracking-wider">
                &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Business Owner's Package Insurance Policy?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A business owner policy packages all required coverage a business owner would need. Often, BOPs will include business interruption insurance, property insurance, vehicle coverage, liability insurance, and crime insurance. Based on your company's specific needs, you can alter what is included in a BOP. Typically, a business owner will save money by choosing a BOP because the bundle of services often costs less than the total cost of all the individual coverage's.
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

        {/* What's Covered with a Typical BOP Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-orange-600 mb-4 tracking-wider">
              &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Covered with a Typical BOP Policy?</h2>
            <p className="text-lg text-gray-600 mb-8">BOPs typically include:</p>
          </div>
          
          <div className="space-y-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${area.color} p-6 rounded-r-lg`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl font-bold text-gray-900 mt-1">{area.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
          >
            <h4 className="text-lg font-bold text-red-900 mb-3">Important Note:</h4>
            <p className="text-red-800 leading-relaxed">
              In most cases, BOPs do <strong>NOT</strong> cover professional liability, auto insurance, worker's compensation or health and disability insurance. You'll need separate insurance policies to cover professional services, vehicles and your employees.
            </p>
          </motion.div>
        </motion.div>

        {/* BOP Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Business Owner's Package?</h2>
            <p className="text-lg text-gray-600 mb-8">
              A BOP offers significant advantages for small to medium-sized businesses looking for comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bopAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs BOP Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs a BOP?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Business Owner's Packages are ideal for small to medium-sized businesses that need comprehensive protection but want the convenience and cost savings of bundled coverage.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Small retail businesses and storefronts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Professional service providers and consultants</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Restaurants and food service businesses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Office-based businesses and contractors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Businesses with commercial property and equipment</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">BOP Coverage Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏢</span>
                  <span className="text-gray-700"><strong>Property Protection:</strong> Buildings, equipment, inventory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚖️</span>
                  <span className="text-gray-700"><strong>Liability Coverage:</strong> Bodily injury, property damage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <span className="text-gray-700"><strong>Business Interruption:</strong> Lost income protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔧</span>
                  <span className="text-gray-700"><strong>Equipment Breakdown:</strong> Machinery and systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💻</span>
                  <span className="text-gray-700"><strong>Data Recovery:</strong> Computer and data protection</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our BOP insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-orange-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-orange-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get comprehensive business protection with a Business Owner's Package that combines property, liability, and business interruption coverage in one convenient, cost-effective policy. Our experts will help you customize your BOP to fit your specific business needs.
            </p>
            <Link
              href="/quote/bop"
              className="bg-orange-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get BOP Quote
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
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy online</h3>
            <p className="text-gray-600 mb-6">
              You can pay through multiple payment options, you can pay through:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </span>
                <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </span>
                <span className="text-sm text-gray-600">Paypal Account</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <span className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </span>
                <span className="text-sm text-gray-600">Online ATM</span>
              </div>
            </div>
          </div>

          {/* Pay Online */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💳</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay Online</h3>
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
          className="text-center bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business with a BOP?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Business Owner's Package quote today and secure comprehensive protection that combines property, liability, and business interruption coverage in one convenient, cost-effective policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/bop"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free BOP Quote
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
