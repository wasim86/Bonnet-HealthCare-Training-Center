'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useDisabilityInsuranceQuoteForm } from '../../lib/hooks/useQuoteForm'
import { DisabilityInsuranceQuote } from '../../lib/types'

export default function DisabilityInsuranceQuoteForm() {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useDisabilityInsuranceQuoteForm({
    onSuccess: (quote) => {
      console.log('Disability insurance quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Disability insurance quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState({
    occupation: '',
    birthdate: '',
    monthlyIncome: '',
    gender: '',
    tobaccoUse: '',
    policyStartDate: '',
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the disability insurance quote data
    const disabilityQuoteData: DisabilityInsuranceQuote = {
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

      // Disability insurance specific information
      occupation: formData.occupation,
      birthdate: formData.birthdate,
      monthlyIncome: formData.monthlyIncome,
      gender: formData.gender,
      tobaccoUse: formData.tobaccoUse,
      policyStartDate: formData.policyStartDate,

      // Additional information
      additionalComments: formData.additionalComments,
      informationSecure: formData.informationSecure,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Disability Insurance',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Disability Insurance Quote Data:', disabilityQuoteData);

    // Submit to API
    await submitQuote(disabilityQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Disability Insurance Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-32 overflow-hidden"
      >
        {/* Disability Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 left-8 w-32 h-8 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-6 h-24 bg-white opacity-15 rounded-full"></div>
          <div className="absolute bottom-46 right-20 w-24 h-6 bg-white opacity-15 rounded-full"></div>
          <div className="absolute top-40 right-60 w-4 h-16 bg-white opacity-20 rounded-full"></div>
          <div className="absolute top-48 right-52 w-16 h-4 bg-white opacity-20 rounded-full"></div>

          {/* Floating disability icons */}
          <div className="absolute top-24 right-40 text-white opacity-20 animate-float">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 text-white opacity-15 animate-float-delayed">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 19V8h16v11H4z"/>
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
              <span className="text-white font-medium">Income Protection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Disability Insurance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto"
            >
              Protect your income and financial security when you can't work
            </motion.p>
          </div>
          

          {/* Disability Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Income Protection</h3>
              <p className="text-gray-600 text-sm">Replace lost income</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Short-term Coverage</h3>
              <p className="text-gray-600 text-sm">Temporary disability benefits</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Long-term Coverage</h3>
              <p className="text-gray-600 text-sm">Extended disability protection</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 19V8h16v11H4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Partial Benefits</h3>
              <p className="text-gray-600 text-sm">Gradual return to work</p>
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
            className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-amber-100"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Get a quote for disability insurance</h3>
              <p className="text-gray-600 mt-2">Fill out the form below to get your personalized disability insurance quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Disability Specific Fields */}
              <div>
                <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Occupation *
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your occupation..."
                />
              </div>

              {/* Birthdate and Monthly Income */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Birthdate (MM/DD/YY) *
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Income *
                  </label>
                  <input
                    type="text"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., $5,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Gender and Tobacco Use */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Choose</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tobaccoUse" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tobacco Use? *
                  </label>
                  <select
                    id="tobaccoUse"
                    name="tobaccoUse"
                    value={formData.tobaccoUse}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Choose</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* Policy Start Date */}
              <div>
                <label htmlFor="policyStartDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  When would you like this policy to start? *
                </label>
                <input
                  type="date"
                  id="policyStartDate"
                  name="policyStartDate"
                  value={formData.policyStartDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter your full address..."
                />
              </div>

              {/* City and Zipcode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Zipcode *
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* State and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
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
                  className="h-5 w-5 text-amber-600 border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
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
                  <p className="text-green-600">We'll contact you soon with your disability insurance quote.</p>
                  <button
                    onClick={() => {
                      reset();
                      setFormData({
                        occupation: '',
                        birthdate: '',
                        monthlyIncome: '',
                        gender: '',
                        tobaccoUse: '',
                        policyStartDate: '',
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
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={!submitting ? { scale: 1.02 } : {}}
                  whileTap={!submitting ? { scale: 0.98 } : {}}
                  className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg ${
                    submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 hover:shadow-xl'
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
