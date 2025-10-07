'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HealthInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal health information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific health needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for individuals and families',
      icon: '💰'
    }
  ]

  const healthPlanTypes = [
    {
      title: 'Health Maintenance Organizations (HMOs) and Exclusive Provider Organizations (EPOs)',
      description: 'HMOs and EPOs may limit coverage to providers inside their networks. A network is a list of doctors, hospitals, and other health care providers that provide medical care to members of a specific health plan. If you use a doctor or facility that isn\'t in the HMO\'s network, you may have to pay the full cost of the services provided. HMO members usually have to get a referral from their primary care doctor and must get referrals to see specialists. This is generally not true for EPOs.',
      icon: '🏥',
      color: 'border-blue-500 bg-blue-50',
      points: [
        'Network-based coverage with specific provider lists',
        'Primary care doctor referrals required for HMOs',
        'Lower costs when using in-network providers',
        'Limited or no coverage for out-of-network care'
      ]
    },
    {
      title: 'Preferred Provider Organizations (PPOs) and Point-of-Service plans (POS)',
      description: 'These insurance plans give you a choice of getting care within or outside of a provider network. With PPO or POS plans, you can use out-of-network providers and facilities, but you\'ll have to pay more than if you use in-network ones. If you can visit any doctor without a referral. If you have a POS plan, you can visit any in-network provider without needing to visit a provider out-of-network.',
      icon: '🏢',
      color: 'border-green-500 bg-green-50',
      points: [
        'Flexibility to choose in-network or out-of-network providers',
        'Higher costs for out-of-network care',
        'No referrals needed for PPO plans',
        'POS plans may require referrals for out-of-network care'
      ]
    },
    {
      title: 'High Deductible Health Plan (HDHP)',
      description: 'High Deductible Health Plans typically feature lower premiums and higher deductibles than traditional insurance plans. If you have an HDHP, you can have a health savings account or a health reimbursement arrangement to pay for qualified out-of-pocket medical costs. This can lower the amount of federal tax you owe.',
      icon: '💰',
      color: 'border-purple-500 bg-purple-50',
      points: [
        'Lower monthly premiums with higher deductibles',
        'Eligible for Health Savings Account (HSA)',
        'Tax advantages for qualified medical expenses',
        'Good for healthy individuals with minimal medical needs'
      ]
    },
    {
      title: 'Catastrophic Health Insurance Plan',
      description: 'A catastrophic health insurance plan covers essential health benefits but has a very high deductible. This means it provides a kind of "safety net" coverage in case you have an accident or serious illness. Catastrophic plans usually do not provide coverage for services like prescription drugs or shots. Premiums for catastrophic plans may be lower than traditional health insurance plans, but deductibles are usually much higher.',
      icon: '🛡️',
      color: 'border-red-500 bg-red-50',
      points: [
        'Essential health benefits with very high deductibles',
        'Safety net for accidents or serious illnesses',
        'Lower premiums but limited routine care coverage',
        'Available primarily to young adults under 30'
      ]
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
              Health Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive health insurance coverage for individuals and families. Protect your health and financial well-being with quality medical coverage.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Health Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Health Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Health insurance is coverage that provides for the payments of benefits as a result of sickness or injury. Includes insurance for losses from accident, medical expense, disability, or accidental death and dismemberment.
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

        {/* Health Insurance Types Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance Types</h2>
          </div>
          
          <div className="space-y-8">
            {healthPlanTypes.map((planType, index) => (
              <motion.div
                key={planType.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`border-l-4 ${planType.color} p-6 rounded-r-lg`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl mt-1">{planType.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{planType.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{planType.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {planType.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Health Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Health Benefits</h2>
            <p className="text-lg text-gray-600 mb-8">
              All health insurance plans must cover these essential health benefits to help you stay healthy and protect you financially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Services</h3>
              <p className="text-sm text-gray-600">Coverage for emergency room visits and urgent medical care</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Preventive Care</h3>
              <p className="text-sm text-gray-600">Annual checkups, screenings, and immunizations at no cost</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Prescription Drugs</h3>
              <p className="text-sm text-gray-600">Coverage for prescription medications and pharmacy benefits</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🤱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Maternity Care</h3>
              <p className="text-sm text-gray-600">Pregnancy, childbirth, and newborn care coverage</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mental Health</h3>
              <p className="text-sm text-gray-600">Mental health services and substance abuse treatment</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pediatric Services</h3>
              <p className="text-sm text-gray-600">Children's dental and vision care coverage</p>
            </div>
          </div>
        </motion.div>

        {/* Who Needs Health Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Health Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Health insurance is essential for everyone to protect against unexpected medical costs and ensure access to quality healthcare. Coverage is especially important for:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Individuals and families seeking comprehensive medical coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Self-employed individuals and freelancers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">People between jobs or without employer coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Young adults aging out of parent's coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Anyone wanting financial protection from medical expenses</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Medical Care:</strong> Doctor visits, hospital stays, and specialist care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💊</span>
                  <span className="text-gray-700"><strong>Prescription Drugs:</strong> Coverage for medications and pharmacy benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🩺</span>
                  <span className="text-gray-700"><strong>Preventive Care:</strong> Annual checkups and screenings at no cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚑</span>
                  <span className="text-gray-700"><strong>Emergency Services:</strong> Emergency room visits and urgent care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-gray-700"><strong>Mental Health:</strong> Counseling and mental health treatment</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Health insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your health and financial well-being with comprehensive health insurance coverage. Our experts will help you compare plans and find the right coverage for your needs and budget.
            </p>
            <Link
              href="/quote/health"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Health Insurance Quote
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
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Health with Quality Insurance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Health Insurance quote today and ensure you have access to quality healthcare while protecting yourself from unexpected medical costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/health"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Health Insurance Quote
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
