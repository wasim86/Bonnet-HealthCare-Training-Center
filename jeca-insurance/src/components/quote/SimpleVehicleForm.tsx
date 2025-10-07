'use client'

interface SimpleVehicleFormProps {
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
}

export default function SimpleVehicleForm({ vehicleNumber, formData, onChange }: SimpleVehicleFormProps) {
  const isPrimary = vehicleNumber === 1
  const title = isPrimary ? 'Primary Vehicle' : `Vehicle #${vehicleNumber} (if necessary)`
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value)
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Year, Make, Model Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="2020"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Make</label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Ford"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="F-150"
            />
          </div>
        </div>

        {/* Drive to Work and Leased Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Drive to Work/School?</label>
            <select
              name="driveToWork"
              value={formData.driveToWork}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Is Vehicle Leased?</label>
            <select
              name="isLeased"
              value={formData.isLeased}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="No Coverage">No Coverage</option>
            </select>
          </div>
        </div>

        {/* Work Distance and Collision Deductible Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Work/School Distance</label>
            <select
              name="workDistance"
              value={formData.workDistance}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="Less than 5 Miles">Less than 5 Miles</option>
              <option value="5 Miles">5 Miles</option>
              <option value="10 Miles">10 Miles</option>
              <option value="15 Miles">15 Miles</option>
              <option value="20 Miles">20 Miles</option>
              <option value="30 Miles">30 Miles</option>
              <option value="Over 30 Miles">Over 30 Miles</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Collision Deductible</label>
            <select
              name="collisionDeductible"
              value={formData.collisionDeductible}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="No Coverage">No Coverage</option>
              <option value="$100">$100</option>
              <option value="$250">$250</option>
              <option value="$500">$500</option>
              <option value="$1000">$1000</option>
            </select>
          </div>
        </div>

        {/* Annual Mileage and Comprehensive Deductible Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Annual Mileage</label>
            <select
              name="annualMileage"
              value={formData.annualMileage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
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
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Comprehensive Deductible</label>
            <select
              name="comprehensiveDeductible"
              value={formData.comprehensiveDeductible}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="No Coverage">No Coverage</option>
              <option value="$100">$100</option>
              <option value="$250">$250</option>
              <option value="$500">$500</option>
              <option value="$1000">$1000</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}
