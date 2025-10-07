'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DisabilityInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal disability insurance information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific disability insurance needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for disability insurance',
      icon: '💰'
    }
  ]

  const disabilityTypes = [
    {
      title: 'Individual Disability Insurance',
      description: 'Those whose employers do not provide benefits, and self-employed who need disability coverage, may purchase policies. Premiums and available benefits for individual coverage vary considerably between companies, occupations, states and countries. In general, premiums are higher for policies that provide more monthly benefits, offer benefits for longer periods of time, and start payment of benefits more quickly following a disability claim. Premiums also tend to be higher for policies that define disability in broader terms, meaning the policy covers a wider variety of circumstances.',
      icon: '👤',
      color: 'border-blue-500'
    },
    {
      title: 'High-limit Disability Insurance',
      description: 'High-limit disability insurance is designed to keep individual disability benefits at 65% of income regardless of income level. Coverage is typically issued supplemental to group long-term disability insurance. With high-limit disability insurance, benefits can be anywhere from an additional $2,000 to $100,000 per month. Single policy issue and participation (individual or group) long-term coverage has coverage that can go up to $30,000 with some companies.',
      icon: '📈',
      color: 'border-green-500'
    },
    {
      title: 'Key-person Disability Insurance',
      description: 'Key Person Disability insurance provides benefits to protect a company from financial hardship that may result from the loss of a key employee\'s services. In this case, the company can use the benefits to hire a temporary employee should the disabled employee\'s disability appear to be short-term. In the case of permanent disability, benefits are used to help defray costs related to hiring a replacement, including recruitment, training, startup, lost revenue and unfunded salary continuation.',
      icon: '🔑',
      color: 'border-purple-500'
    },
    {
      title: 'Business Overhead Expense Disability Insurance',
      description: 'Business Overhead Expense (BOE) coverage reimburses for overhead expenses should the owner experience a disability. Eligible benefits include: rent or mortgage payments, business insurance costs, laundry/maintenance, accounting/billing and collection service fees, business insurance premiums, employee salaries, employee benefits, property tax, and other regular monthly business expenses.',
      icon: '🏢',
      color: 'border-orange-500'
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
              Disability Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your income and financial stability with comprehensive disability insurance coverage. Secure your future when you can't work due to illness or injury.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Disability Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Disability Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Disability Insurance, often called DI or disability income insurance, or income protection, is a form of insurance that insures the beneficiary's earned income against the risk that a disability creates a barrier for a worker to complete the core functions of their work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For example, the worker may suffer from an inability to maintain composure in the case of psychological disorders or an injury, illness or condition that causes physical impairment or incapacity to work. It encompasses paid sick leave, short-term disability benefits (STD), and long-term disability benefits (LTD).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Statistics show that in the US a disabling accident occurs on average once every second. In fact, Nearly 18.5% of Americans are currently living with a Disability, and 1 out of every 4 persons in the US workforce will suffer a disabling injury before retirement.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Types of Disability Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-blue-600 mb-4 tracking-wider">
              &gt;&gt;&gt; INSURANCE BENEFITS &lt;&lt;&lt;
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Disability Insurance</h2>
          </div>
          
          <div className="space-y-8">
            {disabilityTypes.map((type, index) => (
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
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
        </div>
      </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-blue-900 to-green-700 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Income?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Disability Insurance quote today and ensure your financial security when you can't work due to illness or injury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/life-financial/disability"
              className="bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
