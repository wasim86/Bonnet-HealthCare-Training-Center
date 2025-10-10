'use client'

import { useState, useEffect, useCallback } from 'react'
import { BaseQuote, ApiResponse } from '../types'

interface DashboardFilters {
  quoteType?: string
  search?: string
  status?: string
  startDate?: string
  endDate?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

interface DashboardStatistics {
  totalQuotes: number
  quotesThisMonth: number
  quotesThisWeek: number
  averageQuotesPerDay: number
  quotesByType: Array<{ quoteType: string; count: number }>
  quotesByStatus: Array<{ status: string; count: number }>
  dailyTrend: Array<{ date: string; count: number }>
  topQuoteTypesThisMonth: Array<{ quoteType: string; count: number }>
  lastUpdated: string
}

interface RecentActivity {
  id: string
  quoteNumber: string
  quoteType: string
  firstName: string
  lastName: string
  email: string
  status: string
  createdDate: string
  activity: string
}

interface UseQuoteDashboardOptions {
  initialPageSize?: number
  autoRefresh?: boolean
  refreshInterval?: number
}

interface UseQuoteDashboardReturn {
  // Data
  quotes: BaseQuote[]
  statistics: DashboardStatistics | null
  recentActivity: RecentActivity[]
  
  // Pagination
  totalCount: number
  page: number
  pageSize: number
  totalPages: number
  
  // State
  loading: boolean
  error: string | null
  
  // Actions
  setPage: (page: number) => void
  setPageSize: (size: number) => void
  setFilters: (filters: DashboardFilters) => void
  refresh: () => Promise<void>
  refreshStatistics: () => Promise<void>
  updateQuoteStatus: (id: string, status: string) => Promise<boolean>
  getQuoteDetails: (id: string) => Promise<any>
  
  // Current filters
  filters: DashboardFilters
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149/api'

export function useQuoteDashboard(options: UseQuoteDashboardOptions = {}): UseQuoteDashboardReturn {
  const {
    initialPageSize = 10,
    autoRefresh = false,
    refreshInterval = 30000 // 30 seconds
  } = options

  // State
  const [quotes, setQuotes] = useState<BaseQuote[]>([])
  const [statistics, setStatistics] = useState<DashboardStatistics | null>(null)
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<DashboardFilters>({
    quoteType: 'All',
    search: '',
    status: 'All',
    sortBy: 'CreatedDate',
    sortOrder: 'desc'
  })

  // Fetch quotes with current filters and pagination
  const fetchQuotes = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        ...(filters.quoteType && filters.quoteType !== 'All' && { quoteType: filters.quoteType }),
        ...(filters.search && { search: filters.search }),
        ...(filters.status && filters.status !== 'All' && { status: filters.status }),
        ...(filters.startDate && { startDate: filters.startDate }),
        ...(filters.endDate && { endDate: filters.endDate }),
        ...(filters.sortBy && { sortBy: filters.sortBy }),
        ...(filters.sortOrder && { sortOrder: filters.sortOrder })
      })

      const response = await fetch(`${API_BASE_URL}/dashboard/quotes?${params}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const totalCount = parseInt(response.headers.get('X-Total-Count') || '0')
      const totalPages = parseInt(response.headers.get('X-Total-Pages') || '0')

      setQuotes(data)
      setTotalCount(totalCount)
      setTotalPages(totalPages)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch quotes'
      setError(errorMessage)
      console.error('Error fetching quotes:', err)
    } finally {
      setLoading(false)
    }
  }, [page, pageSize, filters])

  // Fetch statistics
  const fetchStatistics = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/statistics`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setStatistics(data)
    } catch (err) {
      console.error('Error fetching statistics:', err)
    }
  }, [])

  // Fetch recent activity
  const fetchRecentActivity = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/recent-activity?limit=10`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setRecentActivity(data)
    } catch (err) {
      console.error('Error fetching recent activity:', err)
    }
  }, [])

  // Update quote status
  const updateQuoteStatus = useCallback(async (id: string, status: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/quotes/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Refresh quotes to show updated status
      await fetchQuotes()
      await fetchStatistics()
      
      return true
    } catch (err) {
      console.error('Error updating quote status:', err)
      return false
    }
  }, [fetchQuotes, fetchStatistics])

  // Get quote details
  const getQuoteDetails = useCallback(async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/quotes/${id}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (err) {
      console.error('Error fetching quote details:', err)
      throw err
    }
  }, [])

  // Refresh all data
  const refresh = useCallback(async () => {
    await Promise.all([
      fetchQuotes(),
      fetchStatistics(),
      fetchRecentActivity()
    ])
  }, [fetchQuotes, fetchStatistics, fetchRecentActivity])

  // Refresh only statistics
  const refreshStatistics = useCallback(async () => {
    await fetchStatistics()
  }, [fetchStatistics])

  // Update filters and reset to first page
  const updateFilters = useCallback((newFilters: DashboardFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setPage(1) // Reset to first page when filters change
  }, [])

  // Update page
  const updatePage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  // Update page size
  const updatePageSize = useCallback((newPageSize: number) => {
    setPageSize(newPageSize)
    setPage(1) // Reset to first page when page size changes
  }, [])

  // Initial data fetch
  useEffect(() => {
    refresh()
  }, [refresh])

  // Fetch quotes when dependencies change
  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  // Auto-refresh setup
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      refresh()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, refresh])

  return {
    // Data
    quotes,
    statistics,
    recentActivity,
    
    // Pagination
    totalCount,
    page,
    pageSize,
    totalPages,
    
    // State
    loading,
    error,
    
    // Actions
    setPage: updatePage,
    setPageSize: updatePageSize,
    setFilters: updateFilters,
    refresh,
    refreshStatistics,
    updateQuoteStatus,
    getQuoteDetails,
    
    // Current filters
    filters
  }
}
