'use client'

import { useState, useEffect } from 'react'
import { TruckIcon } from '@heroicons/react/24/outline'
import ClientOnly from '@/components/ClientOnly'
import SimpleVehicleForm from './SimpleVehicleForm'

interface VehicleData {
  year: string
  make: string
  model: string
  driveToWork: string
  isLeased: string
  workDistance: string
  collisionDeductible: string
  annualMileage: string
  comprehensiveDeductible: string
}

export default function SimpleAutoQuoteForm() {
  const [mounted, setMounted] = useState(false)
  const [vehicles, setVehicles] = useState<VehicleData[]>([
    {
      year: '',
      make: '',
      model: '',
      driveToWork: 'No',
      isLeased: 'Yes',
      workDistance: 'Less than 5 Miles',
      collisionDeductible: 'No Coverage',
      annualMileage: '5,000',
      comprehensiveDeductible: 'No Coverage',
    },
    {
      year: '',
      make: '',
      model: '',
      driveToWork: 'No',
      isLeased: 'Yes',
      workDistance: 'Less than 5 Miles',
      collisionDeductible: 'No Coverage',
      annualMileage: '5,000',
      comprehensiveDeductible: 'No Coverage',
    },
    {
      year: '',
      make: '',
      model: '',
      driveToWork: 'No',
      isLeased: 'Yes',
      workDistance: 'Less than 5 Miles',
      collisionDeductible: 'No Coverage',
      annualMileage: '5,000',
      comprehensiveDeductible: 'No Coverage',
    },
    {
      year: '',
      make: '',
      model: '',
      driveToWork: 'No',
      isLeased: 'Yes',
      workDistance: 'Less than 5 Miles',
      collisionDeductible: 'No Coverage',
      annualMileage: '5,000',
      comprehensiveDeductible: 'No Coverage',
    },
  ])

  const handleVehicleChange = (vehicleIndex: number, field: string, value: string) => {
    setVehicles(prev => prev.map((vehicle, index) => 
      index === vehicleIndex 
        ? { ...vehicle, [field]: value }
        : vehicle
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', vehicles)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ClientOnly>
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TruckIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Vehicle Information</h2>
          </div>
          <p className="text-gray-600">Please provide information for all vehicles you want to insure</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vehicle Forms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SimpleVehicleForm
              vehicleNumber={1}
              formData={vehicles[0]}
              onChange={(field, value) => handleVehicleChange(0, field, value)}
            />
            <SimpleVehicleForm
              vehicleNumber={2}
              formData={vehicles[1]}
              onChange={(field, value) => handleVehicleChange(1, field, value)}
            />
            <SimpleVehicleForm
              vehicleNumber={3}
              formData={vehicles[2]}
              onChange={(field, value) => handleVehicleChange(2, field, value)}
            />
            <SimpleVehicleForm
              vehicleNumber={4}
              formData={vehicles[3]}
              onChange={(field, value) => handleVehicleChange(3, field, value)}
            />
          </div>

          {/* Global Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Submit All Vehicle Information
            </button>
          </div>
        </form>
      </div>
    </ClientOnly>
  )
}
