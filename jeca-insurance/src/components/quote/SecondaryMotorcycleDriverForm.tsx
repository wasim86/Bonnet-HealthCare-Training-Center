'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, PencilIcon } from '@heroicons/react/24/solid'

interface SecondaryMotorcycleDriverFormProps {
  driverNumber: number
  onSubmit?: (data: any) => void
  onRemove?: () => void
  className?: string
  isSubmitted?: boolean
  isEditing?: boolean
  onEdit?: () => void
  submittedData?: any
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

export default function SecondaryMotorcycleDriverForm({ driverNumber, onSubmit, onRemove, className = '', isSubmitted = false, isEditing = false, onEdit, submittedData }: SecondaryMotorcycleDriverFormProps) {
  const [formData, setFormData] = useState<DriverFormData>({
    name: '',
    gender: '',
    dateOfBirth: '',
    married: '',
    status: ''
  })

  const [errors, setErrors] = useState<Partial<DriverFormData>>({})

  const handleInputChange = (field: keyof DriverFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<DriverFormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Driver name is required'
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
      onSubmit?.(formData)
    }
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

  // If submitted and not editing, show readonly view
  if (isSubmitted && !isEditing) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-green-50 border-2 border-green-200 rounded-lg shadow-lg p-6 ${className}`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl font-bold text-green-800">Additional Driver #{driverNumber} - Submitted</h3>
          </div>
          <div className="flex space-x-3">
            {onEdit && (
              <button
                type="button"
                onClick={onEdit}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <PencilIcon className="h-4 w-4" />
                <span>Edit</span>
              </button>
            )}
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove Driver
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Driver Name</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Gender</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.gender}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Date of Birth</span>
              <p className="text-lg font-semibold text-gray-900">{formatDate(submittedData?.dateOfBirth)}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Marital Status</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.married === 'Yes' ? 'Married' : 'Single'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Employment Status</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.status}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Additional Driver #{driverNumber}</h3>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Remove Driver
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Driver Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Driver Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter driver name"
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
