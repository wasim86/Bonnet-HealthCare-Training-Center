'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const quoteCategories = [
  {
    title: 'Auto Insurance',
    description: 'Comprehensive vehicle protection for cars, trucks, motorcycles, and boats.',
    href: '/quotes/auto',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    color: 'from-blue-600 to-indigo-700',
    available: true,
    quotes: [
      { name: 'Auto Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' },
      { name: 'Boat Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' },
      { name: 'Motorcycle Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' }
    ]
  },
  {
    title: 'Health Insurance',
    description: 'Medical coverage for individuals, families, and specialized needs.',
    href: '/quotes/health',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.13c-.08-.32-.13-.66-.13-1H4V6zm6.01 10H4v-1h6.01v1zm0-2H4v-1h6.01v1zm0-2H4V9h6.01v1z"/>
      </svg>
    ),
    color: 'from-green-600 to-emerald-700',
    available: true,
    quotes: [
      { name: 'Health Insurance Quote', href: '/quote/health' },
      { name: 'Dental Insurance Quote', href: '/quotes/health/dental' },
      { name: 'Vision Insurance Quote', href: '/quotes/health/vision' },
      { name: 'Medicare Advantage Quote', href: '/quotes/health/medicare-advantage' },
      { name: 'Medicare Supplement Quote', href: '/quotes/health/medicare-supplement' }
    ]
  },
  {
    title: 'Life & Financial',
    description: 'Life insurance, annuities, and financial protection solutions.',
    href: '/quotes/life-financial',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    color: 'from-amber-600 to-red-600',
    available: true,
    quotes: [
      { name: 'Life Insurance Quote', href: '/quotes/life-financial/life' },
      { name: 'Annuity Quote', href: '/quotes/life-financial/annuity' },
      { name: 'Disability Insurance Quote', href: '/quotes/life-financial/disability' },
      { name: 'Umbrella Insurance Quote', href: '/quotes/life-financial/umbrella' }
    ]
  },
  {
    title: 'Home Owner Insurance',
    description: 'Protect your home, condo, rental property, and more with comprehensive coverage.',
    href: '/quote/home',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    color: 'from-purple-600 to-pink-600',
    available: true,
    quotes: [
      { name: 'Home Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' },
      { name: 'Flood Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' },
      { name: 'Landlords Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' },
      { name: 'Renters Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx' }
    ]
  },
  {
    title: 'Business Insurance',
    description: 'Comprehensive business insurance solutions for companies of all sizes.',
    href: '/quote/business',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    color: 'from-gray-600 to-slate-700',
    available: true,
    quotes: [
      { name: 'Business Insurance Quote', href: '/quote/business' },
      { name: 'Business Owner Package (BOP)', href: '/quote/bop' },
      { name: 'Workers Compensation Quote', href: '/quote/workers-comp' }
    ]
  },
]

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Impressive Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-8 w-32 h-8 bg-white opacity-10 rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-40 right-20 w-6 h-24 bg-white opacity-15 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-46 right-20 w-24 h-6 bg-white opacity-15 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-40 right-60 w-4 h-16 bg-white opacity-20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-48 right-52 w-16 h-4 bg-white opacity-20 rounded-full animate-pulse delay-700"></div>

          {/* Floating Icons */}
          <div className="absolute top-24 right-40 text-white opacity-20 animate-float">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 text-white opacity-15 animate-float-delayed">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
            </svg>
          </div>
          <div className="absolute top-60 left-60 text-white opacity-10 animate-float">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-black bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 border border-white border-opacity-20 mb-8"
            >
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-white font-medium">Trusted Insurance Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Get Your Perfect
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Insurance Quote
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Compare rates from top insurers and find comprehensive coverage tailored to your needs.
              Quick, easy, and personalized quotes available in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white border-opacity-30">
                <span className="text-white font-semibold">✓ Instant Quotes</span>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white border-opacity-30">
                <span className="text-white font-semibold">✓ Best Rates</span>
              </div>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white border-opacity-30">
                <span className="text-white font-semibold">✓ Expert Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
      `}</style>

      {/* Quote Categories Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Insurance Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of insurance products designed to protect what matters most to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quoteCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border-2 border-transparent hover:border-gray-100 ${!category.available ? 'opacity-60' : ''}`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                  {/* Coming Soon Badge */}
                  {!category.available && (
                    <div className="absolute top-4 right-4 bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Available Quotes */}
                    {category.available && category.quotes.length > 0 && (
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Available Quotes:</h4>
                        {category.quotes.map((quote, quoteIndex) => (
                          <Link
                            key={quoteIndex}
                            href={quote.href}
                            className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:translate-x-1 transform"
                          >
                            • {quote.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose JECA Insurance?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by thousands of customers for comprehensive coverage and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">19</div>
              <div className="text-blue-100 font-medium">Quote Forms Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-blue-100 font-medium">Insurance Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-100 font-medium">Customer Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Customer Support</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Help Choosing the Right Coverage?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Our licensed insurance experts are here to guide you through the process and help you find
                the perfect coverage at the best price. Get personalized recommendations today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Contact an Expert
                </span>
              </Link>
              <Link
                href="tel:877-501-5460"
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call 877-501-5460
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2 text-gray-800">Instant Quotes</h3>
                <p className="text-gray-700 text-sm">Get personalized quotes in minutes, not hours</p>
              </div>
              <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-2">💰</div>
                <h3 className="font-semibold mb-2 text-gray-800">Best Rates</h3>
                <p className="text-gray-700 text-sm">Compare rates from top insurers to save money</p>
              </div>
              <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-2 text-gray-800">Expert Support</h3>
                <p className="text-gray-700 text-sm">Licensed agents available to help you choose</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
