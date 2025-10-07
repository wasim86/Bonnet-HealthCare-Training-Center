'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useHealthQuoteForm } from '../../lib/hooks/useQuoteForm'
import { HealthQuote } from '../../lib/types'

interface HealthQuoteFormData {
  // Primary Individual
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  smoker: string
  pregnant: string
  dependents: string
  annualHouseholdIncome: string
  // Additional Insureds (Spouse)
  spouseFirstName: string
  spouseLastName: string
  spouseGender: string
  spouseDateOfBirth: string
  spouseSmoker: string
  spousePregnant: string
  // Contact Information
  address: string
  city: string
  zipcode: string
  state: string
  country: string
  email: string
  phoneNumber: string
  message: string
  informationSecure: boolean
}

const HealthQuoteForm: React.FC = () => {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useHealthQuoteForm({
    onSuccess: (quote) => {
      console.log('Health quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Health quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<HealthQuoteFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    smoker: '',
    pregnant: '',
    dependents: '',
    annualHouseholdIncome: '',
    spouseFirstName: '',
    spouseLastName: '',
    spouseGender: '',
    spouseDateOfBirth: '',
    spouseSmoker: '',
    spousePregnant: '',
    address: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: '',
    message: '',
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

    // Prepare the health quote data
    const healthQuoteData: HealthQuote = {
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

      // Health-specific information
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      smoker: formData.smoker,
      pregnant: formData.pregnant,
      dependents: formData.dependents,
      annualHouseholdIncome: formData.annualHouseholdIncome,

      // Spouse information
      spouseFirstName: formData.spouseFirstName,
      spouseLastName: formData.spouseLastName,
      spouseGender: formData.spouseGender,
      spouseDateOfBirth: formData.spouseDateOfBirth,
      spouseSmoker: formData.spouseSmoker,
      spousePregnant: formData.spousePregnant,

      // Additional information
      additionalComments: formData.message,
      informationSecure: formData.informationSecure,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Health Insurance',
      whenToStart: 'As soon as possible',
    };

    console.log('Submitting Health Quote Data:', healthQuoteData);

    // Submit to API
    await submitQuote(healthQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Impressive Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-green-900 via-teal-800 to-blue-900 text-white py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-25 animate-bounce"></div>
          <div className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-40 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-5 animate-spin"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Health Insurance
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-8 text-green-200"
          >
            Quote
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Secure comprehensive health coverage for you and your family. Compare plans, find affordable options, and protect your health and financial well-being.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🏥 Medical Coverage
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              💊 Prescription Drugs
            </span>
            <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🩺 Preventive Care
            </span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🚑 Emergency Services
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
              <span className="text-white font-medium">Compare Plans & Save Money</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Applicant Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-green-600 rounded-full p-3 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-green-900">Applicant Information</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Primary Individual */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Primary Individual</h4>
                
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="First Name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Gender and Date of Birth Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="N/A">N/A</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Smoker and Pregnant Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="smoker" className="block text-sm font-medium text-gray-700 mb-2">
                      Are you a Smoker? *
                    </label>
                    <select
                      id="smoker"
                      name="smoker"
                      value={formData.smoker}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pregnant" className="block text-sm font-medium text-gray-700 mb-2">
                      Pregnant? *
                    </label>
                    <select
                      id="pregnant"
                      name="pregnant"
                      value={formData.pregnant}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                {/* Dependents */}
                <div>
                  <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have dependents you need coverage for? *
                  </label>
                  <select
                    id="dependents"
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select</option>
                    <option value="No">No</option>
                    <option value="Yes - 1">Yes - 1</option>
                    <option value="Yes - 2">Yes - 2</option>
                    <option value="Yes - 3">Yes - 3</option>
                    <option value="Yes - 4">Yes - 4</option>
                    <option value="Yes - 5">Yes - 5</option>
                    <option value="Yes - 6">Yes - 6</option>
                    <option value="Yes - 7+">Yes - 7+</option>
                  </select>
                </div>

                {/* Annual Household Income */}
                <div>
                  <label htmlFor="annualHouseholdIncome" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Household Income *
                  </label>
                  <input
                    type="text"
                    id="annualHouseholdIncome"
                    name="annualHouseholdIncome"
                    value={formData.annualHouseholdIncome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter annual household income"
                  />
                </div>
              </div>

              {/* Additional Insureds (Spouse) */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Additional Insureds</h4>

                {/* Spouse Name */}
                <div>
                  <label htmlFor="spouseFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Spouse Name
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      id="spouseFirstName"
                      name="spouseFirstName"
                      value={formData.spouseFirstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      id="spouseLastName"
                      name="spouseLastName"
                      value={formData.spouseLastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Spouse Gender and Date of Birth */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="spouseGender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender (Spouse)
                    </label>
                    <select
                      id="spouseGender"
                      name="spouseGender"
                      value={formData.spouseGender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="N/A">N/A</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="spouseDateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth (Spouse)
                    </label>
                    <input
                      type="date"
                      id="spouseDateOfBirth"
                      name="spouseDateOfBirth"
                      value={formData.spouseDateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Spouse Smoker and Pregnant */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="spouseSmoker" className="block text-sm font-medium text-gray-700 mb-2">
                      Smoker? (Spouse)
                    </label>
                    <select
                      id="spouseSmoker"
                      name="spouseSmoker"
                      value={formData.spouseSmoker}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="spousePregnant" className="block text-sm font-medium text-gray-700 mb-2">
                      Pregnant? (Spouse)
                    </label>
                    <select
                      id="spousePregnant"
                      name="spousePregnant"
                      value={formData.spousePregnant}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-blue-600 rounded-full p-3 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-900">Contact Information</h3>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your address"
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

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Any additional information you'd like to share"
              />
            </div>

            {/* Information Security Checkbox */}
            <div className="mb-8">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="informationSecure"
                  checked={formData.informationSecure}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700">Your information is secure *</span>
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
                <p className="text-green-600">We'll contact you soon with your health insurance quote.</p>
                <button
                  onClick={() => {
                    reset();
                    setFormData({
                      firstName: '',
                      lastName: '',
                      gender: '',
                      dateOfBirth: '',
                      smoker: '',
                      pregnant: '',
                      dependents: '',
                      annualHouseholdIncome: '',
                      spouseFirstName: '',
                      spouseLastName: '',
                      spouseGender: '',
                      spouseDateOfBirth: '',
                      spouseSmoker: '',
                      spousePregnant: '',
                      address: '',
                      city: '',
                      zipcode: '',
                      state: '',
                      country: '',
                      email: '',
                      phoneNumber: '',
                      message: '',
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
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg ${
                    submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 hover:shadow-xl'
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

export default HealthQuoteForm
