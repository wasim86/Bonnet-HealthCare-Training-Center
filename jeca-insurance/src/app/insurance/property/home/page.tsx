'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeInsurancePage() {
  const propertyCoverages = [
    {
      title: 'Coverage A – Dwelling',
      description: 'Covers the value of the dwelling itself (not including the land). Typically, a coinsurance clause states that as long as the dwelling is insured to 80% of actual value, losses will be adjusted at replacement cost, up to the policy limits. This is in place to give a buffer against inflation. HO-4 (renter\'s insurance) typically has no Coverage A, although it has additional coverages for improvements.',
      icon: '🏠'
    },
    {
      title: 'Coverage B – Other Structures',
      description: 'Covers other structures around the property that are not used for business, except as a private garage. Typically limited at 10% to 20% of the Coverage A, with additional amounts available by endorsement.',
      icon: '🏗️'
    },
    {
      title: 'Coverage C – Personal Property',
      description: 'Covers personal property, with limits for the theft and loss of particular classes of items (e.g., $200 for money, banknotes, bullion, coins, medals, etc.). Typically 50 to 70% of coverage A is required for contents, which means that consumers may pay for much more insurance than necessary. This has led to some calls for more choice.',
      icon: '📦'
    },
    {
      title: 'Coverage D – Loss of Use/Additional Living Expenses',
      description: 'Covers expenses associated with additional living expenses (i.e. rental expenses) and fair rental value, if part of the residence was rented, however only the rental income for the actual rent of the space not services provided such as utilities.',
      icon: '🏨'
    },
    {
      title: 'Additional Coverages',
      description: 'Covers a variety of expenses such as debris removal, reasonable repairs, damage to trees and shrubs for certain named perils (excluding the most common causes of damage, wind and ice), fire department charges, removal of property, credit card / identity theft charges, loss assessment, collapse, landlord\'s furnishing, and some building additions. These vary depending upon the form.',
      icon: '🛡️'
    },
    {
      title: 'Exclusions',
      description: 'In an open perils policy, specific exclusions will be stated in this section. These generally include earth movement, water damage, power failure, neglect, war, nuclear hazard, septic tank back-up expenses, intentional loss, and concurrent causation (for HO3). The concurrent causation exclusion excludes losses where both a covered and an excluded loss occur. In addition, the exclusion for building ordinance can mean that increased expenses due to local ordinances may not be covered. A 2013 survey of Americans found that 41% believed mold was covered, although it is typically not covered if the water damage occurs over a period of time, such as through a leaky pipe.',
      icon: '❌'
    },
    {
      title: 'Floods',
      description: 'Flood damage is typically excluded under standard homeowners and renters insurance policies. Flood coverage, however, is available in the form of a separate policy both from the National Flood Insurance Program (NFIP) and from a few private insurers.',
      icon: '🌊'
    }
  ]

  const liabilityCoverages = [
    {
      title: 'Coverage E – Personal Liability',
      description: 'Covers damages which the insured is legally liable for and provides a legal defense at the insurer\'s own expense. About a third of the losses for this coverage are from dog bites.',
      icon: '⚖️'
    }
  ]

  const benefits = [
    {
      title: 'Fast & easy',
      description: 'Quick application process with instant quotes',
      icon: '⚡'
    },
    {
      title: 'Secured process',
      description: 'Your information is protected with bank-level security',
      icon: '🔒'
    },
    {
      title: 'Control over policy',
      description: 'Customize your coverage to fit your home needs',
      icon: '🎛️'
    },
    {
      title: 'Save your money',
      description: 'Competitive rates and multiple discounts available',
      icon: '💰'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your home, belongings, and family with comprehensive homeowners insurance coverage that gives you peace of mind.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What is Home Insurance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-green-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Home Insurance?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Home insurance, also commonly called hazard insurance or homeowner&apos;s insurance (and often abbreviated in the US real estate industry as HOI), is a type of property insurance that covers a private residence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one&apos;s home, its contents, loss of use (additional living expenses), or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the hands of the homeowner within the policy territory.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Property Coverages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-green-600 mb-2 tracking-wider">
              {'>>> INSURANCE BENEFITS <<<'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Home Insurance Coverages
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Section I — Property Coverages
            </h3>
          </div>

          <div className="space-y-6">
            {propertyCoverages.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{coverage.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {index + 1}. {coverage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {coverage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Liability Coverages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Section II — Liability Coverages
            </h3>
          </div>

          <div className="space-y-6">
            {liabilityCoverages.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{coverage.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. {coverage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {coverage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to Insurance Experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-501-5460"
                className="text-4xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                877-501-5460
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              For our clients, homes aren&apos;t just buildings, they&apos;re where life happens. Whether it&apos;s your first apartment,
              dream house, or investment property, we understand that your home represents security, comfort, and your future.
              Our experienced agents work with multiple insurance carriers to find you the best coverage at competitive rates,
              ensuring your most valuable asset is properly protected.
            </p>
            <Link
              href="/quote/home"
              className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Insured Now
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
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy Online</h3>
            <p className="text-gray-600 mb-6">
              Purchase your home insurance policy online with our secure platform
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-orange-600">✓</span>
                <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-orange-600">✓</span>
                <span className="text-sm text-gray-600">Paypal Account</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-orange-600">✓</span>
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
              Make payments on your existing policy quickly and securely
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm text-gray-600">Paypal Account</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm text-gray-600">Online ATM</span>
              </div>
            </div>
          </div>

          {/* Leave Feedback */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leave Feedback</h3>
            <p className="text-gray-600 mb-6">
              Share your experience and help us improve our services
            </p>
            <div className="space-y-3">
              <Link href="/contact" className="block">
                <div className="flex items-center justify-center space-x-2 hover:text-purple-600 transition-colors duration-300">
                  <span className="text-purple-600">✓</span>
                  <span className="text-sm text-gray-600">Customer Service</span>
                </div>
              </Link>
              <Link href="/contact" className="block">
                <div className="flex items-center justify-center space-x-2 hover:text-purple-600 transition-colors duration-300">
                  <span className="text-purple-600">✓</span>
                  <span className="text-sm text-gray-600">Online Support</span>
                </div>
              </Link>
              <Link href="/contact" className="block">
                <div className="flex items-center justify-center space-x-2 hover:text-purple-600 transition-colors duration-300">
                  <span className="text-purple-600">✓</span>
                  <span className="text-sm text-gray-600">Feedback Form</span>
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
          className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free home insurance quote today and secure comprehensive protection for your most valuable asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/home"
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
