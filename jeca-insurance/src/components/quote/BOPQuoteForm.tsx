'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useBOPQuoteForm } from '../../lib/hooks/useQuoteForm'
import { BOPQuote } from '../../lib/types'

interface BOPQuoteFormData {
  whenToStart: string
  businessName: string
  businessDescription: string
  firstName: string
  lastName: string
  address: string
  city: string
  zipcode: string
  state: string
  country: string
  email: string
  phoneNumber: string
  additionalComments: string
  informationSecure: boolean
}

const BOPQuoteForm: React.FC = () => {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useBOPQuoteForm({
    onSuccess: (quote) => {
      console.log('BOP quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('BOP quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<BOPQuoteFormData>({
    whenToStart: '',
    businessName: '',
    businessDescription: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: '',
    additionalComments: '',
    informationSecure: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the BOP quote data
    const bopQuoteData: BOPQuote = {
      // Personal information
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipcode,
      country: formData.country || 'United States',

      // BOP specific information
      whenToStart: formData.whenToStart,
      businessName: formData.businessName,
      businessDescription: formData.businessDescription,

      // Additional information
      additionalComments: formData.additionalComments,
      informationSecure: formData.informationSecure,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Business Owners Policy (BOP)',
    };

    console.log('Submitting BOP Quote Data:', bopQuoteData);

    // Submit to API
    await submitQuote(bopQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-25 animate-bounce"></div>
          <div className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-40 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-5 animate-spin"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Business Owner Package
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-200"
          >
            (BOP) Insurance Quote
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive business protection combining General Liability and Commercial Property coverage in one convenient package
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🛡️ General Liability
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🏢 Commercial Property
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              💼 Business Income
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              ⚡ Equipment Coverage
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-black bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 border border-white border-opacity-20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Get Your Quote in Under 5 Minutes</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Get a BOP Insurance Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-blue-600 rounded-full p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Get a BOP Insurance Quote</h3>
            </div>

            {/* When would you like this policy to start */}
            <div className="mb-6">
              <label htmlFor="whenToStart" className="block text-sm font-medium text-gray-700 mb-2">
                When would you like this policy to start? *
              </label>
              <input
                type="date"
                id="whenToStart"
                name="whenToStart"
                value={formData.whenToStart}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Business Name and Business Description Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Please describe the nature of your business *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe your business activities"
                />
              </div>
            </div>

            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your business address"
              />
            </div>

            {/* City and Zipcode Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Zipcode *
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter zipcode"
                />
              </div>
            </div>

            {/* State and Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter country"
                />
              </div>
            </div>

            {/* Email and Phone Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Additional Comments */}
            <div className="mb-6">
              <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Comments
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Any additional information you'd like to share"
              />
            </div>

              {/* Information Security Confirmation */}
              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="informationSecure"
                    name="informationSecure"
                    checked={formData.informationSecure}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="informationSecure" className="text-sm text-gray-700">
                    I confirm that my information is secure and I agree to the terms and conditions *
                  </label>
                </div>
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
                <p className="text-green-600">We'll contact you soon with your BOP insurance quote.</p>
                <button
                  onClick={() => {
                    reset();
                    setFormData({
                      whenToStart: '',
                      businessName: '',
                      businessDescription: '',
                      firstName: '',
                      lastName: '',
                      address: '',
                      city: '',
                      zipcode: '',
                      state: '',
                      country: '',
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
              <div className="text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 transform shadow-lg ${
                    submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl'
                  } text-white`}
                >
                  {submitting ? 'SUBMITTING...' : 'GET QUOTE'}
                </button>
              </div>
            )}
          </motion.div>
        </form>
      </div>
    </div>
  )
}

export default BOPQuoteForm
