'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useLifeInsuranceQuoteForm } from '../../lib/hooks/useQuoteForm'
import { LifeInsuranceQuote } from '../../lib/types'

export default function LifeInsuranceQuoteForm() {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useLifeInsuranceQuoteForm({
    onSuccess: (quote) => {
      console.log('Life insurance quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Life insurance quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: '',
    coverageType: '',
    amountOfCoverage: '',
    policyStartDate: '',
    birthdate: '',
    height: '',
    weight: '',
    gender: '',
    tobaccoUse: '',
    majorDiseases: '',
    strokeHeartAttack: '',
    cancerDiagnosis: '',
    businessHobby: '',
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

    // Prepare the life insurance quote data
    const lifeInsuranceQuoteData: LifeInsuranceQuote = {
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

      // Life insurance specific information
      coverageType: formData.coverageType,
      amountOfCoverage: formData.amountOfCoverage,
      policyStartDate: formData.policyStartDate,
      birthdate: formData.birthdate,
      height: formData.height,
      weight: formData.weight,
      gender: formData.gender,
      tobaccoUse: formData.tobaccoUse,
      majorDiseases: formData.majorDiseases,
      strokeHeartAttack: formData.strokeHeartAttack,
      cancerDiagnosis: formData.cancerDiagnosis,
      businessHobby: formData.businessHobby,

      // Additional information
      additionalComments: formData.additionalComments,
      informationSecure: formData.informationSecure,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Life Insurance',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Life Insurance Quote Data:', lifeInsuranceQuoteData);

    // Submit to API
    await submitQuote(lifeInsuranceQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Life Insurance Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-32 overflow-hidden"
      >
        {/* Life Insurance Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 left-8 w-32 h-8 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-6 h-24 bg-white opacity-15 rounded-full"></div>
          <div className="absolute bottom-46 right-20 w-24 h-6 bg-white opacity-15 rounded-full"></div>
          <div className="absolute top-40 right-60 w-4 h-16 bg-white opacity-20 rounded-full"></div>
          <div className="absolute top-48 right-52 w-16 h-4 bg-white opacity-20 rounded-full"></div>

          {/* Floating life insurance icons */}
          <div className="absolute top-24 right-40 text-white opacity-20 animate-float">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 text-white opacity-15 animate-float-delayed">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
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
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-white font-medium">Life Insurance Protection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Life Insurance Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto"
            >
              Protect your family's financial future with comprehensive life insurance coverage
            </motion.p>
          </div>
          

          {/* Life Insurance Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Term Life</h3>
              <p className="text-gray-600 text-sm">Affordable temporary coverage</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Whole Life</h3>
              <p className="text-gray-600 text-sm">Permanent coverage with cash value</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Universal Life</h3>
              <p className="text-gray-600 text-sm">Flexible premiums and benefits</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-600 mb-2">Financial Security</h3>
              <p className="text-gray-600 text-sm">Peace of mind for your family</p>
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
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Get your life insurance quote</h3>
              <p className="text-gray-600 mt-2">Fill out the form below to get your personalized life insurance quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
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

              {/* Coverage Type and Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="coverageType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Coverage Type *
                  </label>
                  <select
                    id="coverageType"
                    name="coverageType"
                    value={formData.coverageType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Choose</option>
                    <option value="Not Sure">Not Sure</option>
                    <option value="Term">Term</option>
                    <option value="Whole">Whole</option>
                    <option value="Universal">Universal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="amountOfCoverage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount of Coverage *
                  </label>
                  <select
                    id="amountOfCoverage"
                    name="amountOfCoverage"
                    value={formData.amountOfCoverage}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Choose</option>
                    <option value="Not Sure">Not Sure</option>
                    <option value="$50,000">$50,000</option>
                    <option value="$100,000">$100,000</option>
                    <option value="$250,000">$250,000</option>
                    <option value="$500,000">$500,000</option>
                    <option value="$1,000,000">$1,000,000</option>
                    <option value="$2,000,000+">$2,000,000+</option>
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

              {/* Birthdate and Physical Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Birthdate (MM/DD/YYYY) *
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
                  <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2">
                    Height *
                  </label>
                  <input
                    type="text"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 5'10&quot;"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight *
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 150 lbs"
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

              {/* Health Questions */}
              <div>
                <label htmlFor="majorDiseases" className="block text-sm font-semibold text-gray-700 mb-2">
                  Have you been diagnosed with any major diseases in the past 10 years? *
                </label>
                <select
                  id="majorDiseases"
                  name="majorDiseases"
                  value={formData.majorDiseases}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="strokeHeartAttack" className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you have any stroke/who have had any heart disease? *
                </label>
                <select
                  id="strokeHeartAttack"
                  name="strokeHeartAttack"
                  value={formData.strokeHeartAttack}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="cancerDiagnosis" className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you have any stroke/who have had any form of cancer? *
                </label>
                <select
                  id="cancerDiagnosis"
                  name="cancerDiagnosis"
                  value={formData.cancerDiagnosis}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="businessHobby" className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you engage in a hazardous hobby or occupation (e.g., rock climbing, private pilot, etc.)? *
                </label>
                <select
                  id="businessHobby"
                  name="businessHobby"
                  value={formData.businessHobby}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
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
                  <p className="text-green-600">We'll contact you soon with your life insurance quote.</p>
                  <button
                    onClick={() => {
                      reset();
                      setFormData({
                        firstName: '',
                        lastName: '',
                        address: '',
                        city: '',
                        zipcode: '',
                        state: '',
                        country: '',
                        email: '',
                        phoneNumber: '',
                        coverageType: '',
                        amountOfCoverage: '',
                        policyStartDate: '',
                        birthdate: '',
                        height: '',
                        weight: '',
                        gender: '',
                        tobaccoUse: '',
                        majorDiseases: '',
                        strokeHeartAttack: '',
                        cancerDiagnosis: '',
                        businessHobby: '',
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
