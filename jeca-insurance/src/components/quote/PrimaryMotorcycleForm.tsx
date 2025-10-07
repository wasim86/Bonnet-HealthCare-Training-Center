'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PrimaryMotorcycleFormProps {
  onSubmit?: (data: any) => void
  className?: string
  initialData?: any
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
  moreThanTwoMotorcycles: string
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
const moreThanTwoMotorcyclesOptions = ['No', 'Yes - 4 Total', 'Yes - 5 Total', 'Yes - 6 Total', 'Yes - 7 Total', 'Yes - 8+ Total']

export default function PrimaryMotorcycleForm({ onSubmit, className = '', initialData }: PrimaryMotorcycleFormProps) {
  const [formData, setFormData] = useState<MotorcycleFormData>({
    year: initialData?.year || '',
    make: initialData?.make || '',
    model: initialData?.model || '',
    driveToWorkSchool: initialData?.driveToWorkSchool || '',
    isLeased: initialData?.isLeased || '',
    workSchoolDistance: initialData?.workSchoolDistance || '',
    collisionDeductible: initialData?.collisionDeductible || '',
    annualMileage: initialData?.annualMileage || '',
    comprehensiveDeduct: initialData?.comprehensiveDeduct || '',
    moreThanTwoMotorcycles: initialData?.moreThanTwoMotorcycles || ''
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
    if (!formData.moreThanTwoMotorcycles) newErrors.moreThanTwoMotorcycles = 'Multiple motorcycles selection is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Motorcycle</h3>
      
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

        {/* More than 2 motorcycles */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have more than 2 motorcycles to insure? <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.moreThanTwoMotorcycles}
            onChange={(e) => handleInputChange('moreThanTwoMotorcycles', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.moreThanTwoMotorcycles ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Choose option</option>
            {moreThanTwoMotorcyclesOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.moreThanTwoMotorcycles && <p className="text-red-500 text-xs mt-1">{errors.moreThanTwoMotorcycles}</p>}
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
