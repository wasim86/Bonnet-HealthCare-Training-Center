'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TruckIcon,
  HomeIcon,
  HeartIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const insuranceTypes = [
  {
    name: 'Auto Insurance',
    description: 'Vehicle protection for cars, trucks, motorcycles',
    href: '/insurance/vehicles/auto',
    quoteHref: '/quote/auto',
    icon: TruckIcon,
    features: ['Collision Coverage', 'Comprehensive', '24/7 Roadside Assistance'],
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    name: 'Health Insurance',
    description: 'Medical coverage for individuals and families',
    href: '/insurance/health/individual',
    quoteHref: '/quote/health',
    icon: HeartIcon,
    features: ['Medical Coverage', 'Dental & Vision', 'Medicare Options'],
    color: 'from-green-600 to-emerald-700',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    name: 'Life & Financial',
    description: 'Life insurance and financial protection',
    href: '/insurance/life-financial/life',
    quoteHref: '/quotes/life-financial/life',
    icon: HeartIcon,
    features: ['Term Life', 'Whole Life', 'Annuities'],
    color: 'from-amber-600 to-red-600',
    bgColor: 'from-red-50 to-red-100',
  },
  {
    name: 'Property Insurance',
    description: 'Protect your home and belongings',
    href: '/insurance/property/home',
    quoteHref: '/quote/home',
    icon: HomeIcon,
    features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection'],
    color: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    name: 'Business Insurance',
    description: 'Coverage for your business needs',
    href: '/insurance/business/general',
    quoteHref: '/quote/business',
    icon: BuildingOfficeIcon,
    features: ['General Liability', 'Property Insurance', 'Workers Comp'],
    color: 'from-gray-600 to-slate-700',
    bgColor: 'from-gray-50 to-gray-100',
  },
]

const features = [
  {
    name: '24/7 Claims Support',
    description: 'File and track claims anytime, anywhere with our dedicated support team.',
    icon: ClockIcon,
  },
  {
    name: 'Instant Quotes',
    description: 'Get personalized quotes in minutes with our easy online process.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Expert Agents',
    description: 'Speak with licensed insurance professionals who understand your needs.',
    icon: PhoneIcon,
  },
  {
    name: 'Competitive Rates',
    description: 'Save money with our competitive pricing and available discounts.',
    icon: CurrencyDollarIcon,
  },
]

export default function ServicesSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </motion.div>
            <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Comprehensive Insurance
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600">
            From auto to life insurance, we provide comprehensive coverage options tailored to your unique needs and budget.
          </p>
        </motion.div>

        {/* Insurance Types Grid */}
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 grid max-w-none grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={insurance.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${insurance.bgColor} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative flex flex-col rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 xl:p-10 shadow-xl ring-1 ring-gray-200 group-hover:shadow-2xl transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between gap-x-3 sm:gap-x-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-x-3 sm:gap-x-4">
                    <motion.div
                      className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-none rounded-xl sm:rounded-2xl bg-gradient-to-r ${insurance.color} flex items-center justify-center shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <insurance.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold leading-6 sm:leading-8 text-gray-900">{insurance.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{insurance.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </motion.div>
                </div>

                <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 mb-4 sm:mb-6">{insurance.description}</p>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {insurance.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-x-2 sm:gap-x-3 items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" aria-hidden="true" />
                      </motion.div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link
                      href={insurance.href}
                      className={`block w-full rounded-lg sm:rounded-xl bg-gradient-to-r ${insurance.color} px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-target`}
                    >
                      Learn More
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link
                      href={insurance.quoteHref}
                      className="block w-full rounded-lg sm:rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 touch-target"
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-32 max-w-7xl"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> JECA Insurance?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600">
              Experience the difference with our customer-first approach and comprehensive coverage options.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 sm:pl-14 md:pl-16 group"
                >
                  <dt className="text-base sm:text-lg font-bold leading-6 sm:leading-7 text-gray-900">
                    <motion.div
                      className="absolute left-0 top-0 flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
