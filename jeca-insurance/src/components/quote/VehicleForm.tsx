'use client'

interface VehicleFormProps {
  vehicleNumber: number
  formData: {
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
  onChange: (field: string, value: string) => void
  onSubmit: (vehicleNumber: number, formData: any) => void
}

export default function VehicleForm({ vehicleNumber, formData, onChange, onSubmit }: VehicleFormProps) {
  const isPrimary = vehicleNumber === 1
  const title = isPrimary ? 'Primary Vehicle' : `Vehicle #${vehicleNumber} (if necessary)`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields for this specific vehicle form
    if (!formData.year.trim()) {
      alert('Please enter the vehicle year.')
      return
    }

    if (!formData.make.trim()) {
      alert('Please enter the vehicle make.')
      return
    }

    if (!formData.model.trim()) {
      alert('Please enter the vehicle model.')
      return
    }

    if (!formData.driveToWork || formData.driveToWork === '') {
      alert('Please select if you drive to work/school.')
      return
    }

    if (!formData.isLeased || formData.isLeased === '') {
      alert('Please select if the vehicle is leased.')
      return
    }

    if (!formData.workDistance || formData.workDistance === '') {
      alert('Please select work/school distance.')
      return
    }

    if (!formData.collisionDeductible || formData.collisionDeductible === '') {
      alert('Please select collision deductible.')
      return
    }

    if (!formData.annualMileage || formData.annualMileage === '') {
      alert('Please select annual mileage.')
      return
    }

    if (!formData.comprehensiveDeductible || formData.comprehensiveDeductible === '') {
      alert('Please select comprehensive deductible.')
      return
    }

    // Call the parent's submit handler
    onSubmit(vehicleNumber, formData)
    alert(`Vehicle #${vehicleNumber} information submitted successfully!`)
  }

  // Determine animation class based on vehicle number
  const getAnimationClass = () => {
    const baseClass = "bg-white shadow-lg rounded-lg p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out"

    switch(vehicleNumber) {
      case 1:
        return `${baseClass} animate-slide-in-left animate-delay-200`
      case 2:
        return `${baseClass} animate-slide-in-right animate-delay-400`
      case 3:
        return `${baseClass} animate-slide-in-left animate-delay-600`
      case 4:
        return `${baseClass} animate-slide-in-right animate-delay-800`
      default:
        return `${baseClass} animate-fade-in`
    }
  }

  return (
    <div className={getAnimationClass()}>
      <div className="flex items-center justify-center mb-6">
        <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
        {/* Year, Make, Model Row */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="2020"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ford"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="F-150"
            />
          </div>
        </div>

        {/* Drive to Work/School and Is Vehicle Leased Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Drive to Work/School?</label>
            <div className="relative">
              <select
                name="driveToWork"
                value={formData.driveToWork}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Option</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Is Vehicle Leased?</label>
            <div className="relative">
              <select
                name="isLeased"
                value={formData.isLeased}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No Coverage">No Coverage</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Work/School Distance and Collision Deductible Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work/School Distance</label>
            <div className="relative">
              <select
                name="workDistance"
                value={formData.workDistance}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Distance</option>
                <option value="Less than 5 Miles">Less than 5 Miles</option>
                <option value="5 Miles">5 Miles</option>
                <option value="10 Miles">10 Miles</option>
                <option value="15 Miles">15 Miles</option>
                <option value="20 Miles">20 Miles</option>
                <option value="30 Miles">30 Miles</option>
                <option value="Over 30 Miles">Over 30 Miles</option>
                <option value="N/A">N/A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Collision Deductible</label>
            <div className="relative">
              <select
                name="collisionDeductible"
                value={formData.collisionDeductible}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Deductible</option>
                <option value="No Coverage">No Coverage</option>
                <option value="$100">$100</option>
                <option value="$250">$250</option>
                <option value="$500">$500</option>
                <option value="$1000">$1000</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Mileage and Comprehensive Deductible Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual Mileage</label>
            <div className="relative">
              <select
                name="annualMileage"
                value={formData.annualMileage}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Mileage</option>
                <option value="5,000">5,000</option>
                <option value="7,500">7,500</option>
                <option value="10,000">10,000</option>
                <option value="12,500">12,500</option>
                <option value="15,000">15,000</option>
                <option value="20,000">20,000</option>
                <option value="30,000">30,000</option>
                <option value="40,000">40,000</option>
                <option value="50,000+">50,000+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Comprehensive Deductible</label>
            <div className="relative">
              <select
                name="comprehensiveDeductible"
                value={formData.comprehensiveDeductible}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Deductible</option>
                <option value="No Coverage">No Coverage</option>
                <option value="$100">$100</option>
                <option value="$250">$250</option>
                <option value="$500">$500</option>
                <option value="$1000">$1000</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

          {/* Submit Button - Show for all vehicles */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
