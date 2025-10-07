'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PencilIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface PrimaryAutoDriverFormProps {
  onSubmit?: (data: any) => void
  className?: string
  initialData?: DriverFormData
  isReadOnly?: boolean
  onEdit?: () => void
}

interface DriverFormData {
  name: string
  gender: string
  dateOfBirth: string
  married: string
  status: string
}

const genderOptions = [
  'Male',
  'Female',
  'N/A'
]

const marriedOptions = [
  'Yes',
  'No'
]

const statusOptions = [
  'Employed',
  'Student',
  'Retired',
  'Other'
]

export default function PrimaryAutoDriverForm({
  onSubmit,
  className = '',
  initialData,
  isReadOnly = false,
  onEdit
}: PrimaryAutoDriverFormProps) {
  const [formData, setFormData] = useState<DriverFormData>({
    name: '',
    gender: '',
    dateOfBirth: '',
    married: '',
    status: ''
  })

  const [errors, setErrors] = useState<Partial<DriverFormData>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize form data with initial data if provided
  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
      setIsSubmitted(true)
    }
  }, [initialData])

  const handleInputChange = (field: keyof DriverFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<DriverFormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Primary driver name is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.married) newErrors.married = 'Marital status is required'
    if (!formData.status) newErrors.status = 'Status is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      onSubmit?.(formData)
    }
  }

  const handleEdit = () => {
    setIsSubmitted(false)
    onEdit?.()
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Readonly display component
  const ReadOnlyDisplay = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-green-50 border border-green-200 rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
          <h3 className="text-2xl font-bold text-gray-900">Primary Driver - Submitted</h3>
        </div>
        <button
          onClick={handleEdit}
          className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors font-medium"
        >
          <PencilIcon className="h-4 w-4 mr-2" />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <label className="block text-sm font-medium text-gray-500 mb-1">Driver Name</label>
          <p className="text-lg font-semibold text-gray-900">{formData.name}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <label className="block text-sm font-medium text-gray-500 mb-1">Gender</label>
          <p className="text-lg font-semibold text-gray-900">{formData.gender}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <label className="block text-sm font-medium text-gray-500 mb-1">Date of Birth</label>
          <p className="text-lg font-semibold text-gray-900">{formatDate(formData.dateOfBirth)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <label className="block text-sm font-medium text-gray-500 mb-1">Marital Status</label>
          <p className="text-lg font-semibold text-gray-900">{formData.married === 'Yes' ? 'Married' : 'Single'}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border md:col-span-2">
          <label className="block text-sm font-medium text-gray-500 mb-1">Employment Status</label>
          <p className="text-lg font-semibold text-gray-900">{formData.status}</p>
        </div>
      </div>
    </motion.div>
  )

  // Show readonly view if submitted or explicitly set to readonly
  if (isSubmitted || isReadOnly) {
    return <ReadOnlyDisplay />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Driver</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Primary Driver Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Driver Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter primary driver name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Gender and Married Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.gender ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Married? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.married}
              onChange={(e) => handleInputChange('married', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.married ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select marital status</option>
              {marriedOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.married && <p className="text-red-500 text-xs mt-1">{errors.married}</p>}
          </div>
        </div>

        {/* Date of Birth and Status Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.status ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select status</option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
  )
}
