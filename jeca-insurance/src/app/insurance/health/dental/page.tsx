'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DentalInsurancePage() {
  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes and streamlined enrollment',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Bank-level security protection for all your personal dental information',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize coverage to fit your specific dental needs and budget',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available for individuals and families',
      icon: '💰'
    }
  ]

  const dentalPlanTypes = [
    {
      title: 'Indemnity Dental Insurance Plan',
      description: 'This plan may be helpful when you want to stay with your dentist and he/she does not participate in a dental network. By the very nature of this plan the insurance company generally pays the dentist a percentage of your services according to the policy you purchased. In addition you will want to review the co-payment requirements, waiting periods, stated deductible, annual limitations, graduated percentage scales based on the type of procedure and/or length of time you have owned the policy prior to starting your dental work.',
      icon: '🦷',
      color: 'border-blue-500 bg-blue-50',
      points: [
        'Freedom to choose any dentist',
        'Insurance pays percentage of services',
        'Review co-payment requirements and deductibles',
        'Graduated percentage scales based on procedure type'
      ]
    },
    {
      title: 'Dental Health Managed Organization (DHMO)',
      description: 'When a dentist signs a contract with a dental insurance company that provider agrees to accept an insurance fee schedule and give their clients a reduced cost for services as an In-Network Provider. Many DHMO insurance plans have little or no waiting periods, no annual maximum benefit limitations, while covering major dental work near the start of the benefit period. This plan is sometimes purchased to help defray the high cost of the dental procedures. Some dental insurance plans offer free semi-annual preventive treatment. Fillings, crowns, implants and surgery may have various limitations.',
      icon: '🏥',
      color: 'border-green-500 bg-green-50',
      points: [
        'Contracted dentists with reduced fee schedules',
        'Little or no waiting periods',
        'No annual maximum benefit limitations',
        'Coverage for major dental work early in benefit period'
      ]
    },
    {
      title: 'Participating Provider Network (PPO)',
      description: 'Depending on your specific plan, the PPO works similar to a DHMO while using an In-Network facility; it allows you to use an Out-of-Network or Non-Participating Provider. Any difference of fees will become the financial responsibility of the patient, unless otherwise specified in your dental policy. As noted, some dental insurance plans may have an annual maximum benefit limit. Thus, once the annual maximum benefit is exhausted any additional treatments may become the patient\'s responsibility. Each year that annual maximum is released. The reissued date may vary on a calendar year, company fiscal year, or date of enrollment based on your specific plan.',
      icon: '🏢',
      color: 'border-purple-500 bg-purple-50',
      points: [
        'Flexibility to use in-network or out-of-network providers',
        'Patient responsibility for fee differences',
        'Annual maximum benefit limits may apply',
        'Benefits reset annually based on plan terms'
      ]
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
              Dental Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive dental insurance coverage for individuals and families. Protect your oral health and manage dental care costs with quality coverage.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is Dental Insurance Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Dental Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dental insurance is designed to pay a portion of the costs associated with dental care. Generally dental offices have a fee schedule, or a list of prices for the dental services or procedures they offer.
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

        {/* Typical Types of Dental Insurance Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Types of Dental Insurance</h2>
          </div>
          
          <div className="space-y-8">
            {dentalPlanTypes.map((planType, index) => (
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

        {/* Dental Coverage Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dental Coverage Benefits</h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive dental insurance typically covers a wide range of dental services to maintain your oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Preventive Care</h3>
              <p className="text-sm text-gray-600">Regular cleanings, exams, X-rays, and fluoride treatments</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Basic Restorative</h3>
              <p className="text-sm text-gray-600">Fillings, extractions, and basic dental procedures</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Major Restorative</h3>
              <p className="text-sm text-gray-600">Crowns, bridges, dentures, and major dental work</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🦴</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Oral Surgery</h3>
              <p className="text-sm text-gray-600">Tooth extractions, wisdom teeth removal, and surgical procedures</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Orthodontics</h3>
              <p className="text-sm text-gray-600">Braces, aligners, and teeth straightening treatments</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Care</h3>
              <p className="text-sm text-gray-600">Emergency dental treatments and urgent care</p>
            </div>
          </div>
        </motion.div>

        {/* Who Needs Dental Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Dental Insurance?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dental insurance is essential for maintaining oral health and managing dental care costs. Coverage is especially important for:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Individuals and families seeking comprehensive dental coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">People with ongoing dental health needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Parents wanting to protect their children's oral health</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Adults needing orthodontic or major dental work</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Anyone wanting to budget for dental care expenses</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dental Plan Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🦷</span>
                  <span className="text-gray-700"><strong>Preventive Care:</strong> Regular cleanings and checkups at no cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Cost Savings:</strong> Reduced fees for dental procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Network Access:</strong> Wide network of qualified dentists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-700"><strong>Coverage Options:</strong> Basic to comprehensive coverage levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <span className="text-gray-700"><strong>Family Plans:</strong> Coverage for entire family members</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Dental Insurance Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Dental insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your oral health and manage dental care costs with comprehensive dental insurance coverage. Our experts will help you compare plans and find the right coverage for your dental needs and budget.
            </p>
            <Link
              href="/quotes/health/dental"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Dental Insurance Quote
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
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Smile with Quality Dental Insurance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Dental Insurance quote today and ensure you have access to quality dental care while managing your oral health expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/health/dental"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Dental Insurance Quote
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
