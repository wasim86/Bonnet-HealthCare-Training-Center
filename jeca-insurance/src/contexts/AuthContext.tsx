'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  email: string
  isAuthenticated: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Admin credentials
const ADMIN_EMAIL = 'info@jecainsurancefl.com'
const ADMIN_PASSWORD_KEY = 'jeca_admin_password_v2'
const ADMIN_LOGIN_KEY = 'jeca_admin_logged_in_v2'
const DEFAULT_PASSWORD = 'JecaAdmin2024!@#'

// Helper function to safely access localStorage
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key)
      }
    } catch (error) {
      console.warn('localStorage access failed:', error)
    }
    return null
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value)
      }
    } catch (error) {
      console.warn('localStorage write failed:', error)
    }
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn('localStorage remove failed:', error)
    }
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize default password if not set
    if (!safeLocalStorage.getItem(ADMIN_PASSWORD_KEY)) {
      safeLocalStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_PASSWORD)
    }

    // Check if user is already logged in
    const isLoggedIn = safeLocalStorage.getItem(ADMIN_LOGIN_KEY)
    if (isLoggedIn === 'true') {
      setUser({
        email: ADMIN_EMAIL,
        isAuthenticated: true
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    const storedPassword = safeLocalStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD
    
    // Normalize email comparison (trim and lowercase)
    const normalizedEmail = email.trim().toLowerCase()
    const normalizedAdminEmail = ADMIN_EMAIL.toLowerCase()
    
    if (normalizedEmail === normalizedAdminEmail && password === storedPassword) {
      const userData = {
        email: ADMIN_EMAIL,
        isAuthenticated: true
      }
      setUser(userData)
      safeLocalStorage.setItem(ADMIN_LOGIN_KEY, 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    safeLocalStorage.removeItem(ADMIN_LOGIN_KEY)
    window.location.href = '/admin-login'
  }

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    const storedPassword = safeLocalStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD
    
    if (currentPassword === storedPassword) {
      safeLocalStorage.setItem(ADMIN_PASSWORD_KEY, newPassword)
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, changePassword, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
