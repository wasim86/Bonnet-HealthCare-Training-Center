import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149/api'
const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_FALLBACK_EMAIL = process.env.CONTACT_FALLBACK_EMAIL || 'contact@bonnethealthcare.com'
let LOCAL_CONTACTS: any[] = []

const DATA_DIR = path.join(process.cwd(), '.data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR)
    }
    if (!fs.existsSync(CONTACTS_FILE)) {
      fs.writeFileSync(CONTACTS_FILE, '[]')
    }
  } catch {}
}

function readContacts(): any[] {
  try {
    ensureDataFile()
    const raw = fs.readFileSync(CONTACTS_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    return []
  } catch {
    return LOCAL_CONTACTS
  }
}

function writeContacts(contacts: any[]) {
  try {
    ensureDataFile()
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8')
  } catch {
    LOCAL_CONTACTS = contacts
  }
}

function sanitize(input: any) {
  if (typeof input === 'string') return input.trim()
  return input
}

function generateContactNumber() {
  const now = new Date()
  const y = now.getFullYear().toString()
  const m = (now.getMonth() + 1).toString().padStart(2, '0')
  const d = now.getDate().toString().padStart(2, '0')
  const r = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `CN-${y}${m}${d}-${r}`
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json()
    const body = {
      firstName: sanitize(raw.firstName),
      lastName: sanitize(raw.lastName),
      email: sanitize(raw.email),
      phoneNumber: sanitize(raw.phoneNumber || raw.phone || ''),
      subject: sanitize(raw.subject),
      message: sanitize(raw.message),
      inquiryType: sanitize(raw.inquiryType || ''),
    }

    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    

    const contactNumber = generateContactNumber()
    const entry = {
      id: Math.random().toString(36).slice(2),
      contactNumber,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      subject: body.subject,
      inquiryType: body.inquiryType || 'General',
      status: 'New',
      createdDate: new Date().toISOString(),
      message: body.message
    }
    const contacts = readContacts()
    contacts.unshift(entry)
    writeContacts(contacts)

    if (RESEND_API_KEY) {
      const html = `
        <div>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phoneNumber || '-'}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p><strong>Inquiry Type:</strong> ${body.inquiryType || '-'}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        </div>
      `
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'no-reply@bonnethealthcare.com',
            to: CONTACT_FALLBACK_EMAIL,
            subject: `Contact Form: ${body.subject}`,
            html,
          }),
        })
        if (resendRes.ok) {
          return NextResponse.json({ ...entry, status: 'sent', via: 'email' })
        }
      } catch {}
    }

    return NextResponse.json({ ...entry, status: 'received', via: 'local' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'
    const status = searchParams.get('status')

    let url = `${API_BASE_URL}/contact?page=${page}&pageSize=${pageSize}`
    if (status) {
      url += `&status=${status}`
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const p = parseInt(page, 10)
      const ps = parseInt(pageSize, 10)
      const all = readContacts()
      const data = status ? all.filter(c => (c.status || '').toLowerCase() === status.toLowerCase()) : all
      const totalCount = data.length
      const start = (p - 1) * ps
      const end = start + ps
      const slice = data.slice(start, end)
      const headers = new Headers()
      headers.set('X-Total-Count', totalCount.toString())
      headers.set('X-Page', page)
      headers.set('X-Page-Size', pageSize)
      return NextResponse.json(slice, { headers, status: 200 })
    }

    const result = await response.json()
    
    // Forward pagination headers
    const headers = new Headers()
    const totalCount = response.headers.get('X-Total-Count')
    const pageHeader = response.headers.get('X-Page')
    const pageSizeHeader = response.headers.get('X-Page-Size')
    
    if (totalCount) headers.set('X-Total-Count', totalCount)
    if (pageHeader) headers.set('X-Page', pageHeader)
    if (pageSizeHeader) headers.set('X-Page-Size', pageSizeHeader)

    return NextResponse.json(result, { headers })
  } catch {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'
    const status = searchParams.get('status')
    const p = parseInt(page, 10)
    const ps = parseInt(pageSize, 10)
    const all = readContacts()
    const data = status ? all.filter(c => (c.status || '').toLowerCase() === status.toLowerCase()) : all
    const totalCount = data.length
    const start = (p - 1) * ps
    const end = start + ps
    const slice = data.slice(start, end)
    const headers = new Headers()
    headers.set('X-Total-Count', totalCount.toString())
    headers.set('X-Page', page)
    headers.set('X-Page-Size', pageSize)
    return NextResponse.json(slice, { headers, status: 200 })
  }
}
