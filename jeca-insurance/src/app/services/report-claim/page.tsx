'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useClaimForm } from '@/lib/hooks/useClaimForm'

export default function ReportClaimPage() {
  const [formData, setFormData] = useState({
    insuranceType: '',
    whatHappened: '',
    insuranceCarrier: '',
    policyNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    additionalComments: '',
    informationSecure: false
  })

  // Use the claim form hook for API integration
  const { submitting, error, success, submitClaim, reset, clearError } = useClaimForm({
    onSuccess: (claim) => {
      console.log('Claim submitted successfully:', claim);
      alert(`Claim submitted successfully! Your claim number is ${claim.claimNumber}. We will contact you within 24 hours.`);
      // Reset form after successful submission
      setFormData({
        insuranceType: '',
        whatHappened: '',
        insuranceCarrier: '',
        policyNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        additionalComments: '',
        informationSecure: false
      });
    },
    onError: (error) => {
      console.error('Claim submission failed:', error);
      alert(`Error submitting claim: ${error}`);
    }
  })

  const insuranceTypes = [
    'Auto Insurance',
    'Home Insurance',
    'Business Insurance',
    'Flood Insurance',
    'Condo Insurance',
    'Boat Insurance',
    'Life Insurance',
    'Umbrella Insurance',
    'Renters Insurance',
    'Disability Insurance',
    'Motorcycle Insurance'
  ]

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

    // Clear any previous errors
    clearError()

    // Map form data to API request format
    const claimData = {
      claimType: formData.insuranceType,
      incidentDescription: formData.whatHappened,
      insuranceCarrier: formData.insuranceCarrier,
      policyNumber: formData.policyNumber,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      additionalComments: formData.additionalComments || undefined,
      informationSecure: formData.informationSecure
    }

    // Submit the claim using the hook
    await submitClaim(claimData)
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Report A Claim
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We're here to help you through the claims process. Report your claim 24/7 and get the support you need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-100 border-l-4 border-red-500 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <strong>Emergency:</strong> If this is a life-threatening emergency, please call 911 immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Reporting Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Enter Your Information Below:
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide the following information to help us process your claim quickly and efficiently.
          </p>
        </motion.div>

        {/* Claim Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Type of Insurance Claim */}
            <div>
              <label htmlFor="insuranceType" className="block text-sm font-semibold text-gray-700 mb-2">
                Type of Insurance Claim: <span className="text-red-500">*</span>
              </label>
              <select
                id="insuranceType"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Choose</option>
                {insuranceTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* What Happened */}
            <div>
              <label htmlFor="whatHappened" className="block text-sm font-semibold text-gray-700 mb-2">
                What Happened? (Please provide as much detail as possible) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whatHappened"
                name="whatHappened"
                value={formData.whatHappened}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Please describe the incident in detail..."
              />
            </div>

            {/* Insurance Carrier and Policy Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="insuranceCarrier" className="block text-sm font-semibold text-gray-700 mb-2">
                  Insurance Carrier <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="insuranceCarrier"
                  name="insuranceCarrier"
                  value={formData.insuranceCarrier}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your insurance carrier"
                />
              </div>
              <div>
                <label htmlFor="policyNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Policy Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your policy number"
                />
              </div>
            </div>

            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email and Phone Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
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
                required
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="informationSecure" className="text-sm text-gray-700">
                Your information is secure <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? 'SUBMITTING REQUEST...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long do I have to report a claim?</h3>
              <p className="text-gray-600">You should report your claim as soon as possible, ideally within 24 hours of the incident.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens after I report my claim?</h3>
              <p className="text-gray-600">A claims adjuster will be assigned to your case and will contact you within 24 hours to begin the process.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I track my claim status?</h3>
              <p className="text-gray-600">Yes, you can track your claim status online through our customer portal or mobile app.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need to get multiple repair estimates?</h3>
              <p className="text-gray-600">We can help arrange estimates, but you're welcome to get your own. We work with a network of preferred providers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
