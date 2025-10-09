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
const ADMIN_PASSWORD_KEY = 'jeca_admin_password'
const DEFAULT_PASSWORD = 'JecaAdmin2024!@#'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize default password if not set
    if (!localStorage.getItem(ADMIN_PASSWORD_KEY)) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_PASSWORD)
    }

    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('jeca_admin_logged_in')
    if (isLoggedIn === 'true') {
      setUser({
        email: ADMIN_EMAIL,
        isAuthenticated: true
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD
    
    if (email === ADMIN_EMAIL && password === storedPassword) {
      const userData = {
        email: ADMIN_EMAIL,
        isAuthenticated: true
      }
      setUser(userData)
      localStorage.setItem('jeca_admin_logged_in', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('jeca_admin_logged_in')
    window.location.href = '/admin-login'
  }

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD
    
    if (currentPassword === storedPassword) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword)
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
