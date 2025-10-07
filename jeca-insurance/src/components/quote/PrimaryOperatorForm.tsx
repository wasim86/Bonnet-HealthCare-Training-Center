'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, PencilIcon } from '@heroicons/react/24/outline'

interface PrimaryOperatorFormProps {
  onSubmit?: (data: any) => void
  className?: string
  isSubmitted?: boolean
  isEditing?: boolean
  onEdit?: () => void
  submittedData?: any
}

interface OperatorFormData {
  name: string
  gender: string
  dateOfBirth: string
  married: string
  accidentsTickets: string
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

const accidentsTicketsOptions = [
  '0',
  '1',
  '2',
  '3',
  '4+'
]

export default function PrimaryOperatorForm({
  onSubmit,
  className = '',
  isSubmitted = false,
  isEditing = false,
  onEdit,
  submittedData
}: PrimaryOperatorFormProps) {
  const [formData, setFormData] = useState<OperatorFormData>({
    name: '',
    gender: '',
    dateOfBirth: '',
    married: '',
    accidentsTickets: ''
  })

  const [errors, setErrors] = useState<Partial<OperatorFormData>>({})

  const handleInputChange = (field: keyof OperatorFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<OperatorFormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Primary operator name is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.married) newErrors.married = 'Marital status is required'
    if (!formData.accidentsTickets) newErrors.accidentsTickets = 'Accidents/Tickets information is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  // Show readonly display when submitted and not editing
  if (isSubmitted && !isEditing && submittedData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 ${className}`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Primary Operator - Submitted</h3>
          </div>
          <button
            onClick={onEdit}
            className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium text-gray-500">Operator Name</div>
            <p className="text-lg text-gray-900">{submittedData.name}</p>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Gender</div>
            <p className="text-lg text-gray-900">{submittedData.gender}</p>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Date of Birth</div>
            <p className="text-lg text-gray-900">{new Date(submittedData.dateOfBirth).toLocaleDateString()}</p>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Marital Status</div>
            <p className="text-lg text-gray-900">{submittedData.married}</p>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Accidents/Tickets in 3 Years</div>
            <p className="text-lg text-gray-900">{submittedData.accidentsTickets}</p>
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
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Operator</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Primary Operator Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Operator Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter primary operator name"
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

        {/* Date of Birth and Accidents/Tickets Row */}
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
              Accidents/Tickets in the past 3 years <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.accidentsTickets}
              onChange={(e) => handleInputChange('accidentsTickets', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.accidentsTickets ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select number</option>
              {accidentsTicketsOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.accidentsTickets && <p className="text-red-500 text-xs mt-1">{errors.accidentsTickets}</p>}
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
