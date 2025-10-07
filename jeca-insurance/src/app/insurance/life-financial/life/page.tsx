'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LifeInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal life insurance information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific life insurance needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for life insurance',
      icon: '💰'
    }
  ]

  const lifeInsuranceTypes = [
    {
      title: 'Term Life Insurance',
      description: 'Term life insurance or term assurance is life insurance which provides coverage at a fixed rate of payments for a limited period of time, the relevant term. After that period expires, coverage at the previous rate of premiums is no longer guaranteed and the client must either forgo coverage or potentially obtain further coverage with different payments or conditions. If the life insured dies during the term, the death benefit will be paid to the beneficiary. Term insurance is the least expensive way to purchase a substantial death benefit on a coverage amount per premium dollar basis over a specific period of time.',
      icon: '📅',
      color: 'border-blue-500 bg-blue-50',
      features: ['Fixed rate payments', 'Limited time period', 'Death benefit protection', 'Most affordable option']
    },
    {
      title: 'Whole Life Insurance',
      description: 'Whole life insurance or whole life assurance is a life insurance policy that remains in force for the insured\'s whole life and requires (in most cases) premiums to be paid every year into the policy.',
      icon: '🏠',
      color: 'border-green-500 bg-green-50',
      features: ['Lifetime coverage', 'Annual premium payments', 'Cash value accumulation', 'Guaranteed death benefit']
    },
    {
      title: 'Universal Life Insurance',
      description: 'A type of permanent life insurance. Under the terms of the policy, the excess of premium payments above the current cost of insurance is credited to the cash value of the policy. The cash value is credited each month with interest, and the policy is debited each month by a cost of insurance (COI) charge, as well as any other policy charges and fees drawn from the cash value, even if no premium payment is made that month. Interest credited to the account is determined by the insurer, but has a contractual minimum rate of 2%. When an earnings rate is pegged to a financial index such as a stock, bond or other interest rate index, the policy is a "Equity Indexed Universal Life" contract.',
      icon: '🌐',
      color: 'border-purple-500 bg-purple-50',
      features: ['Flexible premiums', 'Cash value growth', 'Investment options', 'Minimum 2% interest rate']
    },
    {
      title: 'Variable Universal Life Insurance',
      description: 'Variable Universal Life Insurance is a type of life insurance that builds a cash value in a VUL, the cash value can be invested in a wide variety of separate accounts, similar to mutual funds, and the choice of which of the available separate accounts to use is entirely up to the contract owner. This variable component in the name refers to this ability to invest in separate accounts whose values vary – they vary because they are invested in stock and/or bond markets. The universal component in the name refers to the flexibility the owner has in making premium payments. The premiums can vary from nothing in a given month up to maximums defined by the Internal Revenue Code for life insurance.',
      icon: '📈',
      color: 'border-red-500 bg-red-50',
      features: ['Investment flexibility', 'Variable cash value', 'Market-based returns', 'Premium payment flexibility']
    }
  ]

  const lifeCoverage = [
    {
      title: 'Death Benefit Protection',
      description: 'Financial protection for your beneficiaries when you pass away',
      icon: '🛡️',
      features: ['Tax-free death benefit', 'Immediate payout', 'Beneficiary protection', 'Estate planning']
    },
    {
      title: 'Cash Value Accumulation',
      description: 'Build cash value that you can borrow against during your lifetime',
      icon: '💰',
      features: ['Tax-deferred growth', 'Policy loans available', 'Cash surrender value', 'Living benefits']
    },
    {
      title: 'Income Replacement',
      description: 'Replace lost income to maintain your family\'s standard of living',
      icon: '💼',
      features: ['Salary replacement', 'Mortgage protection', 'Education funding', 'Debt coverage']
    },
    {
      title: 'Business Protection',
      description: 'Protect your business interests and key person coverage',
      icon: '🏢',
      features: ['Key person insurance', 'Buy-sell agreements', 'Business loans', 'Partnership protection']
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Life Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your family's financial future with comprehensive life insurance coverage. Choose from term life, whole life, universal life, and variable universal life insurance options.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Life Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Life Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Life insurance pays out a sum of money either on the death of the insured person or after a set period of time.
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

        {/* Some Common Types of Life Insurance Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Some Common Types of Life Insurance:</h2>
          </div>
          
          <div className="space-y-8">
            {lifeInsuranceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${type.color} p-6 rounded-r-lg hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start space-x-6">
                  <span className="text-4xl mt-1">{type.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Life Insurance Coverage Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life Insurance Coverage Areas</h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive life insurance protection for all aspects of your financial security and family's future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifeCoverage.map((coverage, index) => (
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

        {/* Who Needs Life Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Life Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Life insurance is essential for anyone who has financial dependents or wants to leave a legacy. It provides financial security and peace of mind for your loved ones.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Parents with dependent children</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Married couples with shared financial obligations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Business owners and key employees</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Individuals with significant debt or mortgages</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Anyone wanting to leave a financial legacy</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Life Insurance Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-gray-700"><strong>Financial Protection:</strong> Secure your family's financial future</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Tax Benefits:</strong> Tax-free death benefits and tax-deferred growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏠</span>
                  <span className="text-gray-700"><strong>Estate Planning:</strong> Preserve wealth for future generations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <span className="text-gray-700"><strong>Business Continuity:</strong> Protect business interests and partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700"><strong>Investment Growth:</strong> Build cash value with permanent policies</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Life Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Life insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your family's financial future with comprehensive life insurance coverage. Our experts will help you compare life insurance options and find the right coverage for your family's needs and budget.
            </p>
            <Link
              href="/quotes/life-financial/life"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Life Insurance Quote
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
          className="text-center bg-gradient-to-r from-blue-900 to-green-700 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Family's Financial Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Life Insurance quote today and ensure your loved ones are financially protected with comprehensive life insurance coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/life-financial/life"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Life Insurance Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
