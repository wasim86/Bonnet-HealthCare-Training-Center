'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePolicyReviewForm } from '@/lib/hooks/usePolicyReviewForm'

export default function PolicyReviewPage() {
  const [formData, setFormData] = useState({
    reviewMethod: 'Telephone',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    discussionTopics: '',
    informationSecure: false
  })

  const { submitting, error, success, submitPolicyReview, reset, clearError } = usePolicyReviewForm({
    onSuccess: (policyReview) => {
      console.log('Policy review submitted successfully:', policyReview);
      alert(`Policy review request submitted successfully! Your review number is ${policyReview.reviewNumber}. We will contact you within 24 hours.`);
      // Reset form after successful submission
      setFormData({
        reviewMethod: 'Telephone',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        discussionTopics: '',
        informationSecure: false
      });
    },
    onError: (errorMessage) => {
      console.error('Policy review submission error:', errorMessage);
    }
  })

  const reviewMethods = [
    'Telephone',
    'Face-to-face',
    'Other'
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
    const policyReviewData = {
      reviewMethod: formData.reviewMethod,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      discussionTopics: formData.discussionTopics || undefined,
      informationSecure: formData.informationSecure
    }

    // Submit the policy review using the hook
    await submitPolicyReview(policyReviewData)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Policy Review
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Let our experts review your current insurance policies to ensure you have the best coverage at the best price.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policy Review Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Initial Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How would you like to review your insurance?
          </h2>
          <select
            name="reviewMethod"
            value={formData.reviewMethod}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
          >
            {reviewMethods.map((method) => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </motion.div>

        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Request a Free Policy Review
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our insurance experts will contact you to schedule your complimentary policy review.
          </p>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
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

            {/* What would you like to discuss */}
            <div>
              <label htmlFor="discussionTopics" className="block text-sm font-semibold text-gray-700 mb-2">
                What would you like to discuss?
              </label>
              <textarea
                id="discussionTopics"
                name="discussionTopics"
                value={formData.discussionTopics}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your insurance needs, concerns, or questions..."
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
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

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? 'SUBMITTING REQUEST...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Get a Policy Review?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Save Money</h4>
              <p className="text-gray-600">Identify potential savings and ensure you're not overpaying for coverage.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Better Coverage</h4>
              <p className="text-gray-600">Discover gaps in your current coverage and find better protection options.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Advice</h4>
              <p className="text-gray-600">Get professional recommendations tailored to your specific needs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
