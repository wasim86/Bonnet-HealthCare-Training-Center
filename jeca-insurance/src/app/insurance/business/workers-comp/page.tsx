'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WorkersCompInsurancePage() {
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

  const coverageTypes = [
    {
      title: 'Medical Benefits',
      description: 'Coverage for medical expenses related to work-related injuries or illnesses',
      icon: '🏥',
      color: 'border-green-500 bg-green-50'
    },
    {
      title: 'Wage Replacement',
      description: 'Weekly payments in place of wages for employees unable to work due to injury',
      icon: '💰',
      color: 'border-blue-500 bg-blue-50'
    },
    {
      title: 'Disability Benefits',
      description: 'Compensation for economic loss, both past and future, due to work-related disabilities',
      icon: '♿',
      color: 'border-purple-500 bg-purple-50'
    },
    {
      title: 'Death Benefits',
      description: 'Benefits payable to dependents of workers killed during employment',
      icon: '👨‍👩‍👧‍👦',
      color: 'border-red-500 bg-red-50'
    }
  ]

  const stateRequirements = [
    {
      title: 'Mandatory Coverage',
      description: 'Required by law in most states for businesses with employees',
      icon: '⚖️'
    },
    {
      title: 'Legal Protection',
      description: 'Protects employers from lawsuits related to workplace injuries',
      icon: '🛡️'
    },
    {
      title: 'Employee Security',
      description: 'Ensures employees receive proper care and compensation for work injuries',
      icon: '👥'
    },
    {
      title: 'Business Continuity',
      description: 'Helps maintain business operations during workplace incident recovery',
      icon: '🏢'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Workers Compensation Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your employees and your business with comprehensive workers compensation coverage. Required by law in most states and essential for workplace safety.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Workers' Compensation Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Workers' Compensation Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Workers' compensation is a form of insurance providing wage replacement and medical benefits to employees injured in the course of employment in exchange for mandatory relinquishment of the employee's right to sue his or her employer for the tort of negligence.
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

        {/* Additional Information about Workers' Comp Insurance Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Information about Workers' Comp Insurance</h2>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              While plans differ among jurisdictions, provision can be made for weekly payments in place of wages (functioning in this case as a form of disability insurance), compensation for economic loss (past and future), reimbursement or payment of medical and like expenses (functioning in this case as a form of health insurance), and benefits payable to the dependents of workers killed during employment (functioning in this case as a form of life insurance). General damages for pain and suffering, and punitive damages for employer negligence, are generally not available in workers' compensation plans, and negligence is generally not an issue in the case.
            </p>
          </div>

          {/* Coverage Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${coverage.color} p-6 rounded-r-lg`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl mt-1">{coverage.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{coverage.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{coverage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* State Requirements and Legal Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Workers Compensation is Essential</h2>
            <p className="text-lg text-gray-600 mb-8">
              Workers compensation insurance is not just a legal requirement—it's a critical protection for both employers and employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{requirement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{requirement.title}</h3>
                <p className="text-sm text-gray-600">{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs Workers Compensation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Workers Compensation?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Most businesses with employees are required by law to carry workers compensation insurance. Requirements vary by state, but generally include:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Businesses with one or more employees (varies by state)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Construction and manufacturing companies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Retail and service businesses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Healthcare and professional services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Restaurants and hospitality businesses</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Medical Coverage:</strong> All medical expenses for work-related injuries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Wage Replacement:</strong> Partial income during recovery period</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">♿</span>
                  <span className="text-gray-700"><strong>Disability Benefits:</strong> Long-term support for permanent disabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔄</span>
                  <span className="text-gray-700"><strong>Rehabilitation:</strong> Vocational training and job placement assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <span className="text-gray-700"><strong>Death Benefits:</strong> Support for families of deceased workers</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Workers Compensation insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your employees and your business with comprehensive workers compensation coverage. Our experts will help you understand state requirements and find the right coverage for your business needs.
            </p>
            <Link
              href="/quote/workers-comp"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Workers Comp Quote
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
          className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Employees with Workers Compensation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Workers Compensation quote today and ensure compliance with state laws while protecting your employees and your business from workplace injury costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/workers-comp"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Workers Comp Quote
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
