'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import RentersAdditionalInformationForm from './RentersAdditionalInformationForm'
import { useRentersQuoteForm } from '../../lib/hooks/useQuoteForm'
import { RentersQuote } from '../../lib/types'

interface RentersQuoteFormData {
  // Property Information
  typeOfHome: string
  estimatedSquareFootage: string
  totalNumberOfRooms: string
  deadBolts: boolean
  fireExtinguishers: boolean
  trampoline: boolean
  coveredDeckPatio: boolean
  swimmingPool: boolean
  dogBreeds: string
  // Policy Information
  replacementValue: string
  personalLiabilityCoverage: string
  desiredDeductible: string
  creditRating: string
  reportedClaims: string
  replaceExistingPolicy: string
  whenToStart: string
}

const RentersQuoteForm: React.FC = () => {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useRentersQuoteForm({
    onSuccess: (quote) => {
      console.log('Renters quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Renters quote submission failed:', error);
    }
  });

  const [formData, setFormData] = useState<RentersQuoteFormData>({
    typeOfHome: '',
    estimatedSquareFootage: '',
    totalNumberOfRooms: '',
    deadBolts: false,
    fireExtinguishers: false,
    trampoline: false,
    coveredDeckPatio: false,
    swimmingPool: false,
    dogBreeds: '',
    replacementValue: '',
    personalLiabilityCoverage: '',
    desiredDeductible: '',
    creditRating: '',
    reportedClaims: '',
    replaceExistingPolicy: '',
    whenToStart: ''
  })

  const [mainFormCompleted, setMainFormCompleted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleMainFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMainFormCompleted(true)
  }

  const handleAdditionalInformationSubmit = async (data: any) => {
    if (!data) {
      console.error('Missing additional information data');
      return;
    }

    // Prepare the renters quote data
    const rentersQuoteData: RentersQuote = {
      // Personal information from additional information form
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phoneNumber: data.phoneNumber || '',
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country || 'United States',

      // Insurance information
      currentInsuranceCompany: data.currentInsuranceCompany,
      continuousCoverage: data.continuousCoverage,
      policyExpiresIn: data.policyExpiresIn,
      claimsIn3Years: data.claimsIn3Years,
      ticketsIn3Years: data.ticketsIn3Years,
      coverageDesired: data.coverageDesired,
      whenToStart: data.whenToStart,
      additionalComments: data.additionalComments,
      informationSecure: data.informationSecure || false,

      // Renters-specific information from main form
      typeOfHome: formData.typeOfHome,
      estimatedSquareFootage: formData.estimatedSquareFootage,
      totalNumberOfRooms: formData.totalNumberOfRooms,
      deadBolts: formData.deadBolts,
      fireExtinguishers: formData.fireExtinguishers,
      trampoline: formData.trampoline,
      coveredDeckPatio: formData.coveredDeckPatio,
      swimmingPool: formData.swimmingPool,
      dogBreeds: formData.dogBreeds,
      replacementValue: formData.replacementValue,
      personalLiabilityCoverage: formData.personalLiabilityCoverage,
      desiredDeductible: formData.desiredDeductible,
      creditRating: formData.creditRating,
      reportedClaims: formData.reportedClaims,
      replaceExistingPolicy: formData.replaceExistingPolicy,
    };

    console.log('Submitting Renters Quote Data:', rentersQuoteData);

    // Submit to API
    await submitQuote(rentersQuoteData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-900 via-blue-700 to-indigo-600 text-white py-24 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-purple-300 rounded-full opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8"
          >
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Renters Insurance Quote
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed"
          >
            Affordable protection for your personal belongings and liability coverage as a tenant
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium">Personal Property</span>
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium">Liability Coverage</span>
            <span className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full font-medium">Additional Living Expenses</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleMainFormSubmit} className="space-y-8">
          {/* Property Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-blue-600 rounded-full p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Property Information</h3>
            </div>

            {/* Type of Home */}
            <div className="mb-6">
              <label htmlFor="typeOfHome" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Home *
              </label>
              <select
                id="typeOfHome"
                name="typeOfHome"
                value={formData.typeOfHome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="apartment">Apartment</option>
                <option value="single-family-home">Single Family Home</option>
                <option value="duplex">Duplex</option>
                <option value="townhome">Townhome</option>
                <option value="mobile-home">Mobile Home</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Estimated Square Footage and Total Number of Rooms Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="estimatedSquareFootage" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Square Footage *
                </label>
                <select
                  id="estimatedSquareFootage"
                  name="estimatedSquareFootage"
                  value={formData.estimatedSquareFootage}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="under-500">Under 500 sq ft</option>
                  <option value="500-750">500 - 750 sq ft</option>
                  <option value="750-1000">750 - 1,000 sq ft</option>
                  <option value="1000-1250">1,000 - 1,250 sq ft</option>
                  <option value="1250-1500">1,250 - 1,500 sq ft</option>
                  <option value="1500-2000">1,500 - 2,000 sq ft</option>
                  <option value="2000+">2,000+ sq ft</option>
                </select>
              </div>

              <div>
                <label htmlFor="totalNumberOfRooms" className="block text-sm font-medium text-gray-700 mb-2">
                  Total Number of Rooms in your dwelling excluding basement and bathrooms *
                </label>
                <select
                  id="totalNumberOfRooms"
                  name="totalNumberOfRooms"
                  value={formData.totalNumberOfRooms}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
            </div>

            {/* Additional Property Features */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select any additional property features that apply:
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="deadBolts"
                    name="deadBolts"
                    checked={formData.deadBolts}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="deadBolts" className="ml-3 text-sm text-gray-700">
                    Dead Bolts
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fireExtinguishers"
                    name="fireExtinguishers"
                    checked={formData.fireExtinguishers}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="fireExtinguishers" className="ml-3 text-sm text-gray-700">
                    Fire Extinguishers
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="trampoline"
                    name="trampoline"
                    checked={formData.trampoline}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="trampoline" className="ml-3 text-sm text-gray-700">
                    Trampoline
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="coveredDeckPatio"
                    name="coveredDeckPatio"
                    checked={formData.coveredDeckPatio}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="coveredDeckPatio" className="ml-3 text-sm text-gray-700">
                    Covered Deck/Patio
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="swimmingPool"
                    name="swimmingPool"
                    checked={formData.swimmingPool}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="swimmingPool" className="ml-3 text-sm text-gray-700">
                    Swimming Pool
                  </label>
                </div>
              </div>
            </div>

            {/* Dog Breeds Question */}
            <div className="mb-6">
              <label htmlFor="dogBreeds" className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any of the following breeds of dogs: Chow, Doberman, German Shepherd, Pit Bull, Rottweiler, Wolf Hybrid, or a mix of these? *
              </label>
              <select
                id="dogBreeds"
                name="dogBreeds"
                value={formData.dogBreeds}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </motion.div>

          {/* Policy Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-blue-600 rounded-full p-2">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Policy Information</h3>
            </div>

            {/* Replacement value of all possessions */}
            <div className="mb-6">
              <label htmlFor="replacementValue" className="block text-sm font-medium text-gray-700 mb-2">
                Replacement value of all possessions *
              </label>
              <select
                id="replacementValue"
                name="replacementValue"
                value={formData.replacementValue}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="15000">$15,000</option>
                <option value="30000">$30,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000</option>
                <option value="250000">$250,000+</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Personal Liability Coverage Desired */}
            <div className="mb-6">
              <label htmlFor="personalLiabilityCoverage" className="block text-sm font-medium text-gray-700 mb-2">
                Personal Liability Coverage Desired *
              </label>
              <select
                id="personalLiabilityCoverage"
                name="personalLiabilityCoverage"
                value={formData.personalLiabilityCoverage}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="100000">$100,000</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Desired Deductible and Credit Rating Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="desiredDeductible" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Deductible *
                </label>
                <select
                  id="desiredDeductible"
                  name="desiredDeductible"
                  value={formData.desiredDeductible}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="250">$250</option>
                  <option value="500">$500</option>
                  <option value="1000">$1000</option>
                  <option value="2000">$2000</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="creditRating" className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Rating *
                </label>
                <select
                  id="creditRating"
                  name="creditRating"
                  value={formData.creditRating}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Choose option</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="poor">Poor</option>
                  <option value="unsure">Unsure</option>
                </select>
              </div>
            </div>

            {/* Have you reported any claims or losses */}
            <div className="mb-6">
              <label htmlFor="reportedClaims" className="block text-sm font-medium text-gray-700 mb-2">
                Have you reported any claims or losses to your insurance company within the past 5 years? *
              </label>
              <select
                id="reportedClaims"
                name="reportedClaims"
                value={formData.reportedClaims}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Will this insurance replace an existing policy */}
            <div className="mb-6">
              <label htmlFor="replaceExistingPolicy" className="block text-sm font-medium text-gray-700 mb-2">
                Will this insurance replace an existing policy? *
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
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
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
          </motion.div>

          {/* Submit Button for Property + Policy Information */}
          {!mainFormCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 w-full max-w-md"
              >
                Continue to Additional Information
              </button>
            </motion.div>
          )}
        </form>

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
            <p className="text-green-600">We'll contact you soon with your renters insurance quote.</p>
            <button
              onClick={() => {
                reset();
                setMainFormCompleted(false);
                setFormData({
                  typeOfHome: '',
                  estimatedSquareFootage: '',
                  totalNumberOfRooms: '',
                  deadBolts: false,
                  fireExtinguishers: false,
                  trampoline: false,
                  coveredDeckPatio: false,
                  swimmingPool: false,
                  dogBreeds: '',
                  replacementValue: '',
                  personalLiabilityCoverage: '',
                  desiredDeductible: '',
                  creditRating: '',
                  reportedClaims: '',
                  replaceExistingPolicy: '',
                  whenToStart: ''
                });
              }}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Another Quote
            </button>
          </motion.div>
        )}

        {/* Additional Information Section - Only show after main form is completed */}
        {mainFormCompleted && !success && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8"
          >
            <RentersAdditionalInformationForm
              onSubmit={handleAdditionalInformationSubmit}
              isSubmitting={submitting}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default RentersQuoteForm
