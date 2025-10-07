'use client'

interface DriverFormProps {
  driverNumber: number
  formData: {
    name: string
    gender: string
    married: string
    dateOfBirth: string
    status: string
  }
  onChange: (field: string, value: string) => void
  onSubmit: (driverNumber: number, formData: any) => void
}

export default function DriverForm({ driverNumber, formData, onChange, onSubmit }: DriverFormProps) {
  const isPrimary = driverNumber === 1
  const title = isPrimary ? 'Primary Driver' : `Additional Driver #${driverNumber} (if necessary)`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields for this specific driver form
    if (!formData.name.trim()) {
      alert('Please enter the driver name.')
      return
    }

    if (!formData.dateOfBirth) {
      alert('Please enter the date of birth.')
      return
    }

    if (!formData.gender || formData.gender === '') {
      alert('Please select a gender.')
      return
    }

    if (!formData.married || formData.married === '') {
      alert('Please select marital status.')
      return
    }

    if (!formData.status || formData.status === '') {
      alert('Please select employment status.')
      return
    }

    // Call the parent's submit handler
    onSubmit(driverNumber, formData)
    alert(`Driver #${driverNumber} information submitted successfully!`)
  }

  // Determine animation class based on driver number
  const getAnimationClass = () => {
    const baseClass = "bg-white shadow-lg rounded-lg p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
    
    switch(driverNumber) {
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
        <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
        {/* Driver Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isPrimary ? 'Primary Driver Name' : 'Driver Name'}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter full name"
          />
        </div>

        {/* Gender and Married Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Married?</label>
            <div className="relative">
              <select
                name="married"
                value={formData.married}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
              >
                <option value="">Select Marital Status</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Date of Birth and Status Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <div className="relative">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
              >
                <option value="">Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

          {/* Submit Button */}
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
