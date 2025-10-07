'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const navigation = {
  insurance: [
    { name: 'Auto Insurance', href: '/quote/auto' },
    { name: 'Home Insurance', href: '/quote/home' },
    { name: 'Life Insurance', href: '/quotes/life-financial/life' },
    { name: 'Business Insurance', href: '/quote/business' },
  ],
  support: [
    { name: 'About JECA', href: '/about' },
    { name: 'File a Claim', href: '/services/report-claim' },
    { name: 'Customer Support', href: '/contact' },
    { name: 'Contact Us', href: '/contact' },
  ],
}



export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-12 sm:pt-16 md:pt-20 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <Logo size="md" variant="white" animated={true} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base leading-6 text-gray-300 text-center lg:text-left max-w-md mx-auto lg:mx-0"
            >
              Protecting what matters most to you and your family. JECA Insurance provides comprehensive coverage
              with personalized service and competitive rates.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-sm text-gray-300 hover:text-white transition-colors justify-center lg:justify-start"
              >
                <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-center lg:text-left">123 Insurance Blvd, Suite 100<br />New York, NY 10001</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors justify-center lg:justify-start"
              >
                <PhoneIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:877-501-5460" className="hover:text-white transition-colors">877-501-5460</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors justify-center lg:justify-start"
              >
                <EnvelopeIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@jecainsurance.com" className="hover:text-white transition-colors">info@jecainsurance.com</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors justify-center lg:justify-start"
              >
                <ClockIcon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>24/7 Claims Support</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:mt-0 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold leading-6 text-white mb-4 lg:mb-6">Insurance Products</h3>
              <ul role="list" className="space-y-3 lg:space-y-4">
                {navigation.insurance.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold leading-6 text-white mb-4 lg:mb-6">Support</h3>
              <ul role="list" className="space-y-3 lg:space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold leading-6 text-white mb-4 lg:mb-6">Get Quote</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/quotes"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Your Quote
                  </Link>
                </motion.div>
                <p className="text-xs text-gray-400 max-w-xs mx-auto sm:mx-0">
                  Get personalized insurance quotes in minutes. Compare rates and coverage options.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 pt-6 sm:pt-8">
          {/* Copyright and Company Info */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 JECA Insurance Company. All rights reserved. Licensed in all 50 states.
            </p>
            <div className="order-first sm:order-last">
              <p className="text-xs leading-5 text-gray-400">
                NAIC #12345 | AM Best Rating: A+ (Superior)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
