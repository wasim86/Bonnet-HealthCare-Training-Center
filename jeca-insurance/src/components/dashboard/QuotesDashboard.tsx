'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  EyeIcon,
  TrashIcon,
  PencilIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { useQuoteDashboard } from '../../lib/hooks/useQuoteDashboard'
import { QUOTE_TYPES } from '../../lib/types'
import ApiStatus from '../ui/ApiStatus'

interface QuotesDashboardProps {
  className?: string
}

export default function QuotesDashboard({ className = '' }: QuotesDashboardProps) {
  const [selectedQuoteType, setSelectedQuoteType] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('All')
  const [showFilters, setShowFilters] = useState(false)

  // Use the new unified dashboard hook
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
  } = useQuoteDashboard({ initialPageSize: 10 })

  // Update filters when search term or selections change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters({
        quoteType: selectedQuoteType,
        search: searchTerm,
        status: selectedStatus
      })
    }, 500) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [selectedQuoteType, searchTerm, selectedStatus, setFilters])

  const handleStatusUpdate = async (id: string | undefined, status: string) => {
    if (!id) return
    const success = await updateQuoteStatus(id, status)
    if (success) {
      console.log('Quote status updated successfully')
    } else {
      alert('Failed to update quote status')
    }
  }

  const handleViewQuote = async (id: string | undefined) => {
    if (!id) return
    try {
      const quoteDetails = await getQuoteDetails(id)
      console.log('Quote details:', quoteDetails)
      // TODO: Open quote details modal
    } catch (error) {
      console.error('Error fetching quote details:', error)
      alert('Failed to load quote details')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getQuoteTypeDisplayName = (quoteType: string | undefined) => {
    if (!quoteType) return 'Unknown Type'
    if (quoteType === 'All') return 'All Quote Types'

    const typeMap: { [key: string]: string } = {
      'AutoQuote': 'Auto Insurance',
      'HomeQuote': 'Home Insurance',
      'HealthQuote': 'Health Insurance',
      'BusinessQuote': 'Business Insurance',
      'LifeInsuranceQuote': 'Life Insurance',
      'BoatQuote': 'Boat Insurance',
      'MotorcycleQuote': 'Motorcycle Insurance',
      'FloodQuote': 'Flood Insurance',
      'RentersQuote': 'Renters Insurance',
      'LandlordsQuote': 'Landlords Insurance',
      'BOPQuote': 'Business Owners Package',
      'WorkersCompQuote': 'Workers Compensation',
      'DentalQuote': 'Dental Insurance',
      'VisionQuote': 'Vision Insurance',
      'DisabilityInsuranceQuote': 'Disability Insurance',
      'UmbrellaInsuranceQuote': 'Umbrella Insurance',
      'AnnuityQuote': 'Annuity',
      'MedicareAdvantageQuote': 'Medicare Advantage',
      'MedicareSupplementQuote': 'Medicare Supplement',
    }
    return typeMap[quoteType] || quoteType
  }

  const getStatusColor = (status: string | undefined) => {
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

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Quotes Dashboard</h1>
              <p className="text-lg text-gray-600">Manage and view all submitted insurance quotes</p>
            </div>
            <ApiStatus />
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-4 items-end">
            {/* Quote Type Selector */}
            <div className="flex-1 min-w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quote Type
              </label>
              <select
                value={selectedQuoteType}
                onChange={(e) => setSelectedQuoteType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Quote Types</option>
                {Object.entries(QUOTE_TYPES).map(([key, value]) => (
                  <option key={key} value={value}>
                    {getQuoteTypeDisplayName(value)}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex-1 min-w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Under Review">Under Review</option>
                <option value="Approved">Approved</option>
                <option value="Active">Active</option>
                <option value="Rejected">Rejected</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Refresh Button */}
            <div>
              <button
                onClick={refresh}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <ArrowPathIcon className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search quotes by name, email, or quote number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        {/* Statistics Cards */}
        {statistics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Quotes</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.totalQuotes}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.quotesThisMonth}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100">
                  <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.quotesThisWeek}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg/Day</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.averageQuotesPerDay}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading quotes...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-md p-4 mb-6"
          >
            <p className="text-red-600">{error}</p>
            <button
              onClick={refresh}
              className="mt-2 text-red-600 hover:text-red-800 underline"
            >
              Try again
            </button>
          </motion.div>
        )}

        {/* Quotes Table */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {quotes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No quotes found for {getQuoteTypeDisplayName(selectedQuoteType)}</p>
                <p className="text-gray-400 mt-2">Submit your first quote to get started!</p>
              </div>
            ) : (
              <>
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                  <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                    <div className="col-span-2">Quote #</div>
                    <div className="col-span-2">Customer</div>
                    <div className="col-span-2">Email</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-1">Date</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {quotes.map((quote, index) => (
                    <motion.div
                      key={quote.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-2">
                          <span className="font-mono text-sm text-blue-600">
                            {quote.quoteNumber || 'N/A'}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <p className="font-medium text-gray-900">
                            {quote.firstName} {quote.lastName}
                          </p>
                          <p className="text-sm text-gray-500">{quote.phoneNumber}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-sm text-gray-600">{quote.email}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-sm text-gray-600">{getQuoteTypeDisplayName(quote.quoteType)}</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-xs text-gray-600">
                            {quote.createdDate ? formatDate(quote.createdDate) : 'N/A'}
                          </span>
                        </div>
                        <div className="col-span-1">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(quote.status)}`}>
                            {quote.status || 'Pending'}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="flex space-x-1 items-center">
                            <button
                              onClick={() => handleViewQuote(quote.id)}
                              className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                              title="View Quote"
                            >
                              <EyeIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => console.log('Edit quote:', quote.id)}
                              className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors"
                              title="Edit Quote"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <select
                              value={quote.status || 'Pending'}
                              onChange={(e) => handleStatusUpdate(quote.id, e.target.value)}
                              className="text-xs border border-gray-300 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              title="Update Status"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Under Review">Under Review</option>
                              <option value="Approved">Approved</option>
                              <option value="Active">Active</option>
                              <option value="Rejected">Rejected</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">
                        Showing {((page - 1) * pageSize) + 1} to {Math.min(page * pageSize, totalCount)} of {totalCount} quotes
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setPage(page - 1)}
                          disabled={page === 1}
                          className={`p-2 rounded-md ${
                            page === 1
                              ? 'text-gray-400 cursor-not-allowed'
                              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          <ChevronLeftIcon className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-gray-700">
                          Page {page} of {totalPages}
                        </span>
                        <button
                          onClick={() => setPage(page + 1)}
                          disabled={page === totalPages}
                          className={`p-2 rounded-md ${
                            page === totalPages
                              ? 'text-gray-400 cursor-not-allowed'
                              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          <ChevronRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
