'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, TrashIcon, CheckCircleIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useMotorcycleQuoteForm } from '../../lib/hooks/useQuoteForm'
import { MotorcycleQuote } from '../../lib/types'

import PrimaryMotorcycleForm from './PrimaryMotorcycleForm'
import SecondaryMotorcycleForm from './SecondaryMotorcycleForm'
import PrimaryMotorcycleDriverForm from './PrimaryMotorcycleDriverForm'
import SecondaryMotorcycleDriverForm from './SecondaryMotorcycleDriverForm'
import AdditionalInformationForm from './AdditionalInformationForm'

interface MotorcycleQuoteFormProps {
  className?: string
}

export default function MotorcycleQuoteForm({ className = '' }: MotorcycleQuoteFormProps) {
  // API integration
  const { submitting, error, success, submitQuote, reset } = useMotorcycleQuoteForm({
    onSuccess: (quote) => {
      console.log('Motorcycle quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Motorcycle quote submission failed:', error);
    }
  });

  const [additionalMotorcycles, setAdditionalMotorcycles] = useState<number[]>([])
  const [primaryMotorcycleData, setPrimaryMotorcycleData] = useState<any>(null)
  const [additionalMotorcyclesData, setAdditionalMotorcyclesData] = useState<any[]>([])

  const [additionalDrivers, setAdditionalDrivers] = useState<number[]>([])
  const [primaryDriverData, setPrimaryDriverData] = useState<any>(null)
  const [additionalDriversData, setAdditionalDriversData] = useState<any[]>([])
  const [additionalInformationData, setAdditionalInformationData] = useState<any>(null)

  // Add state for form submission status
  const [isMotorcycleSubmitted, setIsMotorcycleSubmitted] = useState(false)
  const [isDriverSubmitted, setIsDriverSubmitted] = useState(false)
  const [isMotorcycleEditing, setIsMotorcycleEditing] = useState(false)
  const [isDriverEditing, setIsDriverEditing] = useState(false)

  // Add state for additional forms submission status
  const [additionalMotorcyclesSubmitted, setAdditionalMotorcyclesSubmitted] = useState<{[key: number]: boolean}>({})
  const [additionalMotorcyclesEditing, setAdditionalMotorcyclesEditing] = useState<{[key: number]: boolean}>({})
  const [additionalDriversSubmitted, setAdditionalDriversSubmitted] = useState<{[key: number]: boolean}>({})
  const [additionalDriversEditing, setAdditionalDriversEditing] = useState<{[key: number]: boolean}>({})
  const [additionalMotorcyclesSubmittedData, setAdditionalMotorcyclesSubmittedData] = useState<{[key: number]: any}>({})
  const [additionalDriversSubmittedData, setAdditionalDriversSubmittedData] = useState<{[key: number]: any}>({})

  const addMotorcycle = () => {
    if (additionalMotorcycles.length < 3) {
      const newMotorcycleNumber = additionalMotorcycles.length + 2
      setAdditionalMotorcycles([...additionalMotorcycles, newMotorcycleNumber])
    }
  }

  const removeMotorcycle = (motorcycleNumber: number) => {
    setAdditionalMotorcycles(additionalMotorcycles.filter(num => num !== motorcycleNumber))
    setAdditionalMotorcyclesData(additionalMotorcyclesData.filter((_, index) => index !== motorcycleNumber - 2))
  }

  const addDriver = () => {
    if (additionalDrivers.length < 3) {
      const newDriverNumber = additionalDrivers.length + 2
      setAdditionalDrivers([...additionalDrivers, newDriverNumber])
    }
  }

  const removeDriver = (driverNumber: number) => {
    setAdditionalDrivers(additionalDrivers.filter(num => num !== driverNumber))
    setAdditionalDriversData(additionalDriversData.filter((_, index) => index !== driverNumber - 2))
  }

  const handlePrimaryMotorcycleSubmit = (data: any) => {
    setPrimaryMotorcycleData(data)
    setIsMotorcycleSubmitted(true)
    setIsMotorcycleEditing(false)
    console.log('Primary Motorcycle Data:', data)
  }

  const handleMotorcycleEdit = () => {
    setIsMotorcycleEditing(true)
    setIsMotorcycleSubmitted(false)
  }

  const handleAdditionalMotorcycleSubmit = (motorcycleNumber: number, data: any) => {
    const updatedData = [...additionalMotorcyclesData]
    updatedData[motorcycleNumber - 2] = data
    setAdditionalMotorcyclesData(updatedData)

    // Update submission state
    setAdditionalMotorcyclesSubmitted(prev => ({ ...prev, [motorcycleNumber]: true }))
    setAdditionalMotorcyclesEditing(prev => ({ ...prev, [motorcycleNumber]: false }))
    setAdditionalMotorcyclesSubmittedData(prev => ({ ...prev, [motorcycleNumber]: data }))

    console.log(`Motorcycle #${motorcycleNumber} Data:`, data)
  }

  const handleAdditionalMotorcycleEdit = (motorcycleNumber: number) => {
    setAdditionalMotorcyclesEditing(prev => ({ ...prev, [motorcycleNumber]: true }))
    setAdditionalMotorcyclesSubmitted(prev => ({ ...prev, [motorcycleNumber]: false }))
  }

  const handlePrimaryDriverSubmit = (data: any) => {
    setPrimaryDriverData(data)
    setIsDriverSubmitted(true)
    setIsDriverEditing(false)
    console.log('Primary Driver Data:', data)
  }

  const handleDriverEdit = () => {
    setIsDriverEditing(true)
    setIsDriverSubmitted(false)
  }

  const handleAdditionalDriverSubmit = (driverNumber: number, data: any) => {
    const updatedData = [...additionalDriversData]
    updatedData[driverNumber - 2] = data
    setAdditionalDriversData(updatedData)

    // Update submission state
    setAdditionalDriversSubmitted(prev => ({ ...prev, [driverNumber]: true }))
    setAdditionalDriversEditing(prev => ({ ...prev, [driverNumber]: false }))
    setAdditionalDriversSubmittedData(prev => ({ ...prev, [driverNumber]: data }))

    console.log(`Driver #${driverNumber} Data:`, data)
  }

  const handleAdditionalDriverEdit = (driverNumber: number) => {
    setAdditionalDriversEditing(prev => ({ ...prev, [driverNumber]: true }))
    setAdditionalDriversSubmitted(prev => ({ ...prev, [driverNumber]: false }))
  }

  const handleAdditionalInformationSubmit = (data: any) => {
    setAdditionalInformationData(data)
    console.log('Additional Information Data:', data)
  }

  const handleFinalSubmit = async () => {
    if (!primaryMotorcycleData || !primaryDriverData || !additionalInformationData) {
      console.error('Missing required data for motorcycle quote submission');
      return;
    }

    // Collect all motorcycles (primary + additional)
    const allMotorcycles = [
      {
        isPrimary: true,
        year: primaryMotorcycleData.year || '',
        make: primaryMotorcycleData.make || '',
        model: primaryMotorcycleData.model || '',
        driveToWorkSchool: primaryMotorcycleData.driveToWorkSchool || '',
        isLeased: primaryMotorcycleData.isLeased || '',
        workSchoolDistance: primaryMotorcycleData.workSchoolDistance || '',
        collisionDeductible: primaryMotorcycleData.collisionDeductible || '',
        annualMileage: primaryMotorcycleData.annualMileage || '',
        comprehensiveDeductible: primaryMotorcycleData.comprehensiveDeductible || '',
        moreThan2Motorcycles: primaryMotorcycleData.moreThan2Motorcycles || '',
      }
    ];

    // Add additional motorcycles that have been submitted
    Object.entries(additionalMotorcyclesSubmittedData).forEach(([motorcycleNumber, data]) => {
      if (data && additionalMotorcyclesSubmitted[parseInt(motorcycleNumber)]) {
        allMotorcycles.push({
          isPrimary: false,
          year: data.year || '',
          make: data.make || '',
          model: data.model || '',
          driveToWorkSchool: data.driveToWorkSchool || '',
          isLeased: data.isLeased || '',
          workSchoolDistance: data.workSchoolDistance || '',
          collisionDeductible: data.collisionDeductible || '',
          annualMileage: data.annualMileage || '',
          comprehensiveDeductible: data.comprehensiveDeductible || '',
          moreThan2Motorcycles: '', // Only primary motorcycle has this field
        });
      }
    });

    // Collect all riders (primary + additional)
    const allRiders = [
      {
        name: primaryDriverData.name || '',
        gender: primaryDriverData.gender || '',
        dateOfBirth: primaryDriverData.dateOfBirth || '',
        married: primaryDriverData.married || '',
        status: primaryDriverData.status || '',
      }
    ];

    // Add additional drivers that have been submitted
    Object.entries(additionalDriversSubmittedData).forEach(([driverNumber, data]) => {
      if (data && additionalDriversSubmitted[parseInt(driverNumber)]) {
        allRiders.push({
          name: data.name || '',
          gender: data.gender || '',
          dateOfBirth: data.dateOfBirth || '',
          married: data.married || '',
          status: data.status || '',
        });
      }
    });

    // Prepare the motorcycle quote data to match backend API structure
    const motorcycleQuoteData = {
      // Personal information from additional information
      firstName: additionalInformationData.firstName || '',
      lastName: additionalInformationData.lastName || '',
      email: additionalInformationData.email || '',
      phoneNumber: additionalInformationData.phoneNumber || '',
      address: additionalInformationData.address || '',
      city: additionalInformationData.city || '',
      state: additionalInformationData.state || '',
      zipCode: additionalInformationData.zipCode || '',
      country: additionalInformationData.country || 'USA',

      // Insurance information
      currentInsuranceCompany: additionalInformationData.currentInsuranceCompany || '',
      continuousCoverage: additionalInformationData.continuousCoverage || '',
      policyExpiresIn: additionalInformationData.policyExpiresIn || '',
      claimsIn3Years: additionalInformationData.claimsIn3Years || '',
      ticketsIn3Years: additionalInformationData.ticketsIn3Years || '',
      coverageDesired: additionalInformationData.coverageDesired || '',
      whenToStart: additionalInformationData.whenToStart || '',
      additionalComments: additionalInformationData.additionalComments || '',
      informationSecure: additionalInformationData.informationSecure || false,

      // All motorcycles (primary + additional)
      motorcycles: allMotorcycles,

      // All riders (primary + additional)
      riders: allRiders
    };

    console.log('Submitting Motorcycle Quote Data:', motorcycleQuoteData);
    console.log(`Total Motorcycles: ${allMotorcycles.length}, Total Riders: ${allRiders.length}`);

    // Use the hook's submitQuote function which handles success/error states
    await submitQuote(motorcycleQuoteData);
  }

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        </div>

        {/* Motorcycle Icon Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 right-10 text-6xl"
        >
          🏍️
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Motorcycle Insurance
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Ride with confidence. Get comprehensive motorcycle insurance coverage tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Comprehensive Coverage
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Collision Protection
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Competitive Rates
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                24/7 Support
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Quote Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400 rounded-full opacity-20"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-20 w-16 h-16 border-2 border-purple-400 rounded-full opacity-20"
        />
      </motion.div>

      {/* Quote Form Section */}
      <div id="quote-form" className="container mx-auto px-4 py-16">
        {/* Vehicle Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Vehicle Information
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Tell us about your motorcycle to get an accurate insurance quote.
          </p>
        </motion.div>

        {/* Primary Motorcycle Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          {isMotorcycleSubmitted && !isMotorcycleEditing ? (
            // Readonly display
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Primary Motorcycle - Submitted</h3>
                </div>
                <button
                  onClick={handleMotorcycleEdit}
                  className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-500">Year</div>
                  <p className="text-gray-900">"{primaryMotorcycleData?.year}"</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Make</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.make}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Model</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.model}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Drive to Work/School</div>
                  <p className="text-gray-900">"{primaryMotorcycleData?.driveToWorkSchool}"</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Is Leased</div>
                  <p className="text-gray-900">"{primaryMotorcycleData?.isLeased}"</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Work/School Distance</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.workSchoolDistance}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Collision Deductible</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.collisionDeductible}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Annual Mileage</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.annualMileage}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Comprehensive Deductible</div>
                  <p className="text-gray-900">{primaryMotorcycleData?.comprehensiveDeduct}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">More than 2 Motorcycles</div>
                  <p className="text-gray-900">"{primaryMotorcycleData?.moreThanTwoMotorcycles}"</p>
                </div>
              </div>
            </div>
          ) : (
            <PrimaryMotorcycleForm
              onSubmit={handlePrimaryMotorcycleSubmit}
              initialData={primaryMotorcycleData}
            />
          )}
        </motion.div>

        {/* Additional Motorcycles */}
        {additionalMotorcycles.map((motorcycleNumber, index) => (
          <motion.div
            key={motorcycleNumber}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="mb-8"
          >
            <SecondaryMotorcycleForm
              motorcycleNumber={motorcycleNumber}
              onSubmit={(data) => handleAdditionalMotorcycleSubmit(motorcycleNumber, data)}
              onRemove={() => removeMotorcycle(motorcycleNumber)}
              isSubmitted={additionalMotorcyclesSubmitted[motorcycleNumber] || false}
              isEditing={additionalMotorcyclesEditing[motorcycleNumber] || false}
              onEdit={() => handleAdditionalMotorcycleEdit(motorcycleNumber)}
              submittedData={additionalMotorcyclesSubmittedData[motorcycleNumber]}
            />
          </motion.div>
        ))}

        {/* Add Motorcycle Button */}
        {additionalMotorcycles.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-8"
          >
            <button
              onClick={addMotorcycle}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Another Motorcycle
            </button>
          </motion.div>
        )}

        {/* Driver Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Driver Information
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Please provide details about the motorcycle drivers for insurance coverage.
          </p>
        </motion.div>

        {/* Primary Driver Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-8"
        >
          {isDriverSubmitted && !isDriverEditing ? (
            // Readonly display
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Primary Driver - Submitted</h3>
                </div>
                <button
                  onClick={handleDriverEdit}
                  className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-500">Driver Name</div>
                  <p className="text-gray-900">{primaryDriverData?.name}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Gender</div>
                  <p className="text-gray-900">{primaryDriverData?.gender}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Date of Birth</div>
                  <p className="text-gray-900">{primaryDriverData?.dateOfBirth ? new Date(primaryDriverData.dateOfBirth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Marital Status</div>
                  <p className="text-gray-900">{primaryDriverData?.married === 'Yes' ? 'Married' : 'Single'}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Employment Status</div>
                  <p className="text-gray-900">{primaryDriverData?.status}</p>
                </div>
              </div>
            </div>
          ) : (
            <PrimaryMotorcycleDriverForm
              onSubmit={handlePrimaryDriverSubmit}
              initialData={primaryDriverData}
            />
          )}
        </motion.div>

        {/* Additional Drivers */}
        {additionalDrivers.map((driverNumber, index) => (
          <motion.div
            key={driverNumber}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="mb-8"
          >
            <SecondaryMotorcycleDriverForm
              driverNumber={driverNumber}
              onSubmit={(data) => handleAdditionalDriverSubmit(driverNumber, data)}
              onRemove={() => removeDriver(driverNumber)}
              isSubmitted={additionalDriversSubmitted[driverNumber] || false}
              isEditing={additionalDriversEditing[driverNumber] || false}
              onEdit={() => handleAdditionalDriverEdit(driverNumber)}
              submittedData={additionalDriversSubmittedData[driverNumber]}
            />
          </motion.div>
        ))}

        {/* Add Driver Button */}
        {additionalDrivers.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-8"
          >
            <button
              onClick={addDriver}
              className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors font-medium"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Another Driver
            </button>
          </motion.div>
        )}

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-8"
        >
          <AdditionalInformationForm
            onSubmit={handleAdditionalInformationSubmit}
            showSubmitButton={false}
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
            <p className="text-green-600">We'll contact you soon with your motorcycle insurance quote.</p>
            <button
              onClick={() => {
                reset();
                // Reset all form data
                setAdditionalMotorcycles([]);
                setPrimaryMotorcycleData(null);
                setAdditionalMotorcyclesData([]);
                setAdditionalDrivers([]);
                setPrimaryDriverData(null);
                setAdditionalDriversData([]);
                setAdditionalInformationData(null);
                // Reset submission states
                setIsMotorcycleSubmitted(false);
                setIsDriverSubmitted(false);
                setIsMotorcycleEditing(false);
                setIsDriverEditing(false);
              }}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Another Quote
            </button>
          </motion.div>
        )}

        {/* Final Submit Button */}

        {/* Final Submit Button - only show when not in success state */}
        {!success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            {!isMotorcycleSubmitted || !isDriverSubmitted || !additionalInformationData ? (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-800 font-medium">
                  Please complete and submit the motorcycle and driver information above first.
                </p>
              </div>
            ) : null}

            <button
              onClick={handleFinalSubmit}
              disabled={submitting || !isMotorcycleSubmitted || !isDriverSubmitted || !additionalInformationData}
              className={`px-8 py-4 rounded-md transition-colors font-semibold text-lg ${
                submitting || !isMotorcycleSubmitted || !isDriverSubmitted || !additionalInformationData
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              {submitting ? 'Submitting...' : 'GET QUOTE'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
