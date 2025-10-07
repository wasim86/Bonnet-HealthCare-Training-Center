'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Report A Claim',
    description: 'Quick and easy claim reporting process. Get your claim started 24/7.',
    href: '/services/report-claim',
    icon: '📋',
    featured: true,
  },
  {
    title: 'Policy Review',
    description: 'Free policy review to ensure you have the right coverage at the best price.',
    href: '/services/policy-review',
    icon: '📄',
    featured: true,
  },
  {
    title: 'Update Contact Info',
    description: 'Keep your policy information current with our easy update process.',
    href: '/services/update-contact',
    icon: '📞',
    featured: false,
  },
  {
    title: 'Proof of Insurance',
    description: 'Get instant proof of insurance documents for your records.',
    href: '/services/proof-insurance',
    icon: '📜',
    featured: false,
  },
  {
    title: 'Free Consultation',
    description: 'Schedule a free consultation with our insurance experts.',
    href: '/services/consultation',
    icon: '💬',
    featured: true,
  },
  {
    title: 'Online Documents',
    description: 'Access all your insurance documents online anytime, anywhere.',
    href: '/services/documents',
    icon: '💻',
    featured: false,
  },
  {
    title: 'JECA Tax Services',
    description: 'Professional tax preparation and planning services.',
    href: 'https://www.jecataxservices.com/',
    icon: '📊',
    featured: true,
  },
  {
    title: 'Blog',
    description: 'Stay informed with our latest insurance tips and industry news.',
    href: '/blog',
    icon: '📝',
    featured: false,
  },
]

export default function ServicesPage() {
  const featuredServices = services.filter(service => service.featured)
  const otherServices = services.filter(service => !service.featured)

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive insurance services designed to make your life easier. From claims to consultations, we're here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular services to help you manage your insurance needs efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={service.href}
                className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full group border-l-4 border-blue-500"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
                  Learn More →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
            >
              <Link
                href={service.href}
                className="block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 p-4 h-full group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-md font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer service team is available 24/7 to help with your insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="tel:877-501-5460"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call 877-501-5460
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
