'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import PrimaryAutoVehicleForm from './PrimaryAutoVehicleForm'
import SecondaryAutoVehicleForm from './SecondaryAutoVehicleForm'
import PrimaryAutoDriverForm from './PrimaryAutoDriverForm'
import SecondaryAutoDriverForm from './SecondaryAutoDriverForm'
import AdditionalInformationForm from './AdditionalInformationForm'
import { useAutoQuoteForm } from '../../lib/hooks/useQuoteForm'
import { Vehicle, Driver } from '../../lib/types'

interface AutoQuoteFormProps {
  className?: string
}

export default function AutoQuoteForm({ className = '' }: AutoQuoteFormProps) {
  const [additionalVehicles, setAdditionalVehicles] = useState<number[]>([])
  const [primaryVehicleData, setPrimaryVehicleData] = useState<any>(null)
  const [additionalVehiclesData, setAdditionalVehiclesData] = useState<any[]>([])

  const [additionalDrivers, setAdditionalDrivers] = useState<number[]>([])
  const [primaryDriverData, setPrimaryDriverData] = useState<any>(null)
  const [additionalDriversData, setAdditionalDriversData] = useState<any[]>([])
  const [additionalInformationData, setAdditionalInformationData] = useState<any>(null)

  // Edit states for forms
  const [isPrimaryVehicleEditing, setIsPrimaryVehicleEditing] = useState(true)
  const [isPrimaryDriverEditing, setIsPrimaryDriverEditing] = useState(true)
  const [additionalVehicleEditStates, setAdditionalVehicleEditStates] = useState<{[key: number]: boolean}>({})
  const [additionalDriverEditStates, setAdditionalDriverEditStates] = useState<{[key: number]: boolean}>({})

  // API integration
  const { submitting, error, success, submitQuote, reset } = useAutoQuoteForm({
    onSuccess: (quote) => {
      console.log('Quote submitted successfully:', quote);
    },
    onError: (error) => {
      console.error('Quote submission failed:', error);
    }
  });

  const addVehicle = () => {
    if (additionalVehicles.length < 3) {
      const newVehicleNumber = additionalVehicles.length + 2
      setAdditionalVehicles([...additionalVehicles, newVehicleNumber])
      setAdditionalVehicleEditStates(prev => ({ ...prev, [newVehicleNumber]: true }))
    }
  }

  const removeVehicle = (vehicleNumber: number) => {
    setAdditionalVehicles(additionalVehicles.filter(num => num !== vehicleNumber))
    setAdditionalVehiclesData(additionalVehiclesData.filter((_, index) => index !== vehicleNumber - 2))
    setAdditionalVehicleEditStates(prev => {
      const newStates = { ...prev }
      delete newStates[vehicleNumber]
      return newStates
    })
  }

  const addDriver = () => {
    if (additionalDrivers.length < 3) {
      const newDriverNumber = additionalDrivers.length + 2
      setAdditionalDrivers([...additionalDrivers, newDriverNumber])
      setAdditionalDriverEditStates(prev => ({ ...prev, [newDriverNumber]: true }))
    }
  }

  const removeDriver = (driverNumber: number) => {
    setAdditionalDrivers(additionalDrivers.filter(num => num !== driverNumber))
    setAdditionalDriversData(additionalDriversData.filter((_, index) => index !== driverNumber - 2))
    setAdditionalDriverEditStates(prev => {
      const newStates = { ...prev }
      delete newStates[driverNumber]
      return newStates
    })
  }

  const handlePrimaryVehicleSubmit = (data: any) => {
    setPrimaryVehicleData(data)
    setIsPrimaryVehicleEditing(false)
    console.log('Primary Vehicle Data:', data)
  }

  const handlePrimaryVehicleEdit = () => {
    setIsPrimaryVehicleEditing(true)
  }

  const handleAdditionalVehicleSubmit = (vehicleNumber: number, data: any) => {
    const updatedData = [...additionalVehiclesData]
    updatedData[vehicleNumber - 2] = data
    setAdditionalVehiclesData(updatedData)
    setAdditionalVehicleEditStates(prev => ({ ...prev, [vehicleNumber]: false }))
    console.log(`Vehicle #${vehicleNumber} Data:`, data)
  }

  const handleAdditionalVehicleEdit = (vehicleNumber: number) => {
    setAdditionalVehicleEditStates(prev => ({ ...prev, [vehicleNumber]: true }))
  }

  const handlePrimaryDriverSubmit = (data: any) => {
    setPrimaryDriverData(data)
    setIsPrimaryDriverEditing(false)
    console.log('Primary Driver Data:', data)
  }

  const handlePrimaryDriverEdit = () => {
    setIsPrimaryDriverEditing(true)
  }

  const handleAdditionalDriverSubmit = (driverNumber: number, data: any) => {
    const updatedData = [...additionalDriversData]
    updatedData[driverNumber - 2] = data
    setAdditionalDriversData(updatedData)
    setAdditionalDriverEditStates(prev => ({ ...prev, [driverNumber]: false }))
    console.log(`Driver #${driverNumber} Data:`, data)
  }

  const handleAdditionalDriverEdit = (driverNumber: number) => {
    setAdditionalDriverEditStates(prev => ({ ...prev, [driverNumber]: true }))
  }

  const handleAdditionalInformationSubmit = async (data: any) => {
    setAdditionalInformationData(data)
    console.log('Additional Information Data:', data)
  }

  const handleFinalSubmit = async (additionalInfoData?: any) => {
    // Use provided data or stored data
    const additionalData = additionalInfoData || additionalInformationData

    if (!primaryVehicleData || !primaryDriverData || !additionalData) {
      console.error('Missing required data');
      return;
    }

    // Prepare vehicles array
    const vehicles: Vehicle[] = [
      {
        isPrimary: true,
        year: primaryVehicleData.year || '',
        make: primaryVehicleData.make || '',
        model: primaryVehicleData.model || '',
        driveToWorkSchool: primaryVehicleData.driveToWorkSchool,
        isLeased: primaryVehicleData.isLeased,
        workSchoolDistance: primaryVehicleData.workSchoolDistance,
        collisionDeductible: primaryVehicleData.collisionDeductible,
        annualMileage: primaryVehicleData.annualMileage,
        comprehensiveDeductible: primaryVehicleData.comprehensiveDeductible,
        moreThanTwoVehicles: primaryVehicleData.moreThanTwoVehicles,
      },
      ...additionalVehiclesData.map((vehicle, index) => ({
        isPrimary: false,
        year: vehicle.year || '',
        make: vehicle.make || '',
        model: vehicle.model || '',
        driveToWorkSchool: vehicle.driveToWorkSchool,
        isLeased: vehicle.isLeased,
        workSchoolDistance: vehicle.workSchoolDistance,
        collisionDeductible: vehicle.collisionDeductible,
        annualMileage: vehicle.annualMileage,
        comprehensiveDeductible: vehicle.comprehensiveDeductible,
        moreThanTwoVehicles: vehicle.moreThanTwoVehicles,
      }))
    ];

    // Prepare drivers array - Fixed to use correct data structure
    const drivers = [
      {
        name: primaryDriverData.name || '',
        gender: primaryDriverData.gender || '',
        dateOfBirth: primaryDriverData.dateOfBirth || '',
        married: primaryDriverData.married || '',
        status: primaryDriverData.status || 'Employed',
      },
      ...additionalDriversData.map((driver, index) => ({
        name: driver.name || '',
        gender: driver.gender || '',
        dateOfBirth: driver.dateOfBirth || '',
        married: driver.married || '',
        status: driver.status || 'Employed',
      }))
    ];

    // Prepare the complete quote data to match backend AutoQuoteRequest structure
    const autoQuoteData = {
      // Personal information from additional information form
      firstName: additionalData.firstName || '',
      lastName: additionalData.lastName || '',
      email: additionalData.email || '',
      phoneNumber: additionalData.phoneNumber || '',
      address: additionalData.address,
      city: additionalData.city,
      state: additionalData.state,
      zipCode: additionalData.zipcode, // Note: form uses 'zipcode', API expects 'zipCode'
      country: additionalData.country || 'USA',

      // Insurance information
      currentInsuranceCompany: additionalData.currentInsuranceCompany,
      continuousCoverage: additionalData.continuousCoverage,
      policyExpiresIn: additionalData.policyExpiresIn,
      claimsIn3Years: additionalData.claimsIn3Years,
      ticketsIn3Years: additionalData.ticketsIn3Years,
      coverageDesired: additionalData.coverageDesired,
      whenToStart: additionalData.whenToStart,
      additionalComments: additionalData.message, // Note: form uses 'message', API expects 'additionalComments'
      informationSecure: additionalData.informationSecure || false,

      // Vehicle and driver data
      vehicles,
      drivers,
    };

    console.log('Submitting Auto Quote Data:', autoQuoteData);

    // Submit to API
    await submitQuote(autoQuoteData);
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      {/* Quote Form Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
        </motion.div>

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
            Tell us about your vehicle to get an accurate insurance quote.
          </p>
        </motion.div>

        {/* Primary Vehicle Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <PrimaryAutoVehicleForm
            onSubmit={handlePrimaryVehicleSubmit}
            onEdit={handlePrimaryVehicleEdit}
            initialData={primaryVehicleData}
            isReadOnly={!isPrimaryVehicleEditing && !!primaryVehicleData}
          />
        </motion.div>

        {/* Additional Vehicles */}
        {additionalVehicles.map((vehicleNumber, index) => (
          <motion.div
            key={vehicleNumber}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            className="mb-8"
          >
            <SecondaryAutoVehicleForm
              vehicleNumber={vehicleNumber}
              onSubmit={(data) => handleAdditionalVehicleSubmit(vehicleNumber, data)}
              onRemove={() => removeVehicle(vehicleNumber)}
              onEdit={() => handleAdditionalVehicleEdit(vehicleNumber)}
              initialData={additionalVehiclesData[vehicleNumber - 2]}
              isReadOnly={!additionalVehicleEditStates[vehicleNumber] && !!additionalVehiclesData[vehicleNumber - 2]}
            />
          </motion.div>
        ))}

        {/* Add Vehicle Button */}
        {additionalVehicles.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-8"
          >
            <button
              onClick={addVehicle}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Another Vehicle
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
            Please provide details about the drivers for insurance coverage.
          </p>
        </motion.div>

        {/* Primary Driver Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-8"
        >
          <PrimaryAutoDriverForm
            onSubmit={handlePrimaryDriverSubmit}
            onEdit={handlePrimaryDriverEdit}
            initialData={primaryDriverData}
            isReadOnly={!isPrimaryDriverEditing && !!primaryDriverData}
          />
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
            <SecondaryAutoDriverForm
              driverNumber={driverNumber}
              onSubmit={(data) => handleAdditionalDriverSubmit(driverNumber, data)}
              onRemove={() => removeDriver(driverNumber)}
              onEdit={() => handleAdditionalDriverEdit(driverNumber)}
              initialData={additionalDriversData[driverNumber - 2]}
              isReadOnly={!additionalDriverEditStates[driverNumber] && !!additionalDriversData[driverNumber - 2]}
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
            submitting={submitting}
            canSubmit={!!primaryVehicleData && !!primaryDriverData}
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
            <p className="text-green-600">We'll contact you soon with your auto insurance quote.</p>
            <button
              onClick={() => {
                reset();
                setPrimaryVehicleData(null);
                setPrimaryDriverData(null);
                setAdditionalInformationData(null);
                setAdditionalVehicles([]);
                setAdditionalDrivers([]);
                setAdditionalVehiclesData([]);
                setAdditionalDriversData([]);
                setIsPrimaryVehicleEditing(true);
                setIsPrimaryDriverEditing(true);
                setAdditionalVehicleEditStates({});
                setAdditionalDriverEditStates({});
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
            {!primaryVehicleData || !primaryDriverData || !additionalInformationData ? (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-800 font-medium">
                  Please complete and submit the vehicle and driver information above first.
                </p>
              </div>
            ) : null}

            <button
              onClick={() => handleFinalSubmit()}
              disabled={submitting || !primaryVehicleData || !primaryDriverData || !additionalInformationData}
              className={`px-8 py-4 rounded-md transition-colors font-semibold text-lg ${
                submitting || !primaryVehicleData || !primaryDriverData || !additionalInformationData
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
