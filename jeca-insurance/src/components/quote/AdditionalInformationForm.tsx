'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AdditionalInformationFormProps {
  onSubmit?: (data: any) => void
  className?: string
  submitting?: boolean
  canSubmit?: boolean
  showSubmitButton?: boolean
}

interface AdditionalFormData {
  firstName: string
  lastName: string
  address: string
  city: string
  zipcode: string
  state: string
  country: string
  email: string
  phoneNumber: string
  currentInsuranceCompany: string
  continuousCoverage: string
  policyExpiresIn: string
  claimsIn3Years: string
  ticketsIn3Years: string
  coverageDesired: string
  whenToStart: string
  message: string
  informationSecure: boolean
}

interface AdditionalFormErrors {
  firstName?: string
  lastName?: string
  address?: string
  city?: string
  zipcode?: string
  state?: string
  country?: string
  email?: string
  phoneNumber?: string
  currentInsuranceCompany?: string
  continuousCoverage?: string
  policyExpiresIn?: string
  claimsIn3Years?: string
  ticketsIn3Years?: string
  coverageDesired?: string
  whenToStart?: string
  message?: string
  informationSecure?: string
}

const continuousCoverageOptions = [
  '3+ Years',
  '2 Years',
  '1 Year',
  '6 Months',
  'Under 6 months',
  'Not Currently Insured'
]

const policyExpiresInOptions = [
  'Not sure',
  'A Few days',
  '2 weeks',
  '1 Month',
  '2 Months',
  '3 Months',
  '3-6 Months',
  '6+ Months'
]

const claimsIn3YearsOptions = [
  '1',
  '2',
  '3',
  '4+',
  'None'
]

const ticketsIn3YearsOptions = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6+',
  'None'
]

const coverageDesiredOptions = [
  'Standard Coverage',
  'Premium Coverage',
  'State Minimum'
]

export default function AdditionalInformationForm({
  onSubmit,
  className = '',
  submitting = false,
  canSubmit = true,
  showSubmitButton = true
}: AdditionalInformationFormProps) {
  const [formData, setFormData] = useState<AdditionalFormData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    email: '',
    phoneNumber: '',
    currentInsuranceCompany: '',
    continuousCoverage: '',
    policyExpiresIn: '',
    claimsIn3Years: '',
    ticketsIn3Years: '',
    coverageDesired: '',
    whenToStart: '',
    message: '',
    informationSecure: false
  })

  const [errors, setErrors] = useState<AdditionalFormErrors>({})

  const handleInputChange = (field: keyof AdditionalFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: AdditionalFormErrors = {}

    // Required text fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.zipcode.trim()) newErrors.zipcode = 'Zipcode is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'
    if (!formData.whenToStart.trim()) newErrors.whenToStart = 'When to start is required'

    // Required dropdown fields
    if (!formData.continuousCoverage.trim()) newErrors.continuousCoverage = 'Continuous coverage is required'
    if (!formData.policyExpiresIn.trim()) newErrors.policyExpiresIn = 'Policy expires in is required'
    if (!formData.claimsIn3Years.trim()) newErrors.claimsIn3Years = 'Claims in 3 years is required'
    if (!formData.ticketsIn3Years.trim()) newErrors.ticketsIn3Years = 'Tickets in 3 years is required'
    if (!formData.coverageDesired.trim()) newErrors.coverageDesired = 'Coverage desired is required'

    // Required checkbox
    if (!formData.informationSecure) newErrors.informationSecure = 'You must confirm your information is secure'

    // Email validation
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if vehicle and driver data are submitted first
    if (!canSubmit) {
      alert('Please complete and submit the vehicle and driver information first.')
      return
    }

    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  // Auto-submit when form is valid and canSubmit is true
  useEffect(() => {
    if (canSubmit && validateForm() && onSubmit) {
      onSubmit(formData)
    }
  }, [formData, canSubmit, onSubmit])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
          <span className="text-white font-bold text-lg">B</span>
        </div>
        <h3 className="text-2xl font-bold text-blue-600 mb-2">Additional Information</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter first name"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter last name"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address *
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            rows={3}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>

        {/* City and Zipcode Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zipcode *
            </label>
            <input
              type="text"
              value={formData.zipcode}
              onChange={(e) => handleInputChange('zipcode', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.zipcode ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter zipcode"
            />
            {errors.zipcode && <p className="text-red-500 text-xs mt-1">{errors.zipcode}</p>}
          </div>
        </div>

        {/* State and Country Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.state ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter state"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter country"
            />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* Email and Phone Number Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter email address"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Current Insurance Company, Continuous Coverage, and Policy Expires In Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current or Prior Insurance Company
            </label>
            <input
              type="text"
              value={formData.currentInsuranceCompany}
              onChange={(e) => handleInputChange('currentInsuranceCompany', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter insurance company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Continuous Coverage *
            </label>
            <select
              value={formData.continuousCoverage}
              onChange={(e) => handleInputChange('continuousCoverage', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.continuousCoverage ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {continuousCoverageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.continuousCoverage && <p className="text-red-500 text-xs mt-1">{errors.continuousCoverage}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy Expires In *
            </label>
            <select
              value={formData.policyExpiresIn}
              onChange={(e) => handleInputChange('policyExpiresIn', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.policyExpiresIn ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {policyExpiresInOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.policyExpiresIn && <p className="text-red-500 text-xs mt-1">{errors.policyExpiresIn}</p>}
          </div>
        </div>

        {/* Claims, Tickets, and Coverage Desired Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Claims in 3 Years *
            </label>
            <select
              value={formData.claimsIn3Years}
              onChange={(e) => handleInputChange('claimsIn3Years', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.claimsIn3Years ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {claimsIn3YearsOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.claimsIn3Years && <p className="text-red-500 text-xs mt-1">{errors.claimsIn3Years}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tickets in 3 Years *
            </label>
            <select
              value={formData.ticketsIn3Years}
              onChange={(e) => handleInputChange('ticketsIn3Years', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.ticketsIn3Years ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {ticketsIn3YearsOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.ticketsIn3Years && <p className="text-red-500 text-xs mt-1">{errors.ticketsIn3Years}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Coverage Desired *
            </label>
            <select
              value={formData.coverageDesired}
              onChange={(e) => handleInputChange('coverageDesired', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.coverageDesired ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {coverageDesiredOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.coverageDesired && <p className="text-red-500 text-xs mt-1">{errors.coverageDesired}</p>}
          </div>
        </div>

        {/* When would you like this policy to start */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When would you like this policy to start? *
          </label>
          <input
            type="text"
            value={formData.whenToStart}
            onChange={(e) => handleInputChange('whenToStart', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.whenToStart ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter when you'd like to start"
          />
          {errors.whenToStart && <p className="text-red-500 text-xs mt-1">{errors.whenToStart}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any additional information or questions"
          />
        </div>

        {/* Information Secure Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="informationSecure"
            checked={formData.informationSecure}
            onChange={(e) => handleInputChange('informationSecure', e.target.checked)}
            className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 rounded ${
              errors.informationSecure ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <div className="flex-1">
            <label htmlFor="informationSecure" className="text-sm text-gray-700">
              Your information is secure *
            </label>
            {errors.informationSecure && <p className="text-red-500 text-xs mt-1">{errors.informationSecure}</p>}
          </div>
        </div>

        {/* Submit Button - only show if showSubmitButton is true */}
        {showSubmitButton && (
          <>
            <button
              type="submit"
              disabled={submitting || !canSubmit}
              className={`w-full py-3 px-4 rounded-md transition-colors font-semibold text-lg ${
                submitting || !canSubmit
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-900'
              }`}
            >
              {submitting ? 'Submitting Quote...' : 'GET QUOTE'}
            </button>

            {/* Helper text when can't submit */}
            {!canSubmit && (
              <p className="text-sm text-gray-600 text-center mt-2">
                Please complete and submit the vehicle and driver information above first.
              </p>
            )}
          </>
        )}
      </form>
    </motion.div>
  )
}
