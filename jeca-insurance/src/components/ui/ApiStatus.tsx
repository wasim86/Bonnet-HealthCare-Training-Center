'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline'
import { api } from '../../lib/api'

interface ApiStatusProps {
  className?: string
}

export default function ApiStatus({ className = '' }: ApiStatusProps) {
  const [status, setStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking')
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const checkApiStatus = async () => {
    try {
      setStatus('checking')
      await api.get('/AutoQuote?page=1&pageSize=1')
      setStatus('connected')
      setLastChecked(new Date())
    } catch (error) {
      console.error('API connection failed:', error)
      setStatus('disconnected')
      setLastChecked(new Date())
    }
  }

  useEffect(() => {
    checkApiStatus()
    // Check every 30 seconds
    const interval = setInterval(checkApiStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <ClockIcon className="h-4 w-4 text-yellow-500 animate-pulse" />
      case 'connected':
        return <CheckCircleIcon className="h-4 w-4 text-green-500" />
      case 'disconnected':
        return <XCircleIcon className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'checking':
        return 'Checking API...'
      case 'connected':
        return 'API Connected'
      case 'disconnected':
        return 'API Disconnected'
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'checking':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'connected':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'disconnected':
        return 'text-red-600 bg-red-50 border-red-200'
    }
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor()} ${className}`}>
      {getStatusIcon()}
      <span className="ml-2">{getStatusText()}</span>
      {lastChecked && (
        <span className="ml-2 text-xs opacity-75">
          {lastChecked.toLocaleTimeString()}
        </span>
      )}
      <button
        onClick={checkApiStatus}
        className="ml-2 text-xs underline hover:no-underline"
        disabled={status === 'checking'}
      >
        Refresh
      </button>
    </div>
  )
}
