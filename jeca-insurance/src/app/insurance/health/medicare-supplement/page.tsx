'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MedicareSupplementPage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal Medicare information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific Medicare needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for Medicare beneficiaries',
      icon: '💰'
    }
  ]

  const importantThings = [
    {
      number: '1',
      title: 'Medicare Advantage Plan Transition',
      description: 'If you have a Medicare Advantage Plan, you can apply for a Medigap policy, but make sure you can leave the Medicare Advantage Plan before your Medigap policy begins.',
      icon: '🔄',
      color: 'border-blue-500 bg-blue-50'
    },
    {
      number: '2',
      title: 'Premium Payment Structure',
      description: 'You pay the private insurance carrier a monthly premium for your Medigap policy in addition to the monthly Part B premium that you pay to Medicare.',
      icon: '💳',
      color: 'border-green-500 bg-green-50'
    },
    {
      number: '3',
      title: 'Individual Coverage Policy',
      description: 'A Medigap policy covers one person. If you and your spouse both want Medigap coverage, you\'ll work with you to set up two separate policies.',
      icon: '👤',
      color: 'border-purple-500 bg-purple-50'
    },
    {
      number: '4',
      title: 'Guaranteed Renewable Coverage',
      description: 'Any standardized Medigap policy is guaranteed renewable even if you have health problems. This means the insurance company can\'t cancel your Medigap policy as long as you pay the premium.',
      icon: '🛡️',
      color: 'border-red-500 bg-red-50'
    }
  ]

  const medigapPlans = [
    {
      plan: 'Plan A',
      description: 'Basic benefits including Medicare Part A coinsurance and hospital costs',
      coverage: ['Part A coinsurance', 'Hospital costs up to 365 days', 'Part B coinsurance', 'Blood (first 3 pints)'],
      popular: false
    },
    {
      plan: 'Plan F',
      description: 'Comprehensive coverage including deductibles and excess charges',
      coverage: ['All Plan A benefits', 'Part A deductible', 'Part B deductible', 'Part B excess charges', 'Foreign travel emergency'],
      popular: true
    },
    {
      plan: 'Plan G',
      description: 'Nearly comprehensive coverage, similar to Plan F but without Part B deductible',
      coverage: ['All Plan A benefits', 'Part A deductible', 'Part B excess charges', 'Foreign travel emergency', 'Skilled nursing facility'],
      popular: true
    },
    {
      plan: 'Plan N',
      description: 'Good coverage with some cost-sharing for office visits and emergency room',
      coverage: ['All Plan A benefits', 'Part A deductible', 'Skilled nursing facility', 'Foreign travel emergency'],
      popular: false
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medicare Supplement Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Fill the gaps in Original Medicare with comprehensive Medigap coverage. Pay for copayments, coinsurance, and deductibles that Medicare doesn't cover.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Medicare Supplement Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Medicare Supplement Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Medicare supplement (Medigap) insurance can help pay some of the health care costs that original Medicare does not cover, like copayments, coinsurance, and deductibles. Some Medigap policies also offer coverage for services that Original Medicare doesn't cover, like medical care when you travel outside the U.S. If you have Original Medicare and you buy a Medigap policy, Medicare will pay its share of the Medicare-approved amount for covered health care costs. Then your Medicare supplement insurance policy pays its share. A Medigap policy is different from a Medicare Advantage Plan. Those plans are ways to get Medicare benefits, while a Medigap policy only supplements your Original Medicare benefits.
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

        {/* Important Things to Know Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Things to Know About Medicare Supplement Coverage</h2>
          </div>
          
          <div className="space-y-8">
            {importantThings.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${item.color} p-6 rounded-r-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.number}
                    </span>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medicare Supplement Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Medicare Supplement Covers</h2>
            <p className="text-lg text-gray-600 mb-8">
              Medicare Supplement insurance helps pay for the out-of-pocket costs that Original Medicare doesn't cover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Copayments</h3>
              <p className="text-sm text-gray-600">Fixed amounts you pay for covered healthcare services</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Coinsurance</h3>
              <p className="text-sm text-gray-600">Percentage of costs you pay after meeting your deductible</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Deductibles</h3>
              <p className="text-sm text-gray-600">Amount you pay before Medicare starts paying its share</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Blood Costs</h3>
              <p className="text-sm text-gray-600">First 3 pints of blood needed for medical procedures</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Foreign Travel</h3>
              <p className="text-sm text-gray-600">Emergency care when traveling outside the United States</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Excess Charges</h3>
              <p className="text-sm text-gray-600">Additional charges above Medicare-approved amounts</p>
            </div>
          </div>
        </motion.div>

        {/* Who Needs Medicare Supplement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Medicare Supplement Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Medicare Supplement insurance is ideal for Medicare beneficiaries who want to reduce their out-of-pocket healthcare costs and have more predictable medical expenses. Medigap is perfect for:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">People with Original Medicare (Parts A and B)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Those wanting to reduce copayments and deductibles</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Frequent travelers needing foreign emergency coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Medicare beneficiaries wanting predictable healthcare costs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Those who prefer to keep their current doctors</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medigap Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Doctor Choice:</strong> See any doctor who accepts Medicare</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Cost Predictability:</strong> Reduced out-of-pocket expenses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-gray-700"><strong>Guaranteed Renewable:</strong> Cannot be cancelled for health reasons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✈️</span>
                  <span className="text-gray-700"><strong>Travel Coverage:</strong> Emergency care outside the U.S.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-700"><strong>Standardized Plans:</strong> Same benefits regardless of insurer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Medicare Supplement Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Medicare Supplement experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Fill the gaps in Original Medicare with comprehensive Medigap coverage that helps pay for copayments, coinsurance, and deductibles. Our experts will help you compare Medicare Supplement plans and find the right coverage for your healthcare needs and budget.
            </p>
            <Link
              href="/quotes/health/medicare-supplement"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Medicare Supplement Quote
            </Link>
          </div>
        </motion.div>

        {/* Service Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
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
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-blue-700 to-green-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Fill the Gaps in Your Medicare Coverage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Medicare Supplement quote today and reduce your out-of-pocket healthcare costs with comprehensive Medigap coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/health/medicare-supplement"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Medicare Supplement Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
