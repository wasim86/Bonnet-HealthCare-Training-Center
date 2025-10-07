'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BusinessInsurancePage() {
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

  const majorTypes = [
    {
      title: 'General Liability Insurance',
      description: 'A standard insurance policy issued to business organizations to protect them against liability claims for bodily injury and property damage arising out of premises, operations, products, and completed operations, and advertising and personal injury liability.'
    },
    {
      title: 'Commercial Auto Insurance',
      description: 'Covers cars, trucks, motorcycles and other road vehicles owned by or operated within a business. Its primary use is to provide financial protection against physical damage and/or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle. Commercial auto insurance may also offer financial protection against theft of the vehicle, and possibly damage to the vehicle, sustained from events other than traffic collisions.'
    },
    {
      title: 'Commercial Property Insurance',
      description: 'Covers the risk of loss to commercial buildings or personal property, usually includes buildings, personal property of the insured business or business personal property of others on site and in the insured\'s possession. Coverage can be provided on all risk or on a specific perils basis.'
    },
    {
      title: 'Commercial Umbrella Insurance',
      description: 'Commercial Umbrella insurance is liability coverage that is in excess of specified other commercial insurance policies and also potentially primary insurance for losses not covered by the underlying policies. When an insured business is liable to someone, the insured\'s primary insurance policies pay up to their limits and any additional amount is paid by the umbrella policy (up to the coverage limit of the umbrella policy).'
    },
    {
      title: 'Professional Liability Insurance',
      description: 'Professional liability insurance (PLI), also called professional indemnity insurance (PII) but more commonly known as errors & omissions (E&O) in the US is a form of liability insurance that helps protect professional advice and service-providing companies from bearing the full cost of defending against a negligence claim made by a client, and damages awarded in such a civil lawsuit. Professional liability coverage sometimes also provides for the defense costs, including when legal action turns out to be groundless.'
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
              Business Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive business insurance solutions to protect your company from unexpected risks and ensure business continuity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Business Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Business Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Business insurance protects your investment by minimizing financial risks associated with unexpected events such as a death of a partner, an injured employee, a lawsuit, or a natural disaster. Business Insurance is a broad name for different coverages available to the business owner to protect against losses and to insure the continuing operation of the business.
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

        {/* Major Types of Business Insurance Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Types of Business Insurance</h2>
          </div>
          
          <div className="space-y-8">
            {majorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Business Insurance Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Business Owner's Package</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A Business Owner's Policy (often called a BOP) is an insurance policy that combines protection from all major property and liability risks in one package. Typically, a BOP combines all the basic coverages required by a business owner into one bundle. It is usually less expensive than the total cost of the individual coverages. Business Owners Policies usually target small and medium-sized businesses and typically contain business interruption insurance, which provides reimbursement for up to a year of lost revenue resulting from an insured property loss.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Workers Compensation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Workers' compensation is a form of insurance providing wage replacement and medical benefits to employees injured in the course of employment in exchange for mandatory relinquishment of the employee's right to sue his or her employer for the tort of negligence.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Group Health Insurance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Group health insurance coverage is a policy that is purchased by an employer and is offered to eligible employees of the company (and often to the employees' family members) as a benefit of working for that company. A group health insurance plan is a major part of many employee benefits packages that employers provide for their employees.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Group Life Insurance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Group life insurance (also known as wholesale life insurance or institutional life insurance) is term insurance covering a group of people, usually employees of a company, members of a union or association, or members of a pension or superannuation fund. Individual proof of insurability is not normally a consideration in its underwriting; rather, the underwriter considers the size, turnover and general strength of the group.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Group Disability Insurance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Group Disability Insurance is a type of group insurance that provides regular income replacement payments to an insured member of the group in the event of an eligible disability resulting from illness or injury. Coverage is generally offered in two types: short-term disability (STD) and long-term disability (LTD).
                </p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Supplemental Insurance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Supplemental insurance provides extra or additional insurance that you can purchase to help you pay for services and out-of-pocket expenses that your regular insurance does not cover.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our business insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-green-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-green-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business investment with comprehensive coverage designed to minimize financial risks and ensure business continuity. Our experts will help you find the right protection for your specific industry and business needs.
            </p>
            <Link
              href="/quote/business"
              className="bg-green-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Business Quote
            </Link>
          </div>
        </motion.div>

        {/* Service Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free business insurance quote today and secure comprehensive protection for your company against unexpected risks and ensure business continuity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/business"
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
