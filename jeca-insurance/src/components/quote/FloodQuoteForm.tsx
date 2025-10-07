'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useFloodQuoteForm } from '../../lib/hooks/useQuoteForm'
import { FloodQuote } from '../../lib/types'

interface FloodQuoteFormData {
  // Personal Information
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipcode: string
  country: string
  email: string
  phoneNumber: string
  
  // Property Information
  policyOwner: string
  homeType: string
  buildingPurpose: string
  rentingHome: string
  floodClaims: string
  
  // Coverage Information
  desiredContents: string
  desiredBuilding: string
  
  // Additional Information
  comments: string
}

const FloodQuoteForm: React.FC = () => {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useFloodQuoteForm({
    onSuccess: (quote) => {
      console.log('Flood quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Flood quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<FloodQuoteFormData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    email: '',
    phoneNumber: '',
    policyOwner: '',
    homeType: '',
    buildingPurpose: '',
    rentingHome: '',
    floodClaims: '',
    desiredContents: '',
    desiredBuilding: '',
    comments: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the flood quote data
    const floodQuoteData: FloodQuote = {
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

      // Flood insurance specific information
      policyOwner: formData.policyOwner,
      homeType: formData.homeType,
      buildingPurpose: formData.buildingPurpose,
      rentingHome: formData.rentingHome,
      floodClaims: formData.floodClaims,
      desiredContents: formData.desiredContents,
      desiredBuilding: formData.desiredBuilding,

      // Additional information
      comments: formData.comments,
      informationSecure: true,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Flood Insurance',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Flood Quote Data:', floodQuoteData);

    // Submit to API
    await submitQuote(floodQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-teal-600 text-white py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-blue-300 rounded-full opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8"
          >
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Flood Insurance Quote
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Protect your property from flood damage with comprehensive coverage tailored to your needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium ">FEMA Approved</span>
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium">Quick Processing</span>
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium">Competitive Rates</span>
          </motion.div>
        </div>
      </motion.div>



      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Additional Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-blue-600 rounded-full p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Additional Information</h3>
            </div>

            {/* Personal Information Row */}
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
                placeholder="Enter your complete address"
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
                  pattern="[0-9]{5}(-[0-9]{4})?"
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

            {/* Email and Phone Row */}
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

            {/* Property Questions */}
            <div className="mb-6">
              <label htmlFor="policyOwner" className="block text-sm font-medium text-gray-700 mb-2">
                Whom would you like the policy to name? *
              </label>
              <input
                type="text"
                id="policyOwner"
                name="policyOwner"
                value={formData.policyOwner}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter policy owner name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="homeType" className="block text-sm font-medium text-gray-700 mb-2">
                What kind of home do you live in? *
              </label>
              <select
                id="homeType"
                name="homeType"
                value={formData.homeType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="single-family-home">Single Family Home</option>
                <option value="single-family-condo">Single Family Condo</option>
                <option value="2-4-family-building">2-4 Family Building</option>
                <option value="other-residential">Other Residential</option>
                <option value="non-residential">Non Residential</option>
                <option value="single-family">Single Family</option>
                <option value="mobile-home">Mobile Home</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="buildingPurpose" className="block text-sm font-medium text-gray-700 mb-2">
                Building Purpose? *
              </label>
              <select
                id="buildingPurpose"
                name="buildingPurpose"
                value={formData.buildingPurpose}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="100-residential">100% Residential</option>
                <option value="100-non-residential">100% Non-Residential</option>
                <option value="mixed-use">Mixed Use</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="rentingHome" className="block text-sm font-medium text-gray-700 mb-2">
                Are you renting this home or do you rent this home to someone else? *
              </label>
              <select
                id="rentingHome"
                name="rentingHome"
                value={formData.rentingHome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="floodClaims" className="block text-sm font-medium text-gray-700 mb-2">
                Are you aware of any flood insurance claims that have been reported for this home? *
              </label>
              <select
                id="floodClaims"
                name="floodClaims"
                value={formData.floodClaims}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not-desired">Not Desired</option>
              </select>
            </div>

            {/* Coverage Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="desiredBuilding" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Building Coverage *
                </label>
                <select
                  id="desiredBuilding"
                  name="desiredBuilding"
                  value={formData.desiredBuilding}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="not-desired">Not Desired</option>
                  <option value="20000">$20,000</option>
                  <option value="30000">$30,000</option>
                  <option value="50000">$50,000</option>
                  <option value="75000">$75,000</option>
                  <option value="100000">$100,000</option>
                  <option value="125000">$125,000</option>
                  <option value="150000">$150,000</option>
                  <option value="200000">$200,000</option>
                  <option value="250000+">$250,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="desiredContents" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Contents Coverage *
                </label>
                <select
                  id="desiredContents"
                  name="desiredContents"
                  value={formData.desiredContents}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="8000">$8,000</option>
                  <option value="12000">$12,000</option>
                  <option value="20000">$20,000</option>
                  <option value="30000">$30,000</option>
                  <option value="40000">$40,000</option>
                  <option value="50000">$50,000</option>
                  <option value="60000">$60,000</option>
                  <option value="70000">$70,000</option>
                  <option value="80000">$80,000</option>
                  <option value="100000">$100,000</option>
                </select>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-6">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Any additional information or comments"
              />
            </div>

            {/* Privacy Notice */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 italic">
                * Your information is secure
              </p>
            </div>
          </motion.div>

          {/* Submit Button */}
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
              <p className="text-green-600">We'll contact you soon with your flood insurance quote.</p>
              <button
                onClick={() => {
                  reset();
                  setFormData({
                    firstName: '',
                    lastName: '',
                    address: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    country: '',
                    email: '',
                    phoneNumber: '',
                    policyOwner: '',
                    homeType: '',
                    buildingPurpose: '',
                    rentingHome: '',
                    floodClaims: '',
                    desiredContents: '',
                    desiredBuilding: '',
                    comments: ''
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <button
                type="submit"
                disabled={submitting}
                className={`font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 hover:scale-105 hover:shadow-xl'
                } text-white`}
              >
                {submitting ? 'SUBMITTING...' : 'GET QUOTE'}
              </button>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  )
}

export default FloodQuoteForm
