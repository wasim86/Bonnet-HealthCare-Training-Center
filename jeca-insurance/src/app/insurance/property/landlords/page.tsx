'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LandlordsInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined approval',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific rental property needs',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for landlords',
      icon: '💰'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Landlords&apos; Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your rental property investment with comprehensive landlords&apos; insurance coverage designed specifically for property owners.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Landlords' Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-green-600 mb-4 tracking-wider">
                &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Landlords&apos; Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Landlords&apos; insurance is an insurance policy that covers a property owner from financial losses connected with rental properties. The policy covers the building, with the option of insuring any contents that belong to the landlord that are inside. Landlords&apos; insurance is often referred to as buy-to-let insurance, however buy-to-let insurance is a type of landlords&apos; insurance. It is important to distinguish between buy-to-let insurance which generally covers one property that has been purchased with a buy-to-let mortgage, and multi-property insurance, which covers two or more properties. Each of these types of landlords&apos; insurance covers different things.
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

        {/* What is Usually Covered Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-green-600 mb-4 tracking-wider">
              &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Usually Covered With Landlord Insurance?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              The policy will normally cover standard perils such as fire, lightning, explosion, earthquake, storm, flood, escape of water/oil, subsidence, theft and malicious damage. Each insurance policy is different and may or may not include all these items. Optional coverage might include accidental damage, malicious damage by tenant, terrorism, legal protection, alternative accommodation costs, contents insurance, rent guarantee insurance, and liability insurance. Landlords&apos; insurance policies typically do not cover any personal property belonging to tenants, or otherwise protect the interest of tenants; although a liability policy protecting a landlord or property manager will be of benefit to tenants should they incur a loss for which the landlord is responsible.
            </p>
          </div>
        </motion.div>

        {/* Talk to Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our insurance experts</h2>
            <div className="mb-6">
              <a 
                href="tel:877-501-5460" 
                className="inline-block bg-green-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-green-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Whether you own hundreds of properties or just one, we&apos;ll help you find the best coverage and the most affordable rates. Let us give you a quote and start saving money today!
            </p>
            <Link
              href="/quote/landlords"
              className="bg-green-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Insured Now
            </Link>
          </div>
        </motion.div>

        {/* Service Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Buy Online */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy online</h3>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Rental Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free landlords&apos; insurance quote today and secure comprehensive protection for your rental property investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/landlords"
              className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
