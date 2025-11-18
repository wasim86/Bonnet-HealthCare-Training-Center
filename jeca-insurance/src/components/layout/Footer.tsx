'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const navigation = {
  insurance: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Education Services', href: '/Education-Services' },
    { name: 'Contact Us', href: '/contact' },
  ],
  support: [
    { name: 'ACLS', href: '/services/advanced-cardiovascular-life-support-acls' },
    { name: 'BLS', href: '/services/basic-life-support-bls' },
    { name: 'Hands Only CPR', href: '/services/cardiopulmonary-resuscitation-cpr' },
    { name: 'AED', href: '/services/automated-external-defibrillator-aed' },
    { name: 'Heart Savers First Aid', href: '/services/heart-savers-first-aid' },
    { name: 'Heimlich Maneuver', href: '/services/heimlich-maneuve' },
    { name: 'EPI-PEN', href: '/services/epi-pen' },

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
              <img
                src="/images/jeca-resources-logo.png"
                alt="JECA Resources & Services"
                className="h-16 w-auto mx-auto lg:mx-0"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-base leading-6 text-white text-center lg:text-left max-w-md mx-auto lg:mx-0"
            >
              At Bonnet HealthCare, we believe that every individual has the potential to make a difference in their community by providing essential first aid and emergency response. That's why we offer comprehensive healthcare training and education solutions designed to empower individuals, families, and organizations with life-saving skills and better health outcomes.
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
                className="flex items-start space-x-3 text-sm text-white hover:text-white transition-colors justify-center lg:justify-start"
              >
                <MapPinIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-center lg:text-left">7523 SW 8th CT<br />North Lauderdale, FL 33068</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-white hover:text-white transition-colors justify-center lg:justify-start"
              >
                <PhoneIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:877-501-5460" className="text-white hover:text-white transition-colors">954-709-8196
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-white hover:text-white transition-colors justify-center lg:justify-start"
              >
                <EnvelopeIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@jecainsurance.com" className="text-white hover:text-white transition-colors">contact@bonnethealthcare.com</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm text-white hover:text-white transition-colors justify-center lg:justify-start"
              >
                <ClockIcon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>24/7 Support</span>
              </motion.div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 border-t border-white/10"
            >
              <h4 className="text-sm font-semibold text-white mb-3 text-center lg:text-left">Follow Us</h4>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <motion.a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.233.42a3.917 3.917 0 00-1.416.923A3.927 3.927 0 00.42 5.233C.222 5.718.087 6.273.048 7.102.01 7.929 0 8.396 0 12.017c0 3.624.01 4.09.048 4.918.039.827.174 1.382.372 1.867.2.502.478.93.923 1.417.444.445.872.723 1.417.923.485.198 1.04.333 1.867.372.829.038 1.295.048 4.918.048 3.624 0 4.09-.01 4.918-.048.827-.039 1.382-.174 1.867-.372a3.9 3.9 0 001.416-.923c.445-.445.723-.872.923-1.417.198-.485.333-1.04.372-1.867.038-.829.048-1.295.048-4.918 0-3.624-.01-4.09-.048-4.918-.039-.827-.174-1.382-.372-1.867a3.9 3.9 0 00-.923-1.416A3.9 3.9 0 0018.784.42C18.299.222 17.744.087 16.915.048 16.088.01 15.621 0 12.017 0zM12.017 2.13c3.557 0 3.98.01 4.788.046.756.035 1.17.166 1.445.276.363.141.621.31.893.583.272.272.442.53.583.893.11.275.24.689.275 1.445.037.808.046 1.23.046 4.788 0 3.557-.01 3.98-.046 4.788-.035.756-.166 1.17-.275 1.445a2.395 2.395 0 01-.583.893 2.395 2.395 0 01-.893.583c-.275.11-.689.24-1.445.275-.808.037-1.23.046-4.788.046-3.557 0-3.98-.01-4.788-.046-.756-.035-1.17-.166-1.445-.275a2.395 2.395 0 01-.893-.583 2.395 2.395 0 01-.583-.893c-.11-.275-.24-.689-.275-1.445-.037-.808-.046-1.23-.046-4.788 0-3.557.01-3.98.046-4.788.035-.756.166-1.17.275-1.445.141-.363.31-.621.583-.893.272-.272.53-.442.893-.583.275-.11.689-.24 1.445-.275.808-.037 1.23-.046 4.788-.046zm0 3.622a6.265 6.265 0 100 12.53 6.265 6.265 0 000-12.53zM12.017 9.475a2.542 2.542 0 110 5.084 2.542 2.542 0 010-5.084zm4.988-1.845a1.464 1.464 0 100 2.928 1.464 1.464 0 000-2.928z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 lg:mt-0 lg:grid-cols-3 gap-2">
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold leading-7 text-white mb-4 underline underline-offset-4 lg:mb-6">Quick Links</h2>
              <ul role="list" className="space-y-4">  
                {navigation.insurance.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-white hover:text-gray-500 transition-colors block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold leading-7 text-white mb-4 underline underline-offset-4 lg:mb-6">Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <ul role="list" className="space-y-3">
                  {navigation.support.slice(0, 5).map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-white hover:text-gray-500 transition-colors block py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul role="list" className="space-y-3">
                  {navigation.support.slice(5).map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-white hover:text-gray-500 transition-colors block py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
           
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 pt-6 sm:pt-8">
          {/* Copyright and Company Info */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <p className="text-xs leading-5 text-white">
              &copy; 2025 Bonnet HealthCare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
