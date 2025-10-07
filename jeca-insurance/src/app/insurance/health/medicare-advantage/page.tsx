'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MedicareAdvantagePage() {
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

  const planTypes = [
    {
      title: 'Health Maintenance Organizations (HMOs)',
      description: 'HMO plans typically require you to choose a primary care physician and get referrals to see specialists. You must use doctors and hospitals within the plan\'s network, except in emergencies.',
      icon: '🏥',
      color: 'border-blue-500 bg-blue-50',
      points: [
        'Primary care physician required',
        'Referrals needed for specialists',
        'Network-based coverage',
        'Lower costs for in-network care'
      ]
    },
    {
      title: 'Preferred Provider Organizations (PPOs)',
      description: 'PPO plans offer more flexibility in choosing healthcare providers. You can see any doctor or specialist without a referral, though you\'ll pay less if you use providers in the plan\'s network.',
      icon: '🏢',
      color: 'border-green-500 bg-green-50',
      points: [
        'No referrals needed for specialists',
        'Flexibility to see any provider',
        'Lower costs for in-network providers',
        'Out-of-network coverage available'
      ]
    },
    {
      title: 'Private Fee-for-Service Plans',
      description: 'These plans determine how much they will pay for covered services and how much you must pay when you receive care. You can go to any Medicare-approved doctor or hospital that accepts the plan\'s terms.',
      icon: '💳',
      color: 'border-purple-500 bg-purple-50',
      points: [
        'Plan determines payment amounts',
        'Any Medicare-approved provider',
        'Provider must accept plan terms',
        'Flexible provider choice'
      ]
    },
    {
      title: 'Special Needs Plans (SNPs)',
      description: 'SNPs are designed for people with chronic conditions, those who live in institutions, or those eligible for both Medicare and Medicaid. These plans tailor their benefits and provider networks to best serve people with specific diseases or characteristics.',
      icon: '🎯',
      color: 'border-red-500 bg-red-50',
      points: [
        'Designed for specific health conditions',
        'Tailored benefits and networks',
        'Dual-eligible coverage available',
        'Specialized care coordination'
      ]
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
              Medicare Advantage Plans
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive Medicare Advantage coverage that goes beyond Original Medicare. Get all your Medicare benefits plus extra coverage in one convenient plan.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* What is a Medicare Advantage Plan Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Medicare Advantage Plan?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A Medicare Advantage Plan is a type of Medicare health plan offered by a private company that contracts with Medicare to provide you with all your Part A and Part B benefits. Medicare Advantage Plans include Health Maintenance Organizations, Preferred Provider Organizations, Private Fee-for-Service Plans, Special Needs Plans, and Medicare Medical Savings Account Plans. If you're enrolled in a Medicare Advantage Plan, Medicare services are covered through the plan and aren't paid for under Original Medicare. Most Medicare Advantage Plans also offer prescription drug coverage.
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

        {/* What do Medicare Advantage Plans cover Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What do Medicare Advantage Plans cover?</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Medicare Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare Advantage Plans must cover all of the services that Original Medicare covers except hospice care. Original Medicare covers hospice care even if you're in a Medicare Advantage Plan. In all types of Medicare Advantage Plans, you're always covered for emergency and urgently needed care.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Extra Benefits & Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare Advantage Plans may offer extra coverage, like vision, hearing, dental, and/or health and wellness programs. Most include Medicare prescription drug coverage (Part D). In addition to your Part B premium, you usually pay a monthly premium for the Medicare Advantage Plan.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advance Coverage Decisions</h3>
              <p className="text-gray-700 leading-relaxed">
                You can also ask the plan for a written advance coverage decision to make sure a service is medically necessary and will be covered. If the plan won't pay for a service you think you need, you'll have to pay all of the costs if you don't ask for an advance coverage decision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Medicare Advantage Plan Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Medicare Advantage Plans</h2>
          </div>
          
          <div className="space-y-8">
            {planTypes.map((planType, index) => (
              <motion.div
                key={planType.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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

        {/* Medicare Advantage Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare Advantage Benefits</h2>
            <p className="text-lg text-gray-600 mb-8">
              Medicare Advantage Plans offer comprehensive coverage that goes beyond Original Medicare with additional benefits and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hospital Coverage</h3>
              <p className="text-sm text-gray-600">Inpatient hospital care, skilled nursing facility care, and hospice care</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Services</h3>
              <p className="text-sm text-gray-600">Doctor visits, outpatient care, medical equipment, and lab tests</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Prescription Drugs</h3>
              <p className="text-sm text-gray-600">Medicare Part D prescription drug coverage included in most plans</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vision Care</h3>
              <p className="text-sm text-gray-600">Eye exams, glasses, and vision services beyond Original Medicare</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Dental Care</h3>
              <p className="text-sm text-gray-600">Dental cleanings, fillings, and other dental services</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hearing Care</h3>
              <p className="text-sm text-gray-600">Hearing exams, hearing aids, and audiology services</p>
            </div>
          </div>
        </motion.div>

        {/* Who Needs Medicare Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs Medicare Advantage?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Medicare Advantage Plans are ideal for Medicare beneficiaries who want comprehensive coverage with additional benefits beyond Original Medicare. These plans are perfect for:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Medicare beneficiaries seeking all-in-one coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">People wanting prescription drug coverage included</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Those needing vision, dental, or hearing benefits</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Individuals with chronic conditions requiring coordinated care</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-700">Medicare beneficiaries wanting predictable costs</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medicare Advantage Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-700"><strong>All-in-One:</strong> Medicare Parts A, B, and usually D in one plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700"><strong>Cost Control:</strong> Annual out-of-pocket maximums for protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏥</span>
                  <span className="text-gray-700"><strong>Provider Networks:</strong> Access to quality healthcare providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700"><strong>Extra Benefits:</strong> Vision, dental, hearing, and wellness programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-gray-700"><strong>Care Coordination:</strong> Integrated care management and support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Talk to Medicare Advantage Experts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our Medicare Advantage experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get comprehensive Medicare coverage that goes beyond Original Medicare with additional benefits and services. Our experts will help you compare Medicare Advantage plans and find the right coverage for your healthcare needs and budget.
            </p>
            <Link
              href="/quotes/health/medicare-advantage"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Medicare Advantage Quote
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Comprehensive Medicare Coverage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free Medicare Advantage quote today and discover how you can get all your Medicare benefits plus extra coverage in one convenient plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotes/health/medicare-advantage"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Medicare Advantage Quote
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
