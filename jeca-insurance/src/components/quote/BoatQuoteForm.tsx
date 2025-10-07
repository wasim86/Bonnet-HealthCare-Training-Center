'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useBoatQuoteForm } from '../../lib/hooks/useQuoteForm'
import { BoatQuote, Watercraft, Driver } from '../../lib/types'
import PrimaryBoatForm from './PrimaryBoatForm'
import SecondaryBoatForm from './SecondaryBoatForm'
import PrimaryOperatorForm from './PrimaryOperatorForm'
import SecondaryOperatorForm from './SecondaryOperatorForm'
import BoatAdditionalInformationForm from './BoatAdditionalInformationForm'

interface BoatQuoteFormProps {
  className?: string
}

export default function BoatQuoteForm({ className = '' }: BoatQuoteFormProps) {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useBoatQuoteForm({
    onSuccess: (quote) => {
      console.log('Boat quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Boat quote submission failed:', error);
    }
  });

  const [additionalBoats, setAdditionalBoats] = useState<number[]>([])
  const [primaryBoatData, setPrimaryBoatData] = useState<any>(null)
  const [additionalBoatsData, setAdditionalBoatsData] = useState<any[]>([])

  const [additionalOperators, setAdditionalOperators] = useState<number[]>([])
  const [primaryOperatorData, setPrimaryOperatorData] = useState<any>(null)
  const [additionalOperatorsData, setAdditionalOperatorsData] = useState<any[]>([])
  const [additionalInformationData, setAdditionalInformationData] = useState<any>(null)

  // Form submission states
  const [isBoatSubmitted, setIsBoatSubmitted] = useState(false)
  const [isOperatorSubmitted, setIsOperatorSubmitted] = useState(false)
  const [isBoatEditing, setIsBoatEditing] = useState(false)
  const [isOperatorEditing, setIsOperatorEditing] = useState(false)

  // Additional forms submission states
  const [additionalBoatsSubmitted, setAdditionalBoatsSubmitted] = useState<{[key: number]: boolean}>({})
  const [additionalBoatsEditing, setAdditionalBoatsEditing] = useState<{[key: number]: boolean}>({})
  const [additionalOperatorsSubmitted, setAdditionalOperatorsSubmitted] = useState<{[key: number]: boolean}>({})
  const [additionalOperatorsEditing, setAdditionalOperatorsEditing] = useState<{[key: number]: boolean}>({})

  // Additional forms data storage
  const [additionalBoatsSubmittedData, setAdditionalBoatsSubmittedData] = useState<{[key: number]: any}>({})
  const [additionalOperatorsSubmittedData, setAdditionalOperatorsSubmittedData] = useState<{[key: number]: any}>({})

  const addBoat = () => {
    if (additionalBoats.length < 3) {
      const newBoatNumber = additionalBoats.length + 2
      setAdditionalBoats([...additionalBoats, newBoatNumber])
    }
  }

  const removeBoat = (boatNumber: number) => {
    setAdditionalBoats(additionalBoats.filter(num => num !== boatNumber))
    setAdditionalBoatsData(additionalBoatsData.filter((_, index) => index !== boatNumber - 2))
  }

  const addOperator = () => {
    if (additionalOperators.length < 3) {
      const newOperatorNumber = additionalOperators.length + 2
      setAdditionalOperators([...additionalOperators, newOperatorNumber])
    }
  }

  const removeOperator = (operatorNumber: number) => {
    setAdditionalOperators(additionalOperators.filter(num => num !== operatorNumber))
    setAdditionalOperatorsData(additionalOperatorsData.filter((_, index) => index !== operatorNumber - 2))
  }

  const handlePrimaryBoatSubmit = (data: any) => {
    setPrimaryBoatData(data)
    setIsBoatSubmitted(true)
    setIsBoatEditing(false)
    console.log('Primary Boat Data:', data)
  }

  const handleBoatEdit = () => {
    setIsBoatEditing(true)
  }

  const handleAdditionalBoatSubmit = (boatNumber: number, data: any) => {
    const updatedData = [...additionalBoatsData]
    updatedData[boatNumber - 2] = data
    setAdditionalBoatsData(updatedData)

    // Set submission state and store submitted data
    setAdditionalBoatsSubmitted(prev => ({ ...prev, [boatNumber]: true }))
    setAdditionalBoatsEditing(prev => ({ ...prev, [boatNumber]: false }))
    setAdditionalBoatsSubmittedData(prev => ({ ...prev, [boatNumber]: data }))

    console.log(`Boat #${boatNumber} Data:`, data)
  }

  const handleAdditionalBoatEdit = (boatNumber: number) => {
    setAdditionalBoatsEditing(prev => ({ ...prev, [boatNumber]: true }))
  }

  const handlePrimaryOperatorSubmit = (data: any) => {
    setPrimaryOperatorData(data)
    setIsOperatorSubmitted(true)
    setIsOperatorEditing(false)
    console.log('Primary Operator Data:', data)
  }

  const handleOperatorEdit = () => {
    setIsOperatorEditing(true)
  }

  const handleAdditionalOperatorSubmit = (operatorNumber: number, data: any) => {
    const updatedData = [...additionalOperatorsData]
    updatedData[operatorNumber - 2] = data
    setAdditionalOperatorsData(updatedData)

    // Set submission state and store submitted data
    setAdditionalOperatorsSubmitted(prev => ({ ...prev, [operatorNumber]: true }))
    setAdditionalOperatorsEditing(prev => ({ ...prev, [operatorNumber]: false }))
    setAdditionalOperatorsSubmittedData(prev => ({ ...prev, [operatorNumber]: data }))

    console.log(`Operator #${operatorNumber} Data:`, data)
  }

  const handleAdditionalOperatorEdit = (operatorNumber: number) => {
    setAdditionalOperatorsEditing(prev => ({ ...prev, [operatorNumber]: true }))
  }

  const handleAdditionalInformationSubmit = (data: any) => {
    setAdditionalInformationData(data)
    console.log('Additional Information Data:', data)
  }

  const handleFinalSubmit = async () => {
    if (!primaryBoatData || !primaryOperatorData || !additionalInformationData) {
      console.error('Missing required data for boat quote submission');
      return;
    }

    // Prepare the watercraft data
    const primaryWatercraft: Watercraft = {
      isPrimary: true,
      year: primaryBoatData.year || '',
      make: primaryBoatData.manufacturer || '',
      model: primaryBoatData.model || '',
      manufacturer: primaryBoatData.manufacturer || '',
      watercraftType: primaryBoatData.watercraftType || '',
      length: primaryBoatData.length || '',
      boatUse: primaryBoatData.boatUse || '',
      marketValue: primaryBoatData.marketValue || '',
      numberOfEngines: primaryBoatData.numberOfEngines || '',
      totalHorsepower: primaryBoatData.totalHorsepower || '',
      engineType: primaryBoatData.engineType || '',
      deductible: primaryBoatData.deductible || '',
      hullMaterial: primaryBoatData.hullMaterial || '',
      trailerCoverage: primaryBoatData.trailerCoverage || '',
      storageLocation: primaryBoatData.storageLocation || '',
      structuralModifications: primaryBoatData.structuralModifications || ''
    };

    // Prepare the operator data
    const primaryOperator: Driver = {
      isPrimary: true,
      name: primaryOperatorData.name || '',
      gender: primaryOperatorData.gender || '',
      dateOfBirth: primaryOperatorData.dateOfBirth || '',
      married: primaryOperatorData.married || '',
      accidentsTickets: primaryOperatorData.accidentsTickets || ''
    };

    // Prepare the boat quote data
    const boatQuoteData: BoatQuote = {
      // Personal information from additional information
      firstName: additionalInformationData.firstName || '',
      lastName: additionalInformationData.lastName || '',
      email: additionalInformationData.email || '',
      phoneNumber: additionalInformationData.phoneNumber || '',
      address: additionalInformationData.address || '',
      city: additionalInformationData.city || '',
      state: additionalInformationData.state || '',
      zipCode: additionalInformationData.zipcode || '',
      country: additionalInformationData.country || 'United States',
      coverageDesired: additionalInformationData.coverageDesired || 'Standard Coverage',
      additionalComments: additionalInformationData.message || '',
      informationSecure: additionalInformationData.isSecure || false,

      // Watercraft and operators arrays
      watercraft: [primaryWatercraft, ...additionalBoatsData],
      operators: [primaryOperator, ...additionalOperatorsData]
    };

    console.log('Submitting Boat Quote Data:', boatQuoteData);

    // Submit to API
    await submitQuote(boatQuoteData);
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Boat Insurance Quotes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Protect Your Watercraft with Comprehensive Coverage
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Fast & Easy Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Competitive Rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Expert Support</span>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-blue-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </motion.div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Watercraft Information
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Please provide details about your watercraft to get an accurate insurance quote.
          </p>
        </motion.div>

        {/* Primary Boat Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-8"
        >
          <PrimaryBoatForm
            onSubmit={handlePrimaryBoatSubmit}
            isSubmitted={isBoatSubmitted}
            isEditing={isBoatEditing}
            onEdit={handleBoatEdit}
            submittedData={primaryBoatData}
          />
        </motion.div>

        {/* Additional Boats */}
        {additionalBoats.map((boatNumber, index) => (
          <motion.div
            key={boatNumber}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="mb-8"
          >
            <SecondaryBoatForm
              boatNumber={boatNumber}
              onSubmit={(data) => handleAdditionalBoatSubmit(boatNumber, data)}
              onRemove={() => removeBoat(boatNumber)}
              isSubmitted={additionalBoatsSubmitted[boatNumber] || false}
              isEditing={additionalBoatsEditing[boatNumber] || false}
              onEdit={() => handleAdditionalBoatEdit(boatNumber)}
              submittedData={additionalBoatsSubmittedData[boatNumber]}
            />
          </motion.div>
        ))}

        {/* Add Boat Button */}
        {additionalBoats.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-8"
          >
            <button
              onClick={addBoat}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Another Boat
            </button>
          </motion.div>
        )}

        {/* Operator Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Operator Information
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Please provide details about the boat operators for insurance coverage.
          </p>
        </motion.div>

        {/* Primary Operator Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mb-8"
        >
          <PrimaryOperatorForm
            onSubmit={handlePrimaryOperatorSubmit}
            isSubmitted={isOperatorSubmitted}
            isEditing={isOperatorEditing}
            onEdit={handleOperatorEdit}
            submittedData={primaryOperatorData}
          />
        </motion.div>

        {/* Additional Operators */}
        {additionalOperators.map((operatorNumber, index) => (
          <motion.div
            key={operatorNumber}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="mb-8"
          >
            <SecondaryOperatorForm
              operatorNumber={operatorNumber}
              onSubmit={(data) => handleAdditionalOperatorSubmit(operatorNumber, data)}
              onRemove={() => removeOperator(operatorNumber)}
              isSubmitted={additionalOperatorsSubmitted[operatorNumber] || false}
              isEditing={additionalOperatorsEditing[operatorNumber] || false}
              onEdit={() => handleAdditionalOperatorEdit(operatorNumber)}
              submittedData={additionalOperatorsSubmittedData[operatorNumber]}
            />
          </motion.div>
        ))}

        {/* Add Operator Button */}
        {additionalOperators.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center mb-8"
          >
            <button
              onClick={addOperator}
              className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors font-medium"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Another Operator
            </button>
          </motion.div>
        )}

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mb-8"
        >
          <BoatAdditionalInformationForm
            onSubmit={handleAdditionalInformationSubmit}
            showSubmitButton={false}
            canSubmit={isBoatSubmitted && isOperatorSubmitted}
          />
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-center"
          >
            <p className="text-red-600 font-medium">{error}</p>
          </motion.div>
        )}

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-6 bg-green-50 border border-green-200 rounded-md text-center"
          >
            <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Quote Submitted Successfully!</h3>
            <p className="text-green-600">We'll contact you soon with your boat insurance quote.</p>
            <button
              onClick={() => {
                reset();
                // Reset all form data
                setAdditionalBoats([]);
                setPrimaryBoatData(null);
                setAdditionalBoatsData([]);
                setAdditionalOperators([]);
                setPrimaryOperatorData(null);
                setAdditionalOperatorsData([]);
                setAdditionalInformationData(null);
                // Reset submission states
                setIsBoatSubmitted(false);
                setIsOperatorSubmitted(false);
                setIsBoatEditing(false);
                setIsOperatorEditing(false);
              }}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Another Quote
            </button>
          </motion.div>
        )}

        {/* Final Submit Button - only show when not in success state */}
        {!success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            {!isBoatSubmitted || !isOperatorSubmitted || !additionalInformationData ? (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-800 font-medium">
                  Please complete and submit the boat and operator information above first.
                </p>
              </div>
            ) : null}

            <button
              onClick={handleFinalSubmit}
              disabled={submitting || !isBoatSubmitted || !isOperatorSubmitted || !additionalInformationData}
              className={`px-8 py-4 rounded-md transition-colors font-semibold text-lg ${
                submitting || !isBoatSubmitted || !isOperatorSubmitted || !additionalInformationData
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              {submitting ? 'Submitting Quote...' : 'GET QUOTE'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
