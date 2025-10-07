'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useBusinessQuoteForm } from '../../lib/hooks/useQuoteForm'
import { BusinessQuote } from '../../lib/types'

interface BusinessQuoteFormData {
  // Business Information
  businessName: string
  yearsInBusiness: string
  legalEntity: string
  partnersOwners: string
  fullTimeEmployees: string
  partTimeEmployees: string
  subContractors: string
  oneTimeOrSeasonal: string
  annualRevenue: string
  replaceExistingPolicy: string
  businessDescription: string
  whenToStart: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  additionalComments: string
  // Insurance Types
  generalLiability: boolean
  commercialAuto: boolean
  commercialProperty: boolean
  cyberLiability: boolean
  professionalLiability: boolean
  directorsOfficersLiability: boolean
  businessOwnersPackage: boolean
  workersCompensation: boolean
  commercialCrime: boolean
  groupHealthInsurance: boolean
  groupLifeInsurance: boolean
  groupDisabilityInsurance: boolean
  retirementPlans: boolean
  supplementalPlans: boolean
  keyManLifeInsurance: boolean
  keyManDisabilityInsurance: boolean
  deferredCompensation: boolean
}

const BusinessQuoteForm: React.FC = () => {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useBusinessQuoteForm({
    onSuccess: (quote) => {
      console.log('Business quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Business quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<BusinessQuoteFormData>({
    businessName: '',
    yearsInBusiness: '',
    legalEntity: '',
    partnersOwners: '',
    fullTimeEmployees: '',
    partTimeEmployees: '',
    subContractors: '',
    oneTimeOrSeasonal: '',
    annualRevenue: '',
    replaceExistingPolicy: '',
    businessDescription: '',
    whenToStart: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    additionalComments: '',
    generalLiability: false,
    commercialAuto: false,
    commercialProperty: false,
    cyberLiability: false,
    professionalLiability: false,
    directorsOfficersLiability: false,
    businessOwnersPackage: false,
    workersCompensation: false,
    commercialCrime: false,
    groupHealthInsurance: false,
    groupLifeInsurance: false,
    groupDisabilityInsurance: false,
    retirementPlans: false,
    supplementalPlans: false,
    keyManLifeInsurance: false,
    keyManDisabilityInsurance: false,
    deferredCompensation: false
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

    // Prepare the business quote data
    const businessQuoteData: BusinessQuote = {
      // Personal information
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: '', // Not captured in current form
      city: '', // Not captured in current form
      state: '', // Not captured in current form
      zipCode: '', // Not captured in current form
      country: 'United States',

      // Business-specific information
      businessName: formData.businessName,
      yearsInBusiness: formData.yearsInBusiness,
      legalEntity: formData.legalEntity,
      partnersOwners: formData.partnersOwners,
      fullTimeEmployees: formData.fullTimeEmployees,
      partTimeEmployees: formData.partTimeEmployees,
      subContractors: formData.subContractors,
      oneTimeOrSeasonal: formData.oneTimeOrSeasonal,
      annualRevenue: formData.annualRevenue,
      businessDescription: formData.businessDescription,

      // Insurance types
      generalLiability: formData.generalLiability,
      commercialAuto: formData.commercialAuto,
      commercialProperty: formData.commercialProperty,
      cyberLiability: formData.cyberLiability,
      professionalLiability: formData.professionalLiability,
      directorsOfficersLiability: formData.directorsOfficersLiability,
      businessOwnersPackage: formData.businessOwnersPackage,
      workersCompensation: formData.workersCompensation,
      commercialCrime: formData.commercialCrime,
      groupHealthInsurance: formData.groupHealthInsurance,
      groupLifeInsurance: formData.groupLifeInsurance,
      groupDisabilityInsurance: formData.groupDisabilityInsurance,
      retirementPlans: formData.retirementPlans,
      supplementalPlans: formData.supplementalPlans,
      keyManLifeInsurance: formData.keyManLifeInsurance,
      keyManDisabilityInsurance: formData.keyManDisabilityInsurance,
      deferredCompensation: formData.deferredCompensation,

      // Additional information
      additionalComments: formData.additionalComments,
      informationSecure: true,

      // Default values for required fields not in form
      currentInsuranceCompany: '',
      continuousCoverage: '',
      policyExpiresIn: '',
      claimsIn3Years: '',
      ticketsIn3Years: '',
      coverageDesired: 'Business Insurance',
      whenToStart: formData.whenToStart,
    };

    console.log('Submitting Business Quote Data:', businessQuoteData);

    // Submit to API
    await submitQuote(businessQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-slate-900 via-gray-800 to-slate-700 text-white py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg opacity-10 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg opacity-20 -rotate-12"></div>
          <div className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-15 rotate-45"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl mb-8 shadow-2xl"
          >
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Business Insurance Quote
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Enterprise-grade protection for businesses of all sizes. Secure your company's future with comprehensive coverage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg">
              ⚡ General Liability
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg">
              🏢 Property Coverage
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-90 px-6 py-3 rounded-full font-semibold text-white shadow-lg">
              👥 Workers Compensation
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Additional Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 rounded-2xl p-8 border border-slate-200 shadow-xl"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 shadow-lg">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-gray-700 bg-clip-text text-transparent">
                Business Information
              </h3>
            </div>

            {/* Business Name and Years in Business Row */}
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700 mb-2">
                  Years in Business *
                </label>
                <select
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                >
                  <option value="">Choose option</option>
                  <option value="less-than-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-20">11-20 years</option>
                  <option value="21+">21+ years</option>
                </select>
              </div>
            </div>

            {/* Legal Entity and Partners/Owners Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="legalEntity" className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Entity *
                </label>
                <select
                  id="legalEntity"
                  name="legalEntity"
                  value={formData.legalEntity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                >
                  <option value="">Choose option</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="llc">LLC</option>
                  <option value="s-corporation">S Corporation</option>
                  <option value="c-corporation">C Corporation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="partnersOwners" className="block text-sm font-medium text-gray-700 mb-2">
                  Partners/Owners *
                </label>
                <select
                  id="partnersOwners"
                  name="partnersOwners"
                  value={formData.partnersOwners}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                >
                  <option value="">Choose option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3-5">3-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
            </div>

            {/* Full-Time Employees and Part-Time Employees Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullTimeEmployees" className="block text-sm font-medium text-gray-700 mb-2">
                  Full-Time Employees *
                </label>
                <select
                  id="fullTimeEmployees"
                  name="fullTimeEmployees"
                  value={formData.fullTimeEmployees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                >
                  <option value="">Choose option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2-3">2-3</option>
                  <option value="4-5">4-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21+">21+</option>
                </select>
              </div>

              <div>
                <label htmlFor="partTimeEmployees" className="block text-sm font-medium text-gray-700 mb-2">
                  Part-time Employees *
                </label>
                <select
                  id="partTimeEmployees"
                  name="partTimeEmployees"
                  value={formData.partTimeEmployees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                >
                  <option value="">Choose option</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2-3">2-3</option>
                  <option value="4-5">4-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="20+">20+</option>
                </select>
              </div>
            </div>

            {/* Sub-Contractors and One-time/Seasonal Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="subContractors" className="block text-sm font-medium text-gray-700 mb-2">
                  Sub-Contractors *
                </label>
                <select
                  id="subContractors"
                  name="subContractors"
                  value={formData.subContractors}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="none">None</option>
                  <option value="1-2">1-2</option>
                  <option value="3-4">3-4</option>
                  <option value="5-10">5-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>

              <div>
                <label htmlFor="oneTimeOrSeasonal" className="block text-sm font-medium text-gray-700 mb-2">
                  Is this a one-time event or seasonal business? *
                </label>
                <select
                  id="oneTimeOrSeasonal"
                  name="oneTimeOrSeasonal"
                  value={formData.oneTimeOrSeasonal}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="no">No</option>
                  <option value="one-time-event">One Time Event</option>
                  <option value="seasonal-business">Seasonal Business</option>
                </select>
              </div>
            </div>

            {/* Replace Existing Policy and Annual Revenue Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="replaceExistingPolicy" className="block text-sm font-medium text-gray-700 mb-2">
                  Will this replace an existing business policy? *
                </label>
                <select
                  id="replaceExistingPolicy"
                  name="replaceExistingPolicy"
                  value={formData.replaceExistingPolicy}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div>
                <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue business policy? *
                </label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="under-100000">Under $100,000</option>
                  <option value="100000-500000">$100,000 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000-5000000">$1,000,000 - $5,000,000</option>
                  <option value="5000000-10000000">$5,000,000 - $10,000,000</option>
                  <option value="10000000+">$10,000,000+</option>
                </select>
              </div>
            </div>

            {/* Business Description and When to Start Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Please describe the specific nature of your business *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe your business activities, services, or products"
                />
              </div>

              <div>
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
                  placeholder="Enter your email address"
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
                Additional Comments?
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Any additional information or special requirements"
              />
            </div>

            {/* Insurance Types Section */}
            <div className="mt-8 bg-gradient-to-r from-slate-100 to-gray-100 rounded-xl p-6 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">📋 Select Your Business Insurance Coverage</h4>

              {/* Property/Casualty Insurance */}
              <div className="mb-8">
                <h5 className="text-lg font-bold text-amber-700 mb-4 flex items-center">
                  🏢 Property/Casualty Insurance
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="generalLiability"
                      checked={formData.generalLiability}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-amber-600 border-slate-300 rounded-md focus:ring-amber-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">General Liability</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="commercialAuto"
                      checked={formData.commercialAuto}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Commercial Auto</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="commercialProperty"
                      checked={formData.commercialProperty}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Commercial Property</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="cyberLiability"
                      checked={formData.cyberLiability}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Cyber Liability</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="professionalLiability"
                      checked={formData.professionalLiability}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Professional Liability</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="directorsOfficersLiability"
                      checked={formData.directorsOfficersLiability}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Directors and Officers Liability</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="businessOwnersPackage"
                      checked={formData.businessOwnersPackage}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Business Owners Package (BOP)</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="workersCompensation"
                      checked={formData.workersCompensation}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Workers Compensation</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="commercialCrime"
                      checked={formData.commercialCrime}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Commercial Crime</span>
                  </label>
                </div>
              </div>

              {/* Employee Benefits */}
              <div className="mb-8">
                <h5 className="text-lg font-bold text-blue-700 mb-4 flex items-center">
                  👥 Employee Benefits
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="groupHealthInsurance"
                      checked={formData.groupHealthInsurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Group Health Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="groupLifeInsurance"
                      checked={formData.groupLifeInsurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Group Life Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="groupDisabilityInsurance"
                      checked={formData.groupDisabilityInsurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Group Disability Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="retirementPlans"
                      checked={formData.retirementPlans}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">401K / Retirement Plans</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="supplementalPlans"
                      checked={formData.supplementalPlans}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Supplemental Plans / AFLAC</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="keyManLifeInsurance"
                      checked={formData.keyManLifeInsurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Key Man Life Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="keyManDisabilityInsurance"
                      checked={formData.keyManDisabilityInsurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Key Man Disability Insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="deferredCompensation"
                      checked={formData.deferredCompensation}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Deferred Compensation</span>
                  </label>
                </div>
              </div>  
              {/* Privacy Notice */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 italic">
                  * Your information is secure
                </p>
              </div>
            </div>
          </motion.div>

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
              <p className="text-green-600">We'll contact you soon with your business insurance quote.</p>
              <button
                onClick={() => {
                  reset();
                  setFormData({
                    businessName: '',
                    yearsInBusiness: '',
                    legalEntity: '',
                    partnersOwners: '',
                    fullTimeEmployees: '',
                    partTimeEmployees: '',
                    subContractors: '',
                    oneTimeOrSeasonal: '',
                    annualRevenue: '',
                    replaceExistingPolicy: '',
                    businessDescription: '',
                    whenToStart: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    additionalComments: '',
                    generalLiability: false,
                    commercialAuto: false,
                    commercialProperty: false,
                    cyberLiability: false,
                    professionalLiability: false,
                    directorsOfficersLiability: false,
                    businessOwnersPackage: false,
                    workersCompensation: false,
                    commercialCrime: false,
                    groupHealthInsurance: false,
                    groupLifeInsurance: false,
                    groupDisabilityInsurance: false,
                    retirementPlans: false,
                    supplementalPlans: false,
                    keyManLifeInsurance: false,
                    keyManDisabilityInsurance: false,
                    deferredCompensation: false
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
                className={`w-full py-4 px-8 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl border-2 ${
                  submitting
                    ? 'bg-gray-400 cursor-not-allowed border-gray-300'
                    : 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 transform hover:scale-105 hover:shadow-2xl border-amber-500'
                } text-white`}
              >
                {submitting ? '🔄 SUBMITTING...' : '🚀 GET BUSINESS QUOTE'}
              </button>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  )
}

export default BusinessQuoteForm
