'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useContactUpdateForm } from '@/lib/hooks/useContactUpdateForm'

export default function UpdateContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatChanged: '',
    pleaseExplain: '',
    email: '',
    phoneNumber: '',
    informationSecure: false
  })

  const { submitting, error, success, submitContactUpdate, reset, clearError } = useContactUpdateForm({
    onSuccess: (contactUpdate) => {
      console.log('Contact update submitted successfully:', contactUpdate);
      alert(`Contact information update request submitted successfully! Your update number is ${contactUpdate.updateNumber}. We will process your request within 24 hours.`);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        whatChanged: '',
        pleaseExplain: '',
        email: '',
        phoneNumber: '',
        informationSecure: false
      });
    },
    onError: (errorMessage) => {
      console.error('Contact update submission error:', errorMessage);
    }
  })

  const changeOptions = [
    { value: 'Name', label: 'Name' },
    { value: 'Address', label: 'Address' },
    { value: 'Phone', label: 'Phone' },
    { value: 'Email Address', label: 'Email Address' },
    { value: 'Other', label: 'Other' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const contactUpdateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      changeType: formData.whatChanged,
      changeDescription: formData.pleaseExplain,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      informationSecure: formData.informationSecure
    }

    // Submit the contact update using the hook
    await submitContactUpdate(contactUpdateData)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Update Contact Information
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Keep your contact information up to date to ensure you receive important policy updates and communications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Update Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Request to Update Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please fill out the form below to update your contact information in our system.
          </p>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* What Changed Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                What Changed? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {changeOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="whatChanged"
                      value={option.value}
                      checked={formData.whatChanged === option.value}
                      onChange={handleInputChange}
                      required={index === 0}
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Please Explain */}
            <div>
              <label htmlFor="pleaseExplain" className="block text-sm font-semibold text-gray-700 mb-2">
                Please Explain: <span className="text-red-500">*</span>
              </label>
              <textarea
                id="pleaseExplain"
                name="pleaseExplain"
                value={formData.pleaseExplain}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Please provide details about what information needs to be updated..."
              />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
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
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
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
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? 'SUBMITTING REQUEST...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Processing Time</h4>
              <p className="text-gray-600">Contact information updates are typically processed within 24-48 hours during business days.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Verification Required</h4>
              <p className="text-gray-600">For security purposes, we may contact you to verify the requested changes before updating your information.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
