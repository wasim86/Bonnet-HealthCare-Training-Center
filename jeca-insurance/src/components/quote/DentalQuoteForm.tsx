'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useDentalQuoteForm } from '../../lib/hooks/useQuoteForm'
import { DentalQuote } from '../../lib/types'

interface FileAttachment {
  file: File | null
  preview: string | null
}

export default function DentalQuoteForm() {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useDentalQuoteForm({
    onSuccess: (quote) => {
      console.log('Dental quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Dental quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState({
    numberOfPeople: '',
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
    informationSecure: false,
    // Checkbox options with file attachments for dental insurance
    dentalRecords: false,
    xrayImages: false,
    treatmentHistory: false,
    insuranceCards: false
  })

  const [fileAttachments, setFileAttachments] = useState<{
    dentalRecords: FileAttachment
    xrayImages: FileAttachment
    treatmentHistory: FileAttachment
    insuranceCards: FileAttachment
  }>({
    dentalRecords: { file: null, preview: null },
    xrayImages: { file: null, preview: null },
    treatmentHistory: { file: null, preview: null },
    insuranceCards: { file: null, preview: null }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (checkboxName: string, file: File | null) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFileAttachments(prev => ({
          ...prev,
          [checkboxName]: {
            file,
            preview: e.target?.result as string
          }
        }))
      }
      reader.readAsDataURL(file)
    } else {
      setFileAttachments(prev => ({
        ...prev,
        [checkboxName]: { file: null, preview: null }
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the dental quote data
    const dentalQuoteData: DentalQuote = {
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

      // Dental-specific information
      numberOfPeople: formData.numberOfPeople,
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
      coverageDesired: 'Dental Insurance',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Dental Quote Data:', dentalQuoteData);

    // Submit to API
    await submitQuote(dentalQuoteData);
  }

  const checkboxOptions = [
    {
      name: 'dentalRecords',
      label: 'Dental Records',
      description: 'Upload your recent dental records and treatment history'
    },
    {
      name: 'xrayImages',
      label: 'X-ray Images',
      description: 'Upload dental X-ray images for better assessment'
    },
    {
      name: 'treatmentHistory',
      label: 'Treatment History',
      description: 'Upload previous dental treatment documentation'
    },
    {
      name: 'insuranceCards',
      label: 'Insurance Cards',
      description: 'Upload current insurance card images'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Impressive Dental Insurance Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-600 text-white py-32 overflow-hidden"
      >
        {/* Dental Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 left-8 w-32 h-8 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-6 h-24 bg-white opacity-15 rounded-full"></div>
          <div className="absolute bottom-46 right-20 w-24 h-6 bg-white opacity-15 rounded-full"></div>
          <div className="absolute top-40 right-60 w-4 h-16 bg-white opacity-20 rounded-full"></div>
          <div className="absolute top-48 right-52 w-16 h-4 bg-white opacity-20 rounded-full"></div>

          {/* Floating dental icons */}
          <div className="absolute top-24 right-40 text-white opacity-20 animate-float">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 text-white opacity-15 animate-float-delayed">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-medium">Comprehensive Dental Coverage</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Dental Insurance Quote
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Protect your smile with comprehensive dental coverage tailored to your needs
            </motion.p>
          </div>
          

          {/* Dental Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Preventive Care</h3>
              <p className="text-gray-600 text-sm">Regular cleanings and checkups</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Restorative</h3>
              <p className="text-gray-600 text-sm">Fillings, crowns, and repairs</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Cosmetic</h3>
              <p className="text-gray-600 text-sm">Whitening and aesthetic treatments</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-blue-600 mb-2">Emergency</h3>
              <p className="text-gray-600 text-sm">24/7 emergency dental care</p>
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
            className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-100"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Get a quote for dental insurance</h3>
              <p className="text-gray-600 mt-2">Fill out the form below to get your personalized dental insurance quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Number of People */}
              <div>
                <label htmlFor="numberOfPeople" className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of people to insure *
                </label>
                <select
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                  <option value="9">9 People</option>
                  <option value="10+">10+ People</option>
                </select>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
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
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
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
                  <p className="text-green-600">We'll contact you soon with your dental insurance quote.</p>
                  <button
                    onClick={() => {
                      reset();
                      setFormData({
                        numberOfPeople: '',
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
                        informationSecure: false,
                        dentalRecords: false,
                        xrayImages: false,
                        treatmentHistory: false,
                        insuranceCards: false
                      });
                      setFileAttachments({
                        dentalRecords: { file: null, preview: null },
                        xrayImages: { file: null, preview: null },
                        treatmentHistory: { file: null, preview: null },
                        insuranceCards: { file: null, preview: null }
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
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 hover:shadow-xl'
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
