'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ResponsiveFormWrapperProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  delay?: number
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

export default function ResponsiveFormWrapper({
  children,
  title,
  subtitle,
  className,
  delay = 0,
  maxWidth = '4xl'
}: ResponsiveFormWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={cn(
        'bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 p-4 sm:p-6 md:p-8',
        'w-full mx-auto',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {(title || subtitle) && (
        <div className="text-center mb-6 sm:mb-8">
          {title && (
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.div>
  )
}

// Responsive form field component
interface ResponsiveFormFieldProps {
  children: ReactNode
  label?: string
  required?: boolean
  error?: string
  className?: string
  fullWidth?: boolean
}

export function ResponsiveFormField({
  children,
  label,
  required,
  error,
  className,
  fullWidth = true
}: ResponsiveFormFieldProps) {
  return (
    <div className={cn(fullWidth ? 'w-full' : '', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-xs sm:text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

// Responsive input component
interface ResponsiveInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export function ResponsiveInput({ 
  className, 
  error, 
  ...props 
}: ResponsiveInputProps) {
  return (
    <input
      className={cn(
        'w-full px-3 sm:px-4 py-3 text-base border rounded-lg sm:rounded-xl',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        'transition-all duration-200',
        'placeholder-gray-400',
        error 
          ? 'border-red-300 bg-red-50' 
          : 'border-gray-300 bg-white hover:border-gray-400',
        className
      )}
      {...props}
    />
  )
}

// Responsive select component
interface ResponsiveSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  options: { value: string; label: string }[]
  placeholder?: string
}

export function ResponsiveSelect({ 
  className, 
  error, 
  options,
  placeholder = "Choose option",
  ...props 
}: ResponsiveSelectProps) {
  return (
    <select
      className={cn(
        'w-full px-3 sm:px-4 py-3 text-base border rounded-lg sm:rounded-xl',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        'transition-all duration-200',
        'bg-white appearance-none',
        error 
          ? 'border-red-300 bg-red-50' 
          : 'border-gray-300 hover:border-gray-400',
        className
      )}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

// Responsive button component
interface ResponsiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
}

export function ResponsiveButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: ResponsiveButtonProps) {
  const baseClasses = 'font-semibold rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-target'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  )
}

// Responsive grid component for form layouts
interface ResponsiveGridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ResponsiveGrid({
  children,
  cols = 2,
  gap = 'md',
  className
}: ResponsiveGridProps) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }
  
  const gapClasses = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8'
  }
  
  return (
    <div className={cn(
      'grid',
      colClasses[cols],
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  )
}
