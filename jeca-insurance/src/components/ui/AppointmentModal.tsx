'use client'

import React, { useState } from 'react'

interface AppointmentModalProps {
  open: boolean
  onClose: () => void
  defaultService?: string
}

export default function AppointmentModal({ open, onClose, defaultService }: AppointmentModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    serviceType: defaultService || '',
    subject: '',
    message: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(false)
    try {
      if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
        throw new Error('Please fill in all required fields')
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phoneNumber: form.phoneNumber,
          subject: form.subject,
          message: form.message,
          inquiryType: form.serviceType || 'Appointment'
        })
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSuccess(true)
      setForm({ firstName: '', lastName: '', email: '', phoneNumber: '', serviceType: defaultService || '', subject: '', message: '' })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to submit'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-900/75" onClick={onClose} />
      <div className="relative mx-auto top-20 w-11/12 max-w-2xl bg-white rounded-lg shadow-lg border">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Make An Appointment</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>
        <form className="px-6 py-4 space-y-4" onSubmit={submit}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">Message sent successfully.</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input id="firstName" placeholder="First name" value={form.firstName} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <input id="lastName" placeholder="Last name" value={form.lastName} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input id="email" type="email" placeholder="Email address" value={form.email} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <input id="phoneNumber" placeholder="Phone number (optional)" value={form.phoneNumber} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select id="serviceType" value={form.serviceType} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Service type (optional)</option>
                <option value="ACLS">ACLS</option>
                <option value="BLS">BLS</option>
                <option value="Hands Only CPR">Hands Only CPR</option>
                <option value="AED">AED</option>
                <option value="Heart Savers First AID">Heart Savers First AID</option>
                <option value="Heimlich Maneuve">Heimlich Maneuve</option>
                 <option value="EPI-PEN">EPI-PEN</option>
                 
              </select>
            </div>
            <div>
              <input id="subject" placeholder="Subject" value={form.subject} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <textarea id="message" rows={4} placeholder="Tell us about your training needs or ask any questions..." value={form.message} onChange={onChange} className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{submitting ? 'Sending...' : 'Send a Message'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}