'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  ChartBarIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserGroupIcon,
  BellIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { useQuoteDashboard } from '../../lib/hooks/useQuoteDashboard'
import { QUOTE_TYPES } from '../../lib/types'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import AdminSettings from '@/components/dashboard/AdminSettings'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const [selectedQuoteType, setSelectedQuoteType] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('All')
  const [selectedQuoteDetails, setSelectedQuoteDetails] = useState<any>(null)
  const [loadingQuoteDetails, setLoadingQuoteDetails] = useState(false)
  const [showAdminSettings, setShowAdminSettings] = useState(false)

  // API base URL configuration
  const API_BASE_URL = '/api'

  // Management section state
  const [activeManagementSection, setActiveManagementSection] = useState('services')

  // Service Management State
  const [activeServiceTab, setActiveServiceTab] = useState<string>('contactInquiries')
  const [serviceData, setServiceData] = useState<any>({
    claims: [],
    policyReviews: [],
    contactUpdates: [],
    proofOfInsurance: [],
    consultations: [],
    contactInquiries: []
  })
  const [loadingServices, setLoadingServices] = useState(false)
  const [serviceQuoteType, setServiceQuoteType] = useState<string>('All')
  const [serviceStatus, setServiceStatus] = useState<string>('All')
  const [serviceSearch, setServiceSearch] = useState('')

  // Service Details Modal State
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<any>(null)
  const [serviceDetailsModalOpen, setServiceDetailsModalOpen] = useState(false)
  const [loadingServiceDetails, setLoadingServiceDetails] = useState(false)

  // Use the unified dashboard hook for quotes
  const {
    quotes,
    statistics,
    loading,
    error,
    totalCount,
    page,
    pageSize,
    totalPages,
    setPage,
    setFilters,
    refresh,
    updateQuoteStatus,
    getQuoteDetails,
    filters
  } = useQuoteDashboard({ initialPageSize: 20 })

  // Admin quick actions with real statistics
  const adminQuickActions = [
    // {
    //   name: 'Customer Quotes Management',
    //   description: 'Manage all customer quotes',
    //   icon: DocumentTextIcon,
    //   action: () => setActiveManagementSection('quotes'),
    //   color: 'blue',
    //   count: totalCount || 0
    // },
    {
      name: 'Service Management',
      description: 'Manage customer service requests',
      icon: ExclamationTriangleIcon,
      action: () => setActiveManagementSection('services'),
      color: 'green',
      count: (serviceData.claims?.length || 0) + (serviceData.policyReviews?.length || 0) + (serviceData.contactUpdates?.length || 0) + (serviceData.proofOfInsurance?.length || 0) + (serviceData.consultations?.length || 0) + (serviceData.contactInquiries?.length || 0)
    },
  ]

  // Recent customer activities (mock data for now)
  const recentCustomerActivities = [
    {
      id: 'ACT-001',
      type: 'Quote Submitted',
      customer: 'John Smith',
      description: 'Auto insurance quote for 2023 Honda Civic',
      timestamp: '2 hours ago',
      status: 'Pending Review',
      statusColor: 'yellow',
      priority: 'normal'
    },
    {
      id: 'ACT-002',
      type: 'Claim Filed',
      customer: 'Sarah Johnson',
      description: 'Home insurance claim - water damage',
      timestamp: '4 hours ago',
      status: 'Under Investigation',
      statusColor: 'blue',
      priority: 'high'
    },
    {
      id: 'ACT-003',
      type: 'Policy Renewal',
      customer: 'Mike Davis',
      description: 'Auto policy renewal completed',
      timestamp: '1 day ago',
      status: 'Completed',
      statusColor: 'green',
      priority: 'normal'
    },
  ]

  const systemAlerts = [
    {
      id: 'ALERT-001',
      type: 'High Priority',
      message: '15 quotes pending review for over 24 hours',
      timestamp: '1 hour ago',
      severity: 'high',
      action: 'Review Quotes'
    },
    {
      id: 'ALERT-002',
      type: 'System Update',
      message: 'Scheduled maintenance tonight at 2:00 AM',
      timestamp: '3 hours ago',
      severity: 'info',
      action: 'View Details'
    },
  ]

  // Update filters when search term or selections change
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters({
        quoteType: selectedQuoteType,
        search: searchTerm,
        status: selectedStatus
      })
    }, 500) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [selectedQuoteType, searchTerm, selectedStatus, setFilters])

  const handleStatusUpdate = async (id: string, status: string) => {
    const success = await updateQuoteStatus(id, status)
    if (success) {
      console.log('Quote status updated successfully')
    } else {
      alert('Failed to update quote status')
    }
  }

  // Export quotes to Excel (XLSX format)
  const exportQuotesToExcel = async () => {
    try {
      // Dynamic import of xlsx library
      const XLSX = await import('xlsx')

      // Get current quotes data
      const quotesToExport = quotes || []

      if (quotesToExport.length === 0) {
        alert('No quotes data to export')
        return
      }

      // Prepare data for Excel
      const excelData = quotesToExport.map(quote => ({
        'Quote Number': quote.quoteNumber || '',
        'Quote Type': quote.quoteType || '',
        'Customer Name': `${quote.firstName || ''} ${quote.lastName || ''}`.trim(),
        'Email': quote.email || '',
        'Phone': quote.phoneNumber || '',
        'Address': quote.address || '',
        'City': quote.city || '',
        'State': quote.state || '',
        'Zip Code': quote.zipCode || '',
        'Status': quote.status || '',
        'Created Date': quote.createdDate ? new Date(quote.createdDate).toLocaleDateString() : '',
        'Updated Date': quote.updatedDate ? new Date(quote.updatedDate).toLocaleDateString() : ''
      }))

      // Create workbook and worksheet
      const workbook = XLSX.utils.book_new()
      const worksheet = XLSX.utils.json_to_sheet(excelData)

      // Set column widths for better formatting
      const columnWidths = [
        { wch: 20 }, // Quote Number
        { wch: 20 }, // Quote Type
        { wch: 25 }, // Customer Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 30 }, // Address
        { wch: 15 }, // City
        { wch: 10 }, // State
        { wch: 12 }, // Zip Code
        { wch: 15 }, // Status
        { wch: 15 }, // Created Date
        { wch: 15 }  // Updated Date
      ]
      worksheet['!cols'] = columnWidths

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Customer Quotes')

      // Generate Excel file buffer
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

      // Create blob with proper MIME type for Excel
      const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      // Create download link
      const fileName = `customer-quotes-${new Date().toISOString().split('T')[0]}.xlsx`
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', fileName)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      console.log(`Exported ${quotesToExport.length} quotes to Excel file: ${fileName}`)
    } catch (error) {
      console.error('Error exporting quotes:', error)
      alert('Failed to export quotes. Please try again.')
    }
  }

  // Test API connectivity
  const testApiConnection = async () => {
    try {
      console.log('Testing API connection...')
      const response = await fetch(`${API_BASE_URL}/dashboard/statistics`)
      console.log('API Response status:', response.status)
      const data = await response.json()
      console.log('API Response data:', data)
      alert('API connection successful! Check console for details.')
    } catch (error) {
      console.error('API connection failed:', error)
      alert(`API connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  // Fetch service data
  const fetchServiceData = async () => {
    setLoadingServices(true)
    try {
      const [claimsRes, policyReviewsRes, contactUpdatesRes, proofInsuranceRes, consultationsRes, contactInquiriesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/services/claim?pageSize=20`),
        fetch(`${API_BASE_URL}/services/policy-review?pageSize=20`),
        fetch(`${API_BASE_URL}/services/contact-update?pageSize=20`),
        fetch(`${API_BASE_URL}/services/proof-of-insurance?pageSize=20`),
        fetch(`${API_BASE_URL}/services/consultation?pageSize=20`),
        fetch(`${API_BASE_URL}/contact?pageSize=20`)
      ])

      const [claims, policyReviews, contactUpdates, proofOfInsuranceResponse, consultationsResponse, contactInquiries] = await Promise.all([
        claimsRes.ok ? claimsRes.json() : [],
        policyReviewsRes.ok ? policyReviewsRes.json() : [],
        contactUpdatesRes.ok ? contactUpdatesRes.json() : [],
        proofInsuranceRes.ok ? proofInsuranceRes.json() : { proofRequests: [] },
        consultationsRes.ok ? consultationsRes.json() : { consultations: [] },
        contactInquiriesRes.ok ? contactInquiriesRes.json() : []
      ])

      // Extract the actual data arrays from the wrapped responses
      const proofOfInsurance = proofOfInsuranceResponse.proofRequests || []
      const consultations = consultationsResponse.consultations || []

      setServiceData({
        claims,
        policyReviews,
        contactUpdates,
        proofOfInsurance,
        consultations,
        contactInquiries
      })
    } catch (error) {
      console.error('Error fetching service data:', error)
    } finally {
      setLoadingServices(false)
    }
  }

  // Load service data on component mount
  React.useEffect(() => {
    fetchServiceData()
  }, [])

  // Handle viewing service details
  const handleViewServiceDetails = async (serviceType: string, id: string) => {
    try {
      setLoadingServiceDetails(true)
      setServiceDetailsModalOpen(true)

      let endpoint = ''
      switch (serviceType) {
        case 'claim':
          endpoint = `${API_BASE_URL}/services/claim/${id}`
          break
        case 'policyReview':
          endpoint = `${API_BASE_URL}/services/policy-review/${id}`
          break
        case 'contactUpdate':
          endpoint = `${API_BASE_URL}/services/contact-update/${id}`
          break
        case 'proofOfInsurance':
          endpoint = `${API_BASE_URL}/services/proof-of-insurance/${id}`
          break
        case 'consultation':
          endpoint = `${API_BASE_URL}/services/consultation/${id}`
          break
        case 'contactInquiry':
          endpoint = `${API_BASE_URL}/contact/${id}`
          break
        default:
          throw new Error('Invalid service type')
      }

      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const details = await response.json()
      setSelectedServiceDetails({ ...details, serviceType })
    } catch (error) {
      console.error('Error fetching service details:', error)
      alert('Failed to load service details. Please try again.')
      setServiceDetailsModalOpen(false)
    } finally {
      setLoadingServiceDetails(false)
    }
  }

  const handleViewQuote = async (id: string) => {
    try {
      console.log('Fetching quote details for ID:', id)
      setLoadingQuoteDetails(true)

      // Test direct fetch first
      console.log('Testing direct fetch...')
      const directResponse = await fetch(`${API_BASE_URL}/dashboard/quotes/${id}`)
      console.log('Direct fetch response status:', directResponse.status)
      console.log('Direct fetch response headers:', Object.fromEntries(directResponse.headers.entries()))

      if (!directResponse.ok) {
        throw new Error(`HTTP error! status: ${directResponse.status}`)
      }

      const quoteDetails = await directResponse.json()
      console.log('Quote details received:', quoteDetails)

      if (quoteDetails) {
        setSelectedQuoteDetails(quoteDetails)
        console.log('Quote details set successfully')
      } else {
        console.error('No quote details received')
        alert('No quote details found')
      }
    } catch (error) {
      console.error('Error fetching quote details:', error)
      alert(`Failed to load quote details: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoadingQuoteDetails(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getQuoteTypeDisplayName = (quoteType: string) => {
    if (quoteType === 'All') return 'All Quote Types'

    const typeMap: { [key: string]: string } = {
      'Auto': 'Auto Insurance',
      'Home': 'Home Insurance',
      'Health': 'Health Insurance',
      'Business': 'Business Insurance',
      'LifeInsurance': 'Life Insurance',
      'Boat': 'Boat Insurance',
      'Motorcycle': 'Motorcycle Insurance',
      'Flood': 'Flood Insurance',
      'Renters': 'Renters Insurance',
      'Landlords': 'Landlords Insurance',
      'BOP': 'Business Owners Package',
      'WorkersComp': 'Workers Compensation',
      'Dental': 'Dental Insurance',
      'Vision': 'Vision Insurance',
      'DisabilityInsurance': 'Disability Insurance',
      'UmbrellaInsurance': 'Umbrella Insurance',
      'Annuity': 'Annuity',
      'MedicareAdvantage': 'Medicare Advantage',
      'MedicareSupplement': 'Medicare Supplement',
    }
    return typeMap[quoteType] || quoteType
  }

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'approved':
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'rejected':
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      case 'under review':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const normalize = (v: string | undefined) => (v || '').toLowerCase()
  const typeMatch = (item: any) => {
    if (serviceQuoteType === 'All') return true
    const t = normalize(item.insuranceType) || normalize(item.inquiryType) || normalize(item.claimType) || normalize(item.consultationType) || normalize(item.reviewMethod) || normalize(item.changeType)
    return t === serviceQuoteType.toLowerCase()
  }
  const statusMatch = (item: any) => {
    if (serviceStatus === 'All') return true
    return normalize(item.status) === serviceStatus.toLowerCase()
  }
  const searchMatch = (item: any) => {
    const q = serviceSearch.trim().toLowerCase()
    if (!q) return true
    const fields = [
      item.firstName,
      item.lastName,
      item.email,
      item.phoneNumber,
      item.claimNumber,
      item.policyNumber,
      item.updateNumber,
      item.requestNumber,
      item.consultationNumber,
      item.contactNumber,
      item.subject
    ]
      .map(normalize)
      .join(' ')
    return fields.includes(q)
  }
  const filteredClaims = React.useMemo(() => (serviceData.claims || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.claims, serviceQuoteType, serviceStatus, serviceSearch])
  const filteredPolicyReviews = React.useMemo(() => (serviceData.policyReviews || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.policyReviews, serviceQuoteType, serviceStatus, serviceSearch])
  const filteredContactUpdates = React.useMemo(() => (serviceData.contactUpdates || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.contactUpdates, serviceQuoteType, serviceStatus, serviceSearch])
  const filteredProofOfInsurance = React.useMemo(() => (serviceData.proofOfInsurance || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.proofOfInsurance, serviceQuoteType, serviceStatus, serviceSearch])
  const filteredConsultations = React.useMemo(() => (serviceData.consultations || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.consultations, serviceQuoteType, serviceStatus, serviceSearch])
  const filteredContactInquiries = React.useMemo(() => (serviceData.contactInquiries || []).filter((i: any) => typeMatch(i) && statusMatch(i) && searchMatch(i)), [serviceData.contactInquiries, serviceQuoteType, serviceStatus, serviceSearch])

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage all HealthCare Services
</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={testApiConnection}
                className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200"
              >
                Test API
              </button>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Administrator</p>
                <p className="text-xs text-gray-500">Last login: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">A</span>
              </div>
              <button
                onClick={() => setShowAdminSettings(true)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center space-x-2"
              >
                <CogIcon className="h-4 w-4" />
                <span>Admin Settings</span>
              </button>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 flex items-center space-x-2"
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Admin Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {adminQuickActions.map((action) => (
              <motion.div
                key={action.name}
                whileHover={{ scale: 1.02 }}
                onClick={action.action}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all cursor-pointer relative"
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-${action.color}-100`}>
                    <action.icon className={`h-6 w-6 text-${action.color}-600`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                  {action.count !== null && action.count > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                      {action.count}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Analytics - Admin Overview */}
        {statistics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Business Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">{statistics.totalQuotes}</div>
                    <div className="text-blue-100">Total Service Request</div>
                  </div>
                  <DocumentTextIcon className="h-8 w-8 text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">{statistics.quotesThisMonth}</div>
                    <div className="text-green-100">Request This Month</div>
                  </div>
                  <ArrowTrendingUpIcon className="h-8 w-8 text-green-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-sm p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">{statistics.quotesThisWeek}</div>
                    <div className="text-yellow-100">This Week</div>
                  </div>
                  <CalendarIcon className="h-8 w-8 text-yellow-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-sm p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">{statistics.averageQuotesPerDay}</div>
                    <div className="text-purple-100">Daily Average</div>
                  </div>
                  <ChartBarIcon className="h-8 w-8 text-purple-200" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        

        {/* Service Details Modal */}
        {serviceDetailsModalOpen && selectedServiceDetails && (
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-lg font-medium text-gray-900">
                    {selectedServiceDetails.serviceType === 'claim' && `Claim Details - ${selectedServiceDetails.claimNumber}`}
                    {selectedServiceDetails.serviceType === 'policyReview' && `Policy Review Details - ${selectedServiceDetails.reviewNumber}`}
                    {selectedServiceDetails.serviceType === 'contactUpdate' && `Contact Update Details - ${selectedServiceDetails.updateNumber}`}
                    {selectedServiceDetails.serviceType === 'proofOfInsurance' && `Proof of Insurance Details - ${selectedServiceDetails.requestNumber}`}
                    {selectedServiceDetails.serviceType === 'consultation' && `Consultation Details - ${selectedServiceDetails.consultationNumber}`}
                    {selectedServiceDetails.serviceType === 'contactInquiry' && `Contact Inquiry Details - ${selectedServiceDetails.contactNumber}`}
                  </h3>
                  <button
                    onClick={() => {
                      setServiceDetailsModalOpen(false)
                      setSelectedServiceDetails(null)
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4">
                  {loadingServiceDetails ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Loading service details...</span>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Basic Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-gray-900 border-b pb-2">Basic Information</h4>
                          <div className="space-y-2">
                            <div><span className="font-medium">Customer:</span> {selectedServiceDetails.firstName} {selectedServiceDetails.lastName}</div>
                            <div><span className="font-medium">Email:</span> {selectedServiceDetails.email}</div>
                            <div><span className="font-medium">Phone:</span> {selectedServiceDetails.phoneNumber}</div>
                            <div><span className="font-medium">Status:</span>
                              <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                selectedServiceDetails.status === 'Pending' || selectedServiceDetails.status === 'Requested' ? 'bg-yellow-100 text-yellow-800' :
                                selectedServiceDetails.status === 'Processing' || selectedServiceDetails.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                selectedServiceDetails.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {selectedServiceDetails.status}
                              </span>
                            </div>
                            <div><span className="font-medium">Created:</span> {new Date(selectedServiceDetails.createdDate).toLocaleDateString()}</div>
                            {selectedServiceDetails.updatedDate && (
                              <div><span className="font-medium">Updated:</span> {new Date(selectedServiceDetails.updatedDate).toLocaleDateString()}</div>
                            )}
                          </div>
                        </div>

                        {/* Service Specific Information */}
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-gray-900 border-b pb-2">Service Information</h4>
                          <div className="space-y-2">
                            {/* Claim Specific Fields */}
                            {selectedServiceDetails.serviceType === 'claim' && (
                              <>
                                <div><span className="font-medium">Claim Type:</span> {selectedServiceDetails.claimType}</div>
                                <div><span className="font-medium">Insurance Carrier:</span> {selectedServiceDetails.insuranceCarrier}</div>
                                <div><span className="font-medium">Policy Number:</span> {selectedServiceDetails.policyNumber}</div>
                              </>
                            )}

                            {/* Policy Review Specific Fields */}
                            {selectedServiceDetails.serviceType === 'policyReview' && (
                              <>
                                <div><span className="font-medium">Review Method:</span> {selectedServiceDetails.reviewMethod}</div>
                                {selectedServiceDetails.scheduledDate && (
                                  <div><span className="font-medium">Scheduled Date:</span> {new Date(selectedServiceDetails.scheduledDate).toLocaleDateString()}</div>
                                )}
                              </>
                            )}

                            {/* Contact Update Specific Fields */}
                            {selectedServiceDetails.serviceType === 'contactUpdate' && (
                              <>
                                <div><span className="font-medium">Change Type:</span> {selectedServiceDetails.changeType}</div>
                                {selectedServiceDetails.processedDate && (
                                  <div><span className="font-medium">Processed Date:</span> {new Date(selectedServiceDetails.processedDate).toLocaleDateString()}</div>
                                )}
                              </>
                            )}

                            {/* Proof of Insurance Specific Fields */}
                            {selectedServiceDetails.serviceType === 'proofOfInsurance' && (
                              <>
                                <div><span className="font-medium">Proof Type:</span> {selectedServiceDetails.proofType}</div>
                                <div><span className="font-medium">Insurance Carrier:</span> {selectedServiceDetails.insuranceCarrier}</div>
                                <div><span className="font-medium">Policy Number:</span> {selectedServiceDetails.policyNumber}</div>
                                {selectedServiceDetails.processedDate && (
                                  <div><span className="font-medium">Processed Date:</span> {new Date(selectedServiceDetails.processedDate).toLocaleDateString()}</div>
                                )}
                              </>
                            )}

                            {/* Consultation Specific Fields */}
                            {selectedServiceDetails.serviceType === 'consultation' && (
                              <>
                                <div><span className="font-medium">Consultation Type:</span> {selectedServiceDetails.consultationType}</div>
                                {selectedServiceDetails.scheduledDate && (
                                  <div><span className="font-medium">Scheduled Date:</span> {new Date(selectedServiceDetails.scheduledDate).toLocaleDateString()}</div>
                                )}
                                {selectedServiceDetails.completedDate && (
                                  <div><span className="font-medium">Completed Date:</span> {new Date(selectedServiceDetails.completedDate).toLocaleDateString()}</div>
                                )}
                                {selectedServiceDetails.assignedAgent && (
                                  <div><span className="font-medium">Assigned Agent:</span> {selectedServiceDetails.assignedAgent}</div>
                                )}
                              </>
                            )}

                            {/* Contact Inquiry Specific Fields */}
                            {selectedServiceDetails.serviceType === 'contactInquiry' && (
                              <>
                                <div><span className="font-medium">Subject:</span> {selectedServiceDetails.subject}</div>
                                {selectedServiceDetails.inquiryType && (
                                  <div><span className="font-medium">Inquiry Type:</span> {selectedServiceDetails.inquiryType}</div>
                                )}
                                {selectedServiceDetails.phoneNumber && (
                                  <div><span className="font-medium">Phone Number:</span> {selectedServiceDetails.phoneNumber}</div>
                                )}
                                {selectedServiceDetails.processedDate && (
                                  <div><span className="font-medium">Processed Date:</span> {new Date(selectedServiceDetails.processedDate).toLocaleDateString()}</div>
                                )}
                                {selectedServiceDetails.assignedTo && (
                                  <div><span className="font-medium">Assigned To:</span> {selectedServiceDetails.assignedTo}</div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description/Details Section */}
                      {(selectedServiceDetails.incidentDescription || selectedServiceDetails.discussionTopics ||
                        selectedServiceDetails.changeDescription || selectedServiceDetails.requestDescription || selectedServiceDetails.message) && (
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-gray-900 border-b pb-2">
                            {selectedServiceDetails.serviceType === 'claim' && 'Incident Description'}
                            {selectedServiceDetails.serviceType === 'policyReview' && 'Discussion Topics'}
                            {selectedServiceDetails.serviceType === 'contactUpdate' && 'Change Description'}
                            {selectedServiceDetails.serviceType === 'proofOfInsurance' && 'Request Description'}
                            {selectedServiceDetails.serviceType === 'consultation' && 'Discussion Topics'}
                            {selectedServiceDetails.serviceType === 'contactInquiry' && 'Message'}
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              {selectedServiceDetails.incidentDescription ||
                               selectedServiceDetails.discussionTopics ||
                               selectedServiceDetails.changeDescription ||
                               selectedServiceDetails.requestDescription ||
                               selectedServiceDetails.message}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Notes Section */}
                      {(selectedServiceDetails.notes || selectedServiceDetails.processingNotes || selectedServiceDetails.additionalComments) && (
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-gray-900 border-b pb-2">Notes</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              {selectedServiceDetails.notes || selectedServiceDetails.processingNotes || selectedServiceDetails.additionalComments}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end pt-4 border-t mt-4 space-x-3">
                  <button
                    onClick={() => window.open(`mailto:${selectedServiceDetails.email}?subject=Regarding Your Service Request`, '_blank')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Contact Customer
                  </button>
                  <button
                    onClick={() => {
                      setServiceDetailsModalOpen(false)
                      setSelectedServiceDetails(null)
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quote Details Modal */}
        {selectedQuoteDetails && (
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-lg font-medium text-gray-900">
                    Quote Details - {selectedQuoteDetails.quoteNumber}
                  </h3>
                  <button
                    onClick={() => setSelectedQuoteDetails(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2">Basic Information</h4>
                      <div className="space-y-2">
                        <div><span className="font-medium">Quote Type:</span> {getQuoteTypeDisplayName(selectedQuoteDetails.quoteType)}</div>
                        <div><span className="font-medium">Customer:</span> {selectedQuoteDetails.firstName} {selectedQuoteDetails.lastName}</div>
                        <div><span className="font-medium">Email:</span> {selectedQuoteDetails.email}</div>
                        <div><span className="font-medium">Phone:</span> {selectedQuoteDetails.phoneNumber}</div>
                        <div><span className="font-medium">Address:</span> {selectedQuoteDetails.address}</div>
                        <div><span className="font-medium">Location:</span> {selectedQuoteDetails.city}, {selectedQuoteDetails.state} {selectedQuoteDetails.zipCode}</div>
                        <div><span className="font-medium">Status:</span>
                          <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedQuoteDetails.status)}`}>
                            {selectedQuoteDetails.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Insurance Information */}
                    <div className="space-y-4">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2">Insurance Information</h4>
                      <div className="space-y-2">
                        {selectedQuoteDetails.currentInsuranceCompany && (
                          <div><span className="font-medium">Current Insurer:</span> {selectedQuoteDetails.currentInsuranceCompany}</div>
                        )}
                        {selectedQuoteDetails.continuousCoverage && (
                          <div><span className="font-medium">Continuous Coverage:</span> {selectedQuoteDetails.continuousCoverage}</div>
                        )}
                        {selectedQuoteDetails.policyExpiresIn && (
                          <div><span className="font-medium">Policy Expires:</span> {selectedQuoteDetails.policyExpiresIn}</div>
                        )}
                        {selectedQuoteDetails.coverageDesired && (
                          <div><span className="font-medium">Coverage Desired:</span> {selectedQuoteDetails.coverageDesired}</div>
                        )}
                        {selectedQuoteDetails.claimsIn3Years && (
                          <div><span className="font-medium">Claims (3 years):</span> {selectedQuoteDetails.claimsIn3Years}</div>
                        )}
                        {selectedQuoteDetails.ticketsIn3Years && (
                          <div><span className="font-medium">Tickets (3 years):</span> {selectedQuoteDetails.ticketsIn3Years}</div>
                        )}
                        {selectedQuoteDetails.whenToStart && (
                          <div><span className="font-medium">Start Date:</span> {selectedQuoteDetails.whenToStart}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Vehicles Section (for Auto, Boat, Motorcycle) */}
                  {selectedQuoteDetails.vehicles && selectedQuoteDetails.vehicles.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Vehicles</h4>
                      <div className="space-y-4">
                        {selectedQuoteDetails.vehicles.map((vehicle: any, index: number) => (
                          <div key={vehicle.id || index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <span className="font-medium">Vehicle {index + 1}:</span> {vehicle.year} {vehicle.make} {vehicle.model}
                                {vehicle.isPrimary && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Primary</span>}
                              </div>
                              {vehicle.annualMileage && (
                                <div><span className="font-medium">Annual Mileage:</span> {vehicle.annualMileage}</div>
                              )}
                              {vehicle.driveToWorkSchool && (
                                <div><span className="font-medium">Drive to Work/School:</span> {vehicle.driveToWorkSchool}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Drivers Section (for Auto, Boat, Motorcycle) */}
                  {selectedQuoteDetails.drivers && selectedQuoteDetails.drivers.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Drivers</h4>
                      <div className="space-y-4">
                        {selectedQuoteDetails.drivers.map((driver: any, index: number) => (
                          <div key={driver.id || index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <span className="font-medium">Driver {index + 1}:</span> {driver.name}
                                {driver.isPrimary && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Primary</span>}
                              </div>
                              <div><span className="font-medium">Gender:</span> {driver.gender}</div>
                              <div><span className="font-medium">Date of Birth:</span> {driver.dateOfBirth}</div>
                              <div><span className="font-medium">Married:</span> {driver.married}</div>
                              {driver.status && (
                                <div><span className="font-medium">Status:</span> {driver.status}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Business Quote Specific Details */}
                  {selectedQuoteDetails.businessQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Business Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Business Name:</span> {selectedQuoteDetails.businessQuote.businessName}</div>
                          <div><span className="font-medium">Years in Business:</span> {selectedQuoteDetails.businessQuote.yearsInBusiness}</div>
                          <div><span className="font-medium">Legal Entity:</span> {selectedQuoteDetails.businessQuote.legalEntity}</div>
                          <div><span className="font-medium">Partners/Owners:</span> {selectedQuoteDetails.businessQuote.partnersOwners}</div>
                          <div><span className="font-medium">Full-time Employees:</span> {selectedQuoteDetails.businessQuote.fullTimeEmployees}</div>
                          <div><span className="font-medium">Part-time Employees:</span> {selectedQuoteDetails.businessQuote.partTimeEmployees}</div>
                          <div><span className="font-medium">Sub-contractors:</span> {selectedQuoteDetails.businessQuote.subContractors}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">One-time/Seasonal:</span> {selectedQuoteDetails.businessQuote.oneTimeOrSeasonal}</div>
                          <div><span className="font-medium">Annual Revenue:</span> {selectedQuoteDetails.businessQuote.annualRevenue}</div>
                          <div><span className="font-medium">Replace Existing Policy:</span> {selectedQuoteDetails.businessQuote.replaceExistingPolicy}</div>
                          {selectedQuoteDetails.businessQuote.businessDescription && (
                            <div className="col-span-2">
                              <span className="font-medium">Business Description:</span>
                              <p className="mt-1 text-sm text-gray-700 bg-gray-50 p-3 rounded">{selectedQuoteDetails.businessQuote.businessDescription}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Insurance Types */}
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-3">Insurance Types Requested:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {selectedQuoteDetails.businessQuote.generalLiability && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">General Liability</span>}
                          {selectedQuoteDetails.businessQuote.commercialAuto && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Commercial Auto</span>}
                          {selectedQuoteDetails.businessQuote.commercialProperty && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Commercial Property</span>}
                          {selectedQuoteDetails.businessQuote.cyberLiability && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Cyber Liability</span>}
                          {selectedQuoteDetails.businessQuote.professionalLiability && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Professional Liability</span>}
                          {selectedQuoteDetails.businessQuote.directorsOfficersLiability && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Directors & Officers</span>}
                          {selectedQuoteDetails.businessQuote.businessOwnersPackage && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Business Owners Package</span>}
                          {selectedQuoteDetails.businessQuote.workersCompensation && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Workers Compensation</span>}
                          {selectedQuoteDetails.businessQuote.commercialCrime && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Commercial Crime</span>}
                          {selectedQuoteDetails.businessQuote.groupHealthInsurance && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Group Health</span>}
                          {selectedQuoteDetails.businessQuote.groupLifeInsurance && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Group Life</span>}
                          {selectedQuoteDetails.businessQuote.groupDisabilityInsurance && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Group Disability</span>}
                          {selectedQuoteDetails.businessQuote.retirementPlans && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Retirement Plans</span>}
                          {selectedQuoteDetails.businessQuote.supplementalPlans && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Supplemental Plans</span>}
                          {selectedQuoteDetails.businessQuote.keyManLifeInsurance && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Key Man Life</span>}
                          {selectedQuoteDetails.businessQuote.keyManDisabilityInsurance && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Key Man Disability</span>}
                          {selectedQuoteDetails.businessQuote.deferredCompensation && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Deferred Compensation</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Home Quote Specific Details */}
                  {selectedQuoteDetails.homeQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Home Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Home Type:</span> {selectedQuoteDetails.homeQuote.homeType}</div>
                          <div><span className="font-medium">Year Built:</span> {selectedQuoteDetails.homeQuote.yearBuilt}</div>
                          <div><span className="font-medium">Square Footage:</span> {selectedQuoteDetails.homeQuote.squareFootage}</div>
                          <div><span className="font-medium">Construction Type:</span> {selectedQuoteDetails.homeQuote.constructionType}</div>
                          <div><span className="font-medium">Primary Heating:</span> {selectedQuoteDetails.homeQuote.primaryHeating}</div>
                          <div><span className="font-medium">Foundation:</span> {selectedQuoteDetails.homeQuote.foundation}</div>
                          <div><span className="font-medium">Bedrooms:</span> {selectedQuoteDetails.homeQuote.bedrooms}</div>
                          <div><span className="font-medium">Bathrooms:</span> {selectedQuoteDetails.homeQuote.bathrooms}</div>
                          <div><span className="font-medium">Stories:</span> {selectedQuoteDetails.homeQuote.stories}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Roof Type:</span> {selectedQuoteDetails.homeQuote.roofType}</div>
                          <div><span className="font-medium">Roof Age:</span> {selectedQuoteDetails.homeQuote.roofAge}</div>
                          <div><span className="font-medium">Garage Type:</span> {selectedQuoteDetails.homeQuote.garageType}</div>
                          <div><span className="font-medium">Flood Plan:</span> {selectedQuoteDetails.homeQuote.floodPlan}</div>
                          <div><span className="font-medium">Security System:</span> {selectedQuoteDetails.homeQuote.securitySystem}</div>
                          <div><span className="font-medium">Municipal Location:</span> {selectedQuoteDetails.homeQuote.municipalLocation}</div>
                          <div><span className="font-medium">Fire Alarm:</span> {selectedQuoteDetails.homeQuote.fireAlarm}</div>
                          {selectedQuoteDetails.homeQuote.dogBreeds && (
                            <div><span className="font-medium">Dog Breeds:</span> {selectedQuoteDetails.homeQuote.dogBreeds}</div>
                          )}
                        </div>
                      </div>

                      {/* Property Features */}
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-3">Property Features:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {selectedQuoteDetails.homeQuote.deadBolts && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Dead Bolts</span>}
                          {selectedQuoteDetails.homeQuote.fireExtinguishers && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fire Extinguishers</span>}
                          {selectedQuoteDetails.homeQuote.trampoline && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Trampoline</span>}
                          {selectedQuoteDetails.homeQuote.coveredDeckPatio && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Covered Deck/Patio</span>}
                          {selectedQuoteDetails.homeQuote.swimmingPool && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Swimming Pool</span>}
                        </div>
                      </div>

                      {/* Policy Information */}
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-3">Policy Information:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div><span className="font-medium">Replacement Cost:</span> {selectedQuoteDetails.homeQuote.replacementCost}</div>
                          <div><span className="font-medium">Personal Liability:</span> {selectedQuoteDetails.homeQuote.personalLiability}</div>
                          <div><span className="font-medium">Desired Deductible:</span> {selectedQuoteDetails.homeQuote.desiredDeductible}</div>
                          <div><span className="font-medium">Credit Rating:</span> {selectedQuoteDetails.homeQuote.creditRating}</div>
                          <div><span className="font-medium">Reported Claims:</span> {selectedQuoteDetails.homeQuote.reportedClaims}</div>
                          <div><span className="font-medium">Replace Existing Policy:</span> {selectedQuoteDetails.homeQuote.replaceExistingPolicy}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Flood Quote Specific Details */}
                  {selectedQuoteDetails.floodQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Flood Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Policy Owner:</span> {selectedQuoteDetails.floodQuote.policyOwner}</div>
                          <div><span className="font-medium">Home Type:</span> {selectedQuoteDetails.floodQuote.homeType}</div>
                          <div><span className="font-medium">Building Purpose:</span> {selectedQuoteDetails.floodQuote.buildingPurpose}</div>
                          <div><span className="font-medium">Renting Home:</span> {selectedQuoteDetails.floodQuote.rentingHome}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Previous Flood Claims:</span> {selectedQuoteDetails.floodQuote.floodClaims}</div>
                          <div><span className="font-medium">Desired Contents Coverage:</span> {selectedQuoteDetails.floodQuote.desiredContents}</div>
                          <div><span className="font-medium">Desired Building Coverage:</span> {selectedQuoteDetails.floodQuote.desiredBuilding}</div>
                        </div>
                      </div>
                      {selectedQuoteDetails.floodQuote.comments && (
                        <div className="mt-4">
                          <span className="font-medium">Additional Comments:</span>
                          <p className="mt-1 text-sm text-gray-700 bg-gray-50 p-3 rounded">{selectedQuoteDetails.floodQuote.comments}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Life Insurance Quote Specific Details */}
                  {selectedQuoteDetails.lifeInsuranceQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Life Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Coverage Type:</span> {selectedQuoteDetails.lifeInsuranceQuote.coverageType}</div>
                          <div><span className="font-medium">Amount of Coverage:</span> {selectedQuoteDetails.lifeInsuranceQuote.amountOfCoverage}</div>
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.lifeInsuranceQuote.policyStartDate).toLocaleDateString()}</div>
                          <div><span className="font-medium">Birthdate:</span> {new Date(selectedQuoteDetails.lifeInsuranceQuote.birthdate).toLocaleDateString()}</div>
                          <div><span className="font-medium">Height:</span> {selectedQuoteDetails.lifeInsuranceQuote.height}</div>
                          <div><span className="font-medium">Weight:</span> {selectedQuoteDetails.lifeInsuranceQuote.weight}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Gender:</span> {selectedQuoteDetails.lifeInsuranceQuote.gender}</div>
                          <div><span className="font-medium">Tobacco Use:</span> {selectedQuoteDetails.lifeInsuranceQuote.tobaccoUse}</div>
                          <div><span className="font-medium">Major Diseases:</span> {selectedQuoteDetails.lifeInsuranceQuote.majorDiseases}</div>
                          <div><span className="font-medium">Stroke/Heart Attack:</span> {selectedQuoteDetails.lifeInsuranceQuote.strokeHeartAttack}</div>
                          <div><span className="font-medium">Cancer Diagnosis:</span> {selectedQuoteDetails.lifeInsuranceQuote.cancerDiagnosis}</div>
                          <div><span className="font-medium">Business/Hobby:</span> {selectedQuoteDetails.lifeInsuranceQuote.businessHobby}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Disability Insurance Quote Specific Details */}
                  {selectedQuoteDetails.disabilityInsuranceQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Disability Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Occupation:</span> {selectedQuoteDetails.disabilityInsuranceQuote.occupation}</div>
                          <div><span className="font-medium">Birthdate:</span> {new Date(selectedQuoteDetails.disabilityInsuranceQuote.birthdate).toLocaleDateString()}</div>
                          <div><span className="font-medium">Monthly Income:</span> {selectedQuoteDetails.disabilityInsuranceQuote.monthlyIncome}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Gender:</span> {selectedQuoteDetails.disabilityInsuranceQuote.gender}</div>
                          <div><span className="font-medium">Tobacco Use:</span> {selectedQuoteDetails.disabilityInsuranceQuote.tobaccoUse}</div>
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.disabilityInsuranceQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Vision Quote Specific Details */}
                  {selectedQuoteDetails.visionQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Vision Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Number of People:</span> {selectedQuoteDetails.visionQuote.numberOfPeople}</div>
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.visionQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dental Quote Specific Details */}
                  {selectedQuoteDetails.dentalQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Dental Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Number of People:</span> {selectedQuoteDetails.dentalQuote.numberOfPeople}</div>
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.dentalQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Records Needed:</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {selectedQuoteDetails.dentalQuote.dentalRecords && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Dental Records</span>}
                            {selectedQuoteDetails.dentalQuote.xrayImages && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">X-ray Images</span>}
                            {selectedQuoteDetails.dentalQuote.treatmentHistory && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Treatment History</span>}
                            {selectedQuoteDetails.dentalQuote.insuranceCards && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Insurance Cards</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Renters Quote Specific Details */}
                  {selectedQuoteDetails.rentersQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Renters Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Type of Home:</span> {selectedQuoteDetails.rentersQuote.typeOfHome}</div>
                          <div><span className="font-medium">Square Footage:</span> {selectedQuoteDetails.rentersQuote.estimatedSquareFootage}</div>
                          <div><span className="font-medium">Number of Rooms:</span> {selectedQuoteDetails.rentersQuote.totalNumberOfRooms}</div>
                          {selectedQuoteDetails.rentersQuote.dogBreeds && (
                            <div><span className="font-medium">Dog Breeds:</span> {selectedQuoteDetails.rentersQuote.dogBreeds}</div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Replacement Value:</span> {selectedQuoteDetails.rentersQuote.replacementValue}</div>
                          <div><span className="font-medium">Personal Liability:</span> {selectedQuoteDetails.rentersQuote.personalLiabilityCoverage}</div>
                          <div><span className="font-medium">Desired Deductible:</span> {selectedQuoteDetails.rentersQuote.desiredDeductible}</div>
                          <div><span className="font-medium">Credit Rating:</span> {selectedQuoteDetails.rentersQuote.creditRating}</div>
                          <div><span className="font-medium">Reported Claims:</span> {selectedQuoteDetails.rentersQuote.reportedClaims}</div>
                          <div><span className="font-medium">Replace Existing Policy:</span> {selectedQuoteDetails.rentersQuote.replaceExistingPolicy}</div>
                        </div>
                      </div>

                      {/* Property Features */}
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-3">Property Features:</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {selectedQuoteDetails.rentersQuote.deadBolts && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Dead Bolts</span>}
                          {selectedQuoteDetails.rentersQuote.fireExtinguishers && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fire Extinguishers</span>}
                          {selectedQuoteDetails.rentersQuote.trampoline && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Trampoline</span>}
                          {selectedQuoteDetails.rentersQuote.coveredDeckPatio && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Covered Deck/Patio</span>}
                          {selectedQuoteDetails.rentersQuote.swimmingPool && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Swimming Pool</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Landlords Quote Specific Details */}
                  {selectedQuoteDetails.landlordsQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Landlords Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Number of Units:</span> {selectedQuoteDetails.landlordsQuote.numberOfUnits}</div>
                          <div><span className="font-medium">Total Square Feet:</span> {selectedQuoteDetails.landlordsQuote.totalSquareFeet}</div>
                        </div>
                        <div className="space-y-3">
                          {selectedQuoteDetails.landlordsQuote.message && (
                            <div><span className="font-medium">Message:</span> {selectedQuoteDetails.landlordsQuote.message}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BOP Quote Specific Details */}
                  {selectedQuoteDetails.bopQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Business Owners Policy (BOP) Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Business Name:</span> {selectedQuoteDetails.bopQuote.businessName}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Business Description:</span> {selectedQuoteDetails.bopQuote.businessDescription}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Workers Comp Quote Specific Details */}
                  {selectedQuoteDetails.workersCompQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Workers Compensation Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Business Name:</span> {selectedQuoteDetails.workersCompQuote.businessName}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Number of Employees:</span> {selectedQuoteDetails.workersCompQuote.numberOfEmployees}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Health Quote Specific Details */}
                  {selectedQuoteDetails.healthQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Health Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Gender:</span> {selectedQuoteDetails.healthQuote.gender}</div>
                          <div><span className="font-medium">Date of Birth:</span> {new Date(selectedQuoteDetails.healthQuote.dateOfBirth).toLocaleDateString()}</div>
                          <div><span className="font-medium">Smoker:</span> {selectedQuoteDetails.healthQuote.smoker}</div>
                          <div><span className="font-medium">Pregnant:</span> {selectedQuoteDetails.healthQuote.pregnant}</div>
                          <div><span className="font-medium">Dependents:</span> {selectedQuoteDetails.healthQuote.dependents}</div>
                          <div><span className="font-medium">Annual Household Income:</span> {selectedQuoteDetails.healthQuote.annualHouseholdIncome}</div>
                        </div>
                        <div className="space-y-3">
                          {selectedQuoteDetails.healthQuote.spouseFirstName && (
                            <>
                              <div><span className="font-medium">Spouse Name:</span> {selectedQuoteDetails.healthQuote.spouseFirstName} {selectedQuoteDetails.healthQuote.spouseLastName}</div>
                              <div><span className="font-medium">Spouse Gender:</span> {selectedQuoteDetails.healthQuote.spouseGender}</div>
                              {selectedQuoteDetails.healthQuote.spouseDateOfBirth && (
                                <div><span className="font-medium">Spouse Date of Birth:</span> {new Date(selectedQuoteDetails.healthQuote.spouseDateOfBirth).toLocaleDateString()}</div>
                              )}
                              <div><span className="font-medium">Spouse Smoker:</span> {selectedQuoteDetails.healthQuote.spouseSmoker}</div>
                              <div><span className="font-medium">Spouse Pregnant:</span> {selectedQuoteDetails.healthQuote.spousePregnant}</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Umbrella Insurance Quote Specific Details */}
                  {selectedQuoteDetails.umbrellaInsuranceQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Umbrella Insurance Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Vehicles Owned:</span> {selectedQuoteDetails.umbrellaInsuranceQuote.vehiclesOwned}</div>
                          <div><span className="font-medium">Properties Owned:</span> {selectedQuoteDetails.umbrellaInsuranceQuote.propertiesOwned}</div>
                          <div><span className="font-medium">Household Accidents:</span> {selectedQuoteDetails.umbrellaInsuranceQuote.householdAccidents}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Amount of Coverage:</span> {selectedQuoteDetails.umbrellaInsuranceQuote.amountOfCoverage}</div>
                          <div><span className="font-medium">Traffic Tickets:</span> {selectedQuoteDetails.umbrellaInsuranceQuote.trafficTickets}</div>
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.umbrellaInsuranceQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Medicare Advantage Quote Specific Details */}
                  {selectedQuoteDetails.medicareAdvantageQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Medicare Advantage Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.medicareAdvantageQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Date of Birth:</span> {new Date(selectedQuoteDetails.medicareAdvantageQuote.dateOfBirth).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Medicare Supplement Quote Specific Details */}
                  {selectedQuoteDetails.medicareSupplementQuote && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Medicare Supplement Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div><span className="font-medium">Policy Start Date:</span> {new Date(selectedQuoteDetails.medicareSupplementQuote.policyStartDate).toLocaleDateString()}</div>
                        </div>
                        <div className="space-y-3">
                          <div><span className="font-medium">Date of Birth:</span> {new Date(selectedQuoteDetails.medicareSupplementQuote.dateOfBirth).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Comments */}
                  {selectedQuoteDetails.additionalComments && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Additional Comments</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">{selectedQuoteDetails.additionalComments}</p>
                      </div>
                    </div>
                  )}

                  {/* Timestamps */}
                  <div className="mt-6">
                    <h4 className="text-md font-medium text-gray-900 border-b pb-2 mb-4">Timeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><span className="font-medium">Created:</span> {formatDate(selectedQuoteDetails.createdDate)}</div>
                      {selectedQuoteDetails.updatedDate && (
                        <div><span className="font-medium">Last Updated:</span> {formatDate(selectedQuoteDetails.updatedDate)}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end pt-4 border-t mt-4 space-x-3">
                  <button
                    onClick={() => window.open(`mailto:${selectedQuoteDetails.email}?subject=Regarding Your Quote ${selectedQuoteDetails.quoteNumber}`, '_blank')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Contact Customer
                  </button>
                  <button
                    onClick={() => setSelectedQuoteDetails(null)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Management Section */}
        {activeManagementSection === 'services' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Service Management</h2>
                <p className="text-sm text-gray-600">Manage customer service requests and inquiries</p>
              </div>
              {/* <div className="flex items-center ml-143 space-x-4">
                  <button
                    onClick={exportQuotesToExcel}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    Export to Excel
                  </button>
                  </div> */}
              <button
                onClick={fetchServiceData}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ArrowPathIcon className="h-4 w-4 mr-2" />
                Refresh
              </button>
            </div>

            {/* Service Tabs */}
            <div className="border-b border-gray-200  mb-6">
              <nav className="-mb-px flex space-x-8">
                {[
                  // { id: 'claims', name: 'Claims', count: serviceData.claims?.length || 0 },
                  // { id: 'policyReviews', name: 'Policy Reviews', count: serviceData.policyReviews?.length || 0 },
                  // { id: 'contactUpdates', name: 'Contact Updates', count: serviceData.contactUpdates?.length || 0 },
                  // { id: 'proofInsurance', name: 'Proof of Insurance', count: serviceData.proofOfInsurance?.length || 0 },
                  // { id: 'consultations', name: 'Consultations', count: serviceData.consultations?.length || 0 },
                  { id: 'contactInquiries', name: 'Service Inquiries', count: serviceData.contactInquiries?.length || 0 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveServiceTab(tab.id)}
                    className={`${
                      activeServiceTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                  >
                    <span>{tab.name}</span>
                    <span className={`${
                      activeServiceTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="service-quote-type" className="block text-sm font-medium text-gray-700 mb-1">Services Type</label>
                <select
                  id="service-quote-type"
                  value={serviceQuoteType}
                  onChange={(e) => setServiceQuoteType(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="All">All Service Types</option>
                  {Object.values(QUOTE_TYPES).map((type) => (
                    <option key={type} value={type}>{getQuoteTypeDisplayName(type)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service-status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  id="service-status"
                  value={serviceStatus}
                  onChange={(e) => setServiceStatus(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  {/* <option value="Requested">Requested</option> */}
                  <option value="Scheduled">Scheduled</option>
                  {/* <option value="Processing">Processing</option> */}
                  {/* <option value="In Progress">In Progress</option> */}
                  {/* <option value="Completed">Completed</option> */}
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Cancelled</option>
                  <option value="Spam">Spam</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="service-search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="service-search"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    placeholder="Search by name, email, phone, number, subject..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Service Content */}
            {loadingServices ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Loading services...</span>
              </div>
            ) : (
              <div>
                {activeServiceTab === 'quotes' && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Customer Quotes are displayed in the section above.</p>
                  </div>
                )}

                {activeServiceTab === 'claims' && (
                  <div className="overflow-x-auto ">
                    <table className="min-w-full divide-y  divide-gray-200">
                      <thead className="bg-gray-50 ">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inquiry Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance Info</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white  divide-y divide-gray-200">
                        {filteredClaims.length > 0 ? filteredClaims.map((claim: any) => (
                          <tr key={claim.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{claim.claimNumber}</div>
                                  <div className="text-sm text-gray-500">{claim.claimType}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{claim.firstName} {claim.lastName}</div>
                              <div className="text-sm text-gray-500">{claim.email}</div>
                              <div className="text-sm text-gray-500">{claim.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{claim.insuranceCarrier}</div>
                              <div className="text-sm text-gray-500">Policy: {claim.policyNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                claim.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                claim.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                claim.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {claim.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(claim.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('claim', claim.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              <button className="text-green-600 hover:text-green-900">Contact</button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No claims found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeServiceTab === 'policyReviews' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review Method</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPolicyReviews.length > 0 ? filteredPolicyReviews.map((review: any) => (
                          <tr key={review.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <DocumentTextIcon className="h-5 w-5 text-blue-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{review.reviewNumber}</div>
                                  <div className="text-sm text-gray-500">Policy Review</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{review.firstName} {review.lastName}</div>
                              <div className="text-sm text-gray-500">{review.email}</div>
                              <div className="text-sm text-gray-500">{review.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{review.reviewMethod}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                review.status === 'Requested' ? 'bg-yellow-100 text-yellow-800' :
                                review.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                review.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {review.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(review.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('policyReview', review.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              <button className="text-green-600 hover:text-green-900">Contact</button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No policy reviews found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeServiceTab === 'contactUpdates' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredContactUpdates.length > 0 ? filteredContactUpdates.map((update: any) => (
                          <tr key={update.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <PencilIcon className="h-5 w-5 text-orange-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{update.updateNumber}</div>
                                  <div className="text-sm text-gray-500">Contact Update</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{update.firstName} {update.lastName}</div>
                              <div className="text-sm text-gray-500">{update.email}</div>
                              <div className="text-sm text-gray-500">{update.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{update.changeType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                update.status === 'Requested' ? 'bg-yellow-100 text-yellow-800' :
                                update.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                update.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {update.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(update.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('contactUpdate', update.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              <button className="text-green-600 hover:text-green-900">Contact</button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No contact updates found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeServiceTab === 'proofInsurance' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredProofOfInsurance.length > 0 ? filteredProofOfInsurance.map((proof: any) => (
                          <tr key={proof.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <DocumentTextIcon className="h-5 w-5 text-purple-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{proof.requestNumber}</div>
                                  <div className="text-sm text-gray-500">Proof of Insurance</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{proof.firstName} {proof.lastName}</div>
                              <div className="text-sm text-gray-500">{proof.email}</div>
                              <div className="text-sm text-gray-500">{proof.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{proof.insuranceType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                proof.status === 'Requested' ? 'bg-yellow-100 text-yellow-800' :
                                proof.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                proof.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {proof.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(proof.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('proofOfInsurance', proof.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              <button className="text-green-600 hover:text-green-900">Contact</button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No proof of insurance requests found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeServiceTab === 'consultations' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consultation Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredConsultations.length > 0 ? filteredConsultations.map((consultation: any) => (
                          <tr key={consultation.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{consultation.consultationNumber}</div>
                                  <div className="text-sm text-gray-500">Free Consultation</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{consultation.firstName} {consultation.lastName}</div>
                              <div className="text-sm text-gray-500">{consultation.email}</div>
                              <div className="text-sm text-gray-500">{consultation.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{consultation.consultationType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                consultation.status === 'Requested' ? 'bg-yellow-100 text-yellow-800' :
                                consultation.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                consultation.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {consultation.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">
                                {new Date(consultation.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('consultation', consultation.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              <button className="text-green-600 hover:text-green-900">Contact</button>
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No consultations found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeServiceTab === 'contactInquiries' && (
                  <div className="overflow-x-auto ">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inquiry Details</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject & Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredContactInquiries.length > 0 ? filteredContactInquiries.map((inquiry: any) => (
                          <tr key={inquiry.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-purple-500 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{inquiry.contactNumber}</div>
                                  <div className="text-sm text-gray-500">Contact Inquiry</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{inquiry.firstName} {inquiry.lastName}</div>
                              <div className="text-sm text-gray-500">{inquiry.email}</div>
                              {inquiry.phoneNumber && (
                                <div className="text-sm text-gray-500">{inquiry.phoneNumber}</div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{inquiry.subject}</div>
                              {inquiry.inquiryType && (
                                <div className="text-sm text-gray-500">{inquiry.inquiryType}</div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-col">
                                <select
                                  value={inquiry.status}
                                  onChange={async (e) => {
                                    const next = e.target.value
                                    try {
                                      const res = await fetch(`${API_BASE_URL}/contact/${inquiry.id}`, {
                                        method: 'PUT',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ status: next })
                                      })
                                      if (res.ok) {
                                        const updated = await res.json()
                                        setServiceData((prev: any) => ({
                                          ...prev,
                                          contactInquiries: (prev.contactInquiries || []).map((c: any) => c.id === inquiry.id ? { ...c, status: updated.status } : c)
                                        }))
                                      } else {
                                        alert('Failed to update status')
                                      }
                                    } catch {
                                      alert('Failed to update status')
                                    }
                                  }}
                                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mb-1 bg-blue-100 text-blue-800 focus:outline-none`}
                                >
                                  {availableStatuses.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                  ))}
                                </select>
                                {new Date(inquiry.createdDate).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => handleViewServiceDetails('contactInquiry', inquiry.id)}
                                className="text-blue-600 hover:text-blue-900 mr-3"
                              >
                                View Details
                              </button>
                              {/* <button className="text-green-600 hover:text-green-900">Contact</button> */}
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                              No contact inquiries found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
        )}

      </div>

      {/* Admin Settings Modal */}
      <AdminSettings
        isOpen={showAdminSettings}
        onClose={() => setShowAdminSettings(false)}
      />
    </div>
    </ProtectedRoute>
  )
}
