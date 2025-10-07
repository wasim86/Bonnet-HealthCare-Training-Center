'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EyeIcon, 
  TrashIcon, 
  PencilIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useAutoQuotes } from '../../lib/hooks/useQuotes'
import { QUOTE_TYPES } from '../../lib/types'
import ApiStatus from '../ui/ApiStatus'

interface QuotesDashboardProps {
  className?: string
}

export default function QuotesDashboard({ className = '' }: QuotesDashboardProps) {
  const [selectedQuoteType, setSelectedQuoteType] = useState<string>('AutoQuote')
  const [searchTerm, setSearchTerm] = useState('')

  // Use the quotes hook for the selected quote type
  const { 
    quotes, 
    loading, 
    error, 
    totalCount, 
    page, 
    pageSize, 
    totalPages,
    setPage,
    deleteQuote,
    refresh 
  } = useAutoQuotes({ initialPageSize: 10 })

  const handleDeleteQuote = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      const success = await deleteQuote(id)
      if (success) {
        console.log('Quote deleted successfully')
      }
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

  const getQuoteTypeDisplayName = (quoteType: string) => {
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

        {/* Quote Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quote Type
          </label>
          <select
            value={selectedQuoteType}
            onChange={(e) => setSelectedQuoteType(e.target.value)}
            className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(QUOTE_TYPES).map(([key, value]) => (
              <option key={key} value={value}>
                {getQuoteTypeDisplayName(value)}
              </option>
            ))}
          </select>
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
                    <div className="col-span-3">Customer</div>
                    <div className="col-span-2">Email</div>
                    <div className="col-span-2">Date</div>
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
                        <div className="col-span-3">
                          <p className="font-medium text-gray-900">
                            {quote.firstName} {quote.lastName}
                          </p>
                          <p className="text-sm text-gray-500">{quote.phoneNumber}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-sm text-gray-600">{quote.email}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-sm text-gray-600">
                            {quote.createdDate ? formatDate(quote.createdDate) : 'N/A'}
                          </span>
                        </div>
                        <div className="col-span-1">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            quote.status === 'Active' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {quote.status || 'Active'}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => console.log('View quote:', quote.id)}
                              className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                              title="View Quote"
                            >
                              <EyeIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => console.log('Edit quote:', quote.id)}
                              className="p-1 text-green-600 hover:text-green-800 transition-colors"
                              title="Edit Quote"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteQuote(quote.id!)}
                              className="p-1 text-red-600 hover:text-red-800 transition-colors"
                              title="Delete Quote"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
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
