'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, PencilIcon } from '@heroicons/react/24/outline'

interface PrimaryBoatFormProps {
  onSubmit?: (data: any) => void
  className?: string
  isSubmitted?: boolean
  isEditing?: boolean
  onEdit?: () => void
  submittedData?: any
}

interface BoatFormData {
  year: string
  manufacturer: string
  model: string
  watercraftType: string
  length: string
  boatUse: string
  marketValue: string
  numberOfEngines: string
  totalHorsepower: string
  engineType: string
  deductible: string
  hullMaterial: string
  trailerCoverage: string
  storageLocation: string
  structuralModifications: string
}

const watercraftTypes = [
  'Runaboat',
  'Bass Boat',
  'Cabin Cruiser',
  'Pontoon',
  'Sail Boat - Single-Hull',
  'Sail Boat - Multi-Hull',
  'Houseboat',
  'Inflatable'
]

const boatUses = [
  'Pleasure Use',
  'Racing/Speed Contests',
  'Business/Commercial Use',
  'Rented or Leased to Others',
  'Residence'
]

const numberOfEnginesOptions = ['0', '1', '2', '3', '4+']

const engineTypes = [
  'Outboard',
  'Inboard',
  'Stern drive(I/O)',
  'Waterjet Pump',
  'Others'
]

const deductibleOptions = [
  'No Coverage',
  '$500',
  '$1000',
  'other'
]

const hullMaterials = [
  'Fiberglass',
  'Aluminum',
  'Rigid Hull Inflatable',
  'Inflatable',
  'Roplene',
  'Wood',
  'Steel'
]

const trailerCoverageOptions = [
  'Not Desired',
  '$1,000',
  '$2,000',
  '$3,000',
  '$4,000',
  '$5,000',
  '$7,500',
  '$10,000+'
]

const storageLocations = [
  'Home',
  'Marina',
  'Storage Facility'
]

const structuralModificationOptions = [
  'Yes',
  'No'
]

export default function PrimaryBoatForm({
  onSubmit,
  className = '',
  isSubmitted = false,
  isEditing = false,
  onEdit,
  submittedData
}: PrimaryBoatFormProps) {
  const [formData, setFormData] = useState<BoatFormData>({
    year: '',
    manufacturer: '',
    model: '',
    watercraftType: '',
    length: '',
    boatUse: '',
    marketValue: '',
    numberOfEngines: '',
    totalHorsepower: '',
    engineType: '',
    deductible: '',
    hullMaterial: '',
    trailerCoverage: '',
    storageLocation: '',
    structuralModifications: ''
  })

  const [errors, setErrors] = useState<Partial<BoatFormData>>({})

  const handleInputChange = (field: keyof BoatFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<BoatFormData> = {}

    if (!formData.year.trim()) newErrors.year = 'Year is required'
    if (!formData.manufacturer.trim()) newErrors.manufacturer = 'Manufacturer is required'
    if (!formData.model.trim()) newErrors.model = 'Model is required'
    if (!formData.watercraftType) newErrors.watercraftType = 'Watercraft type is required'
    if (!formData.length.trim()) newErrors.length = 'Length is required'
    if (!formData.boatUse) newErrors.boatUse = 'Boat use is required'
    if (!formData.marketValue.trim()) newErrors.marketValue = 'Market value is required'
    if (!formData.numberOfEngines) newErrors.numberOfEngines = 'Number of engines is required'
    if (!formData.totalHorsepower.trim()) newErrors.totalHorsepower = 'Total horsepower is required'
    if (!formData.engineType) newErrors.engineType = 'Engine type is required'
    if (!formData.deductible) newErrors.deductible = 'Deductible is required'
    if (!formData.hullMaterial) newErrors.hullMaterial = 'Hull material is required'
    if (!formData.trailerCoverage) newErrors.trailerCoverage = 'Trailer coverage is required'
    if (!formData.storageLocation) newErrors.storageLocation = 'Storage location is required'
    if (!formData.structuralModifications) newErrors.structuralModifications = 'This field is required'

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
            <h3 className="text-2xl font-bold text-green-800">Primary Boat - Submitted</h3>
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
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Year</div>
              <p className="text-lg text-gray-900">{submittedData.year}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Manufacturer</div>
              <p className="text-lg text-gray-900">{submittedData.manufacturer}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Model</div>
              <p className="text-lg text-gray-900">{submittedData.model}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Watercraft Type</div>
              <p className="text-lg text-gray-900">{submittedData.watercraftType}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Length</div>
              <p className="text-lg text-gray-900">{submittedData.length}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Boat Use</div>
              <p className="text-lg text-gray-900">{submittedData.boatUse}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Market Value</div>
              <p className="text-lg text-gray-900">{submittedData.marketValue}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Number of Engines</div>
              <p className="text-lg text-gray-900">{submittedData.numberOfEngines}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Total Horsepower</div>
              <p className="text-lg text-gray-900">{submittedData.totalHorsepower}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Engine Type</div>
              <p className="text-lg text-gray-900">{submittedData.engineType}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Deductible</div>
              <p className="text-lg text-gray-900">{submittedData.deductible}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Hull Material</div>
              <p className="text-lg text-gray-900">{submittedData.hullMaterial}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Trailer Coverage</div>
              <p className="text-lg text-gray-900">{submittedData.trailerCoverage}</p>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Storage Location</div>
              <p className="text-lg text-gray-900">{submittedData.storageLocation}</p>
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
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Boat</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Year, Manufacturer, Model Row */}
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
              Manufacturer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.manufacturer}
              onChange={(e) => handleInputChange('manufacturer', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.manufacturer ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter manufacturer"
            />
            {errors.manufacturer && <p className="text-red-500 text-xs mt-1">{errors.manufacturer}</p>}
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

        {/* Watercraft Type and Length Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Watercraft Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.watercraftType}
              onChange={(e) => handleInputChange('watercraftType', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.watercraftType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select watercraft type</option>
              {watercraftTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.watercraftType && <p className="text-red-500 text-xs mt-1">{errors.watercraftType}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Length <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.length}
              onChange={(e) => handleInputChange('length', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.length ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter length (ft)"
            />
            {errors.length && <p className="text-red-500 text-xs mt-1">{errors.length}</p>}
          </div>
        </div>

        {/* Boat Use and Market Value Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Boat Use? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.boatUse}
              onChange={(e) => handleInputChange('boatUse', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.boatUse ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select boat use</option>
              {boatUses.map((use) => (
                <option key={use} value={use}>{use}</option>
              ))}
            </select>
            {errors.boatUse && <p className="text-red-500 text-xs mt-1">{errors.boatUse}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Market Value <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.marketValue}
              onChange={(e) => handleInputChange('marketValue', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.marketValue ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter market value"
            />
            {errors.marketValue && <p className="text-red-500 text-xs mt-1">{errors.marketValue}</p>}
          </div>
        </div>

        {/* Number of Engines and Total Horsepower Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Engines <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.numberOfEngines}
              onChange={(e) => handleInputChange('numberOfEngines', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.numberOfEngines ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select number of engines</option>
              {numberOfEnginesOptions.map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            {errors.numberOfEngines && <p className="text-red-500 text-xs mt-1">{errors.numberOfEngines}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Horsepower <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.totalHorsepower}
              onChange={(e) => handleInputChange('totalHorsepower', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.totalHorsepower ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter total horsepower"
            />
            {errors.totalHorsepower && <p className="text-red-500 text-xs mt-1">{errors.totalHorsepower}</p>}
          </div>
        </div>

        {/* Engine Type and Deductible Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Engine Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.engineType}
              onChange={(e) => handleInputChange('engineType', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.engineType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select engine type</option>
              {engineTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.engineType && <p className="text-red-500 text-xs mt-1">{errors.engineType}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deductible <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.deductible}
              onChange={(e) => handleInputChange('deductible', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.deductible ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select deductible</option>
              {deductibleOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.deductible && <p className="text-red-500 text-xs mt-1">{errors.deductible}</p>}
          </div>
        </div>

        {/* Hull Material and Trailer Coverage Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hull Material <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.hullMaterial}
              onChange={(e) => handleInputChange('hullMaterial', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.hullMaterial ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select hull material</option>
              {hullMaterials.map((material) => (
                <option key={material} value={material}>{material}</option>
              ))}
            </select>
            {errors.hullMaterial && <p className="text-red-500 text-xs mt-1">{errors.hullMaterial}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trailer Coverage <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.trailerCoverage}
              onChange={(e) => handleInputChange('trailerCoverage', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.trailerCoverage ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select trailer coverage</option>
              {trailerCoverageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.trailerCoverage && <p className="text-red-500 text-xs mt-1">{errors.trailerCoverage}</p>}
          </div>
        </div>

        {/* Storage Location and Structural Modifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storage Location <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.storageLocation}
              onChange={(e) => handleInputChange('storageLocation', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.storageLocation ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select storage location</option>
              {storageLocations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            {errors.storageLocation && <p className="text-red-500 text-xs mt-1">{errors.storageLocation}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Does your boat or engine have any structural modifications or performance customization? <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.structuralModifications}
              onChange={(e) => handleInputChange('structuralModifications', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.structuralModifications ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select option</option>
              {structuralModificationOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.structuralModifications && <p className="text-red-500 text-xs mt-1">{errors.structuralModifications}</p>}
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
