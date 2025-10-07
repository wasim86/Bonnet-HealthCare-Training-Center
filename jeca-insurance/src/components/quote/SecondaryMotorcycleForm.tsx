'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, PencilIcon } from '@heroicons/react/24/solid'

interface SecondaryMotorcycleFormProps {
  motorcycleNumber: number
  onSubmit?: (data: any) => void
  onRemove?: () => void
  className?: string
  isSubmitted?: boolean
  isEditing?: boolean
  onEdit?: () => void
  submittedData?: any
}

interface MotorcycleFormData {
  year: string
  make: string
  model: string
  driveToWorkSchool: string
  isLeased: string
  workSchoolDistance: string
  collisionDeductible: string
  annualMileage: string
  comprehensiveDeduct: string
}

const driveToWorkSchoolOptions = ['No', 'Yes']
const isLeasedOptions = ['Yes', 'No']
const workSchoolDistanceOptions = [
  'Less than 5 Miles',
  '5 Miles',
  '10 Miles',
  '15 Miles',
  '20 Miles',
  '30 Miles',
  'Over 30 Miles',
  'N/A'
]
const collisionDeductibleOptions = ['No Coverage', '$100', '$250', '$500', '$1000']
const annualMileageOptions = ['5,000', '7,500', '10,000', '12,500', '15,000', '20,000', '30,000', '40,000', '50,000+']
const comprehensiveDeductOptions = ['No Coverage', '$100', '$250', '$500', '$1000']

export default function SecondaryMotorcycleForm({ motorcycleNumber, onSubmit, onRemove, className = '', isSubmitted = false, isEditing = false, onEdit, submittedData }: SecondaryMotorcycleFormProps) {
  const [formData, setFormData] = useState<MotorcycleFormData>({
    year: '',
    make: '',
    model: '',
    driveToWorkSchool: '',
    isLeased: '',
    workSchoolDistance: '',
    collisionDeductible: '',
    annualMileage: '',
    comprehensiveDeduct: ''
  })

  const [errors, setErrors] = useState<Partial<MotorcycleFormData>>({})

  const handleInputChange = (field: keyof MotorcycleFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<MotorcycleFormData> = {}

    if (!formData.year.trim()) newErrors.year = 'Year is required'
    if (!formData.make.trim()) newErrors.make = 'Make is required'
    if (!formData.model.trim()) newErrors.model = 'Model is required'
    if (!formData.driveToWorkSchool) newErrors.driveToWorkSchool = 'Drive to Work/School selection is required'
    if (!formData.isLeased) newErrors.isLeased = 'Lease status is required'
    if (!formData.workSchoolDistance) newErrors.workSchoolDistance = 'Work/School distance is required'
    if (!formData.collisionDeductible) newErrors.collisionDeductible = 'Collision deductible is required'
    if (!formData.annualMileage) newErrors.annualMileage = 'Annual mileage is required'
    if (!formData.comprehensiveDeduct) newErrors.comprehensiveDeduct = 'Comprehensive deductible is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit?.(formData)
    }
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
            <h3 className="text-2xl font-bold text-green-800">Motorcycle #{motorcycleNumber} - Submitted</h3>
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
                Remove Motorcycle
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Year</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.year}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Make</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.make}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Model</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.model}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Drive to Work/School</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.driveToWorkSchool}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Is Leased</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.isLeased}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-600">Work/School Distance</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.workSchoolDistance}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Collision Deductible</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.collisionDeductible}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Annual Mileage</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.annualMileage}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Comprehensive Deductible</span>
              <p className="text-lg font-semibold text-gray-900">{submittedData?.comprehensiveDeduct}</p>
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
        <h3 className="text-2xl font-bold text-gray-900">Motorcycle #{motorcycleNumber}</h3>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Remove Motorcycle
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Year, Make, Model Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.year ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter year"
            />
            {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Make <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.make}
              onChange={(e) => handleInputChange('make', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.make ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter make"
            />
            {errors.make && <p className="text-red-500 text-xs mt-1">{errors.make}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.model ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter model"
            />
            {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
          </div>
        </div>

        {/* Drive to Work/School and Is Leased Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Drive to Work/School? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.driveToWorkSchool}
              onChange={(e) => handleInputChange('driveToWorkSchool', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.driveToWorkSchool ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {driveToWorkSchoolOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.driveToWorkSchool && <p className="text-red-500 text-xs mt-1">{errors.driveToWorkSchool}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Is Motorcycle Leased? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.isLeased}
              onChange={(e) => handleInputChange('isLeased', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.isLeased ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {isLeasedOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.isLeased && <p className="text-red-500 text-xs mt-1">{errors.isLeased}</p>}
          </div>
        </div>

        {/* Work/School Distance and Collision Deductible Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work/School Distance <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.workSchoolDistance}
              onChange={(e) => handleInputChange('workSchoolDistance', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.workSchoolDistance ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {workSchoolDistanceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.workSchoolDistance && <p className="text-red-500 text-xs mt-1">{errors.workSchoolDistance}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Collision Deductible <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.collisionDeductible}
              onChange={(e) => handleInputChange('collisionDeductible', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.collisionDeductible ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {collisionDeductibleOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.collisionDeductible && <p className="text-red-500 text-xs mt-1">{errors.collisionDeductible}</p>}
          </div>
        </div>

        {/* Annual Mileage and Comprehensive Deduct Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Mileage <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.annualMileage}
              onChange={(e) => handleInputChange('annualMileage', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.annualMileage ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {annualMileageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.annualMileage && <p className="text-red-500 text-xs mt-1">{errors.annualMileage}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comprehensive Deduct <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.comprehensiveDeduct}
              onChange={(e) => handleInputChange('comprehensiveDeduct', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.comprehensiveDeduct ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose option</option>
              {comprehensiveDeductOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.comprehensiveDeduct && <p className="text-red-500 text-xs mt-1">{errors.comprehensiveDeduct}</p>}
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
