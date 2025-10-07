'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useMedicareSupplementQuoteForm } from '../../lib/hooks/useQuoteForm'
import { MedicareSupplementQuote } from '../../lib/types'

export default function MedicareSupplementQuoteForm() {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useMedicareSupplementQuoteForm({
    onSuccess: (quote) => {
      console.log('Medicare Supplement quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Medicare Supplement quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState({
    policyStartDate: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    additionalComments: '',
    informationSecure: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the Medicare Supplement quote data
    const medicareSupplementQuoteData: MedicareSupplementQuote = {
      // Personal information
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: '', // Not in form, using default
      city: '', // Not in form, using default
      state: '', // Not in form, using default
      zipCode: '', // Not in form, using default
      country: 'United States',

      // Medicare Supplement specific information
      policyStartDate: formData.policyStartDate,
      dateOfBirth: formData.dateOfBirth,

      // Additional information
      additionalComments: formData.additionalComments,
      informationSecure: formData.informationSecure,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Medicare Supplement',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Medicare Supplement Quote Data:', medicareSupplementQuoteData);

    // Submit to API
    await submitQuote(medicareSupplementQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Medicare Supplement Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-32 overflow-hidden"
      >
        {/* Medicare Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 left-8 w-32 h-8 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-6 h-24 bg-white opacity-15 rounded-full"></div>
          <div className="absolute bottom-46 right-20 w-24 h-6 bg-white opacity-15 rounded-full"></div>
          <div className="absolute top-40 right-60 w-4 h-16 bg-white opacity-20 rounded-full"></div>
          <div className="absolute top-48 right-52 w-16 h-4 bg-white opacity-20 rounded-full"></div>

          {/* Floating medical icons */}
          <div className="absolute top-24 right-40 text-white opacity-20 animate-float">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 text-white opacity-15 animate-float-delayed">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
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
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.818 4.954A9.955 9.955 0 0121 12c0-5.523-4.477-10-10-10S1 6.477 1 12a9.955 9.955 0 012.182 6.954l3.423-.171a6 6 0 1011.79 0l3.423.171z" />
              </svg>
              <span className="text-white font-medium">Medicare Supplement Insurance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Medicare Supplement Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto"
            >
              Fill the gaps in Original Medicare with comprehensive Medigap coverage
            </motion.p>
          </div>
          

          {/* Medicare Supplement Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-green-600 mb-2">Gap Coverage</h3>
              <p className="text-gray-600 text-sm">Covers Medicare deductibles & copays</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-green-600 mb-2">Standardized Plans</h3>
              <p className="text-gray-600 text-sm">Plans A through N with set benefits</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-green-600 mb-2">Doctor Freedom</h3>
              <p className="text-gray-600 text-sm">See any Medicare-accepting doctor</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-green-600 mb-2">Predictable Costs</h3>
              <p className="text-gray-600 text-sm">Fixed premiums & known benefits</p>
            </div>
          </motion.div>
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

      {/* Quote Form Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-green-100"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Get a Quote for medicare supplement insurance</h3>
              <p className="text-gray-600 mt-2">Fill out the form below to get your personalized Medicare Supplement quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Policy Start Date */}
              <div>
                <label htmlFor="policyStartDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  When would you like the policy to start? *
                </label>
                <input
                  type="date"
                  id="policyStartDate"
                  name="policyStartDate"
                  value={formData.policyStartDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label htmlFor="additionalComments" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              {/* Information Secure Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="informationSecure"
                  name="informationSecure"
                  checked={formData.informationSecure}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                />
                <label htmlFor="informationSecure" className="text-sm text-gray-700">
                  Your information is secure
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-center"
                >
                  <p className="text-red-600 font-medium">{error}</p>
                </motion.div>
              )}

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 p-6 bg-green-50 border border-green-200 rounded-md text-center"
                >
                  <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Quote Submitted Successfully!</h3>
                  <p className="text-green-600">We'll contact you soon with your Medicare Supplement quote.</p>
                  <button
                    onClick={() => {
                      reset();
                      setFormData({
                        policyStartDate: '',
                        dateOfBirth: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber: '',
                        additionalComments: '',
                        informationSecure: false
                      });
                    }}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Submit Another Quote
                  </button>
                </motion.div>
              )}

              {/* Submit Button */}
              {!success && (
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={!submitting ? { scale: 1.02 } : {}}
                  whileTap={!submitting ? { scale: 0.98 } : {}}
                  className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg ${
                    submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:shadow-xl'
                  } text-white`}
                >
                  {submitting ? 'SUBMITTING...' : 'GET QUOTE'}
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
