'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TruckIcon,
  HomeIcon,
  HeartIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  SparklesIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  ShieldExclamationIcon,
  BanknotesIcon,
  LifebuoyIcon,
  EyeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const quoteCategories = [
  {
    title: 'Vehicle Insurance',
    description: 'Comprehensive protection for all your vehicles',
    icon: TruckIcon,
    gradient: 'from-blue-600 to-cyan-600',
    quotes: [
      {
        id: 'auto',
        name: 'Auto Insurance',
        description: 'Complete coverage for cars and trucks with competitive rates.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Collision Coverage', 'Comprehensive', '24/7 Roadside Assistance'],
        popular: true
      },
      {
        id: 'motorcycle',
        name: 'Motorcycle Insurance',
        description: 'Specialized coverage for motorcycles and scooters.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Liability Coverage', 'Collision', 'Theft Protection']
      },
      {
        id: 'boat',
        name: 'Boat Insurance',
        description: 'Marine coverage for boats, yachts, and watercraft.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Hull Coverage', 'Liability', 'Emergency Assistance']
      }
    ]
  },
  {
    title: 'Home Owner Insurance',
    description: 'Protect your home and rental properties',
    icon: HomeIcon,
    gradient: 'from-green-600 to-emerald-600',
    quotes: [
      {
        id: 'home',
        name: 'Home Insurance',
        description: 'Comprehensive protection for your home and belongings.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection'],
        popular: true
      },
      {
        id: 'renters',
        name: 'Renters Insurance',
        description: 'Affordable coverage for renters and their belongings.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Personal Property', 'Liability', 'Additional Living Expenses']
      },
      {
        id: 'landlords',
        name: 'Landlords Insurance',
        description: 'Specialized coverage for rental property owners.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Property Coverage', 'Rental Income', 'Liability Protection']
      },
      {
        id: 'flood',
        name: 'Flood Insurance',
        description: 'Essential flood protection for your property.',
        href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
        features: ['Building Coverage', 'Contents Coverage', 'NFIP Compliant']
      }
    ]
  },
  {
    title: 'Business Insurance',
    description: 'Comprehensive coverage for businesses of all sizes',
    icon: BuildingOfficeIcon,
    gradient: 'from-purple-600 to-indigo-600',
    quotes: [
      {
        id: 'business',
        name: 'Business Insurance',
        description: 'General liability and property coverage for businesses.',
        href: '/quote/business',
        features: ['General Liability', 'Home Owner Insurance', 'Business Interruption'],
        popular: true
      },
      {
        id: 'bop',
        name: 'Business Owner Package (BOP)',
        description: 'Bundled coverage designed for small to medium businesses.',
        href: '/quote/bop',
        features: ['General Liability', 'Property Coverage', 'Business Income']
      },
      {
        id: 'workers-comp',
        name: 'Workers Compensation',
        description: 'Required coverage for employee injuries and illnesses.',
        href: '/quote/workers-comp',
        features: ['Medical Expenses', 'Lost Wages', 'Legal Protection']
      }
    ]
  },
  {
    title: 'Health Insurance',
    description: 'Medical coverage for individuals and families',
    icon: HeartIcon,
    gradient: 'from-red-600 to-pink-600',
    quotes: [
      {
        id: 'health',
        name: 'Health Insurance',
        description: 'Comprehensive medical coverage for you and your family.',
        href: '/quote/health',
        features: ['Medical Coverage', 'Prescription Drugs', 'Preventive Care'],
        popular: true
      },
      {
        id: 'dental',
        name: 'Dental Insurance',
        description: 'Complete dental care coverage for optimal oral health.',
        href: '/quotes/health/dental',
        features: ['Preventive Care', 'Basic Procedures', 'Major Services']
      },
      {
        id: 'vision',
        name: 'Vision Insurance',
        description: 'Eye care coverage including exams, glasses, and contacts.',
        href: '/quotes/health/vision',
        features: ['Eye Exams', 'Frames & Lenses', 'Contact Lenses']
      },
      {
        id: 'medicare-advantage',
        name: 'Medicare Advantage',
        description: 'Enhanced Medicare coverage with additional benefits.',
        href: '/quotes/health/medicare-advantage',
        features: ['Medicare Parts A & B', 'Prescription Drugs', 'Extra Benefits']
      },
      {
        id: 'medicare-supplement',
        name: 'Medicare Supplement',
        description: 'Fill the gaps in your original Medicare coverage.',
        href: '/quotes/health/medicare-supplement',
        features: ['Gap Coverage', 'Deductibles', 'Coinsurance']
      }
    ]
  },
  {
    title: 'Life & Financial',
    description: 'Secure your family\'s financial future',
    icon: BanknotesIcon,
    gradient: 'from-amber-600 to-orange-600',
    quotes: [
      {
        id: 'life',
        name: 'Life Insurance',
        description: 'Protect your family\'s financial future with flexible life insurance options.',
        href: '/quotes/life-financial/life',
        features: ['Term Life', 'Whole Life', 'Universal Life'],
        popular: true
      },
      {
        id: 'annuity',
        name: 'Annuity',
        description: 'Secure retirement income with guaranteed annuity products.',
        href: '/quotes/life-financial/annuity',
        features: ['Fixed Annuities', 'Variable Annuities', 'Immediate Income']
      },
      {
        id: 'disability',
        name: 'Disability Insurance',
        description: 'Income protection if you become unable to work due to disability.',
        href: '/quotes/life-financial/disability',
        features: ['Short-term Disability', 'Long-term Disability', 'Income Replacement']
      },
      {
        id: 'umbrella',
        name: 'Umbrella Insurance',
        description: 'Extra liability protection beyond your standard policies.',
        href: '/quotes/life-financial/umbrella',
        features: ['Excess Liability', 'Asset Protection', 'Legal Defense']
      }
    ]
  }
]

const benefits = [
  {
    name: 'Lightning Fast Quotes',
    description: 'Get personalized quotes in under 2 minutes with our advanced system',
    icon: ClockIcon,
    gradient: 'from-blue-500 to-cyan-500',
    stat: '2 Min'
  },
  {
    name: 'Expert Licensed Agents',
    description: 'Professional insurance advisors available 24/7 to guide you',
    icon: UserGroupIcon,
    gradient: 'from-green-500 to-emerald-500',
    stat: '24/7'
  },
  {
    name: 'Bank-Level Security',
    description: 'Your personal information is protected with enterprise-grade encryption',
    icon: ShieldCheckIcon,
    gradient: 'from-purple-500 to-indigo-500',
    stat: '256-bit'
  },
  {
    name: 'Top-Rated Carriers',
    description: 'Compare rates from A+ rated insurance companies nationwide',
    icon: StarIcon,
    gradient: 'from-yellow-500 to-orange-500',
    stat: 'A+ Rated'
  },
  {
    name: 'Massive Savings',
    description: 'Save up to 40% compared to traditional insurance shopping',
    icon: CurrencyDollarIcon,
    gradient: 'from-red-500 to-pink-500',
    stat: '40% Off'
  },
  {
    name: 'Nationwide Coverage',
    description: 'Licensed to serve customers in all 50 states across America',
    icon: GlobeAltIcon,
    gradient: 'from-teal-500 to-blue-500',
    stat: '50 States'
  }
]

export default function QuotePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
              </motion.div>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
                &gt;&gt;&gt; GET INSTANT QUOTES &lt;&lt;&lt;
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight"
            >
              Find Your Perfect
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Insurance Quote</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-xl leading-8 text-blue-100 max-w-3xl mx-auto"
            >
              Compare rates from top carriers and get personalized quotes in minutes.
              Save up to 40% on comprehensive protection with JECA Insurance's expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#quote-categories"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-yellow-300 hover:to-orange-300"
                >
                  <span className="relative z-10">Start Your Quote</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 text-white"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200">Call for Expert Help</p>
                  <p className="text-lg font-semibold">877-501-5460</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-blue-200 mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">40%</div>
                <div className="text-sm text-blue-200 mt-1">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2 Min</div>
                <div className="text-sm text-blue-200 mt-1">Quote Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SparklesIcon className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                &gt;&gt;&gt; WHY CHOOSE JECA &lt;&lt;&lt;
              </span>
              <SparklesIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Experience the JECA Advantage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join thousands of satisfied customers who trust JECA Insurance for their protection needs.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 sm:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                          <benefit.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className={`text-right`}>
                          <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                            {benefit.stat}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                        {benefit.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Categories */}
      <div id="quote-categories" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <StarIcon className="h-6 w-6 text-yellow-500" />
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                &gt;&gt;&gt; ALL INSURANCE QUOTES &lt;&lt;&lt;
              </span>
              <StarIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose Your Insurance Type
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our comprehensive range of insurance options. Get personalized quotes in minutes
              with competitive rates from top-rated carriers.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 space-y-16 sm:mt-20">
            {quoteCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 max-w-md mx-auto">{category.description}</p>
                </div>

                {/* Quote Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.quotes.map((quote, quoteIndex) => (
                    <motion.div
                      key={quote.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: quoteIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden">
                        {/* Popular Badge */}
                        {quote.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                          </div>
                        )}

                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                        <div className="relative z-10">
                          <div className="mb-4">
                            <h4 className="text-xl font-bold text-gray-900">{quote.name}</h4>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">{quote.description}</p>

                          <ul className="space-y-3 mb-8">
                            {quote.features.map((feature, featureIndex) => (
                              <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              href={quote.href}
                              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg group-hover:shadow-xl`}
                            >
                              <span className="flex items-center justify-center space-x-2">
                                <span>Get Quote</span>
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FireIcon className="h-6 w-6 text-orange-500" />
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                &gt;&gt;&gt; SIMPLE 3-STEP PROCESS &lt;&lt;&lt;
              </span>
              <FireIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getting your insurance quote is lightning fast and incredibly easy. Follow our streamlined process.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Choose Your Coverage',
                  description: 'Select from our comprehensive range of insurance options tailored to your specific needs.',
                  icon: CheckCircleIcon,
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  title: 'Share Your Details',
                  description: 'Provide your information through our secure, user-friendly form in just minutes.',
                  icon: ShieldCheckIcon,
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  step: '03',
                  title: 'Get Instant Results',
                  description: 'Receive personalized quotes immediately and connect with expert agents for guidance.',
                  icon: SparklesIcon,
                  gradient: 'from-purple-500 to-pink-500'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center group"
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-300 z-0"></div>
                  )}

                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`mx-auto w-12 h-12 rounded-lg bg-gradient-to-r ${step.gradient} bg-opacity-10 flex items-center justify-center mb-6`}
                    >
                      <step.icon className={`h-6 w-6 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#quote-categories"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
                >
                  <span>Start Your Quote Now</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
              </motion.div>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
                &gt;&gt;&gt; READY TO SAVE? &lt;&lt;&lt;
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
              </motion.div>
            </motion.div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
              Start Saving Today with
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> JECA Insurance</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-blue-100">
              Join over 50,000 satisfied customers who trust JECA Insurance. Get your personalized quote
              in minutes and start saving up to 40% on your insurance premiums.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#quote-categories"
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-yellow-300 hover:to-orange-300"
                >
                  <span className="relative z-10">Get Your Free Quote</span>
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-4 border border-white border-opacity-20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-500">Speak with an Expert</p>
                  <p className="text-lg text-blue-500 font-bold">877-501-5460</p>
                </div>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">A+</div>
                <div className="text-xs text-blue-200 mt-1">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-xs text-blue-200 mt-1">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                <div className="text-xs text-blue-200 mt-1">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-blue-200 mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
