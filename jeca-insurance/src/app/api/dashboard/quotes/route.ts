import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const quoteType = searchParams.get('quoteType')
  const status = searchParams.get('status')
  const search = searchParams.get('search')?.toLowerCase() || ''

  const allQuotes = [
    {
      id: 'q-001',
      quoteNumber: 'QT-2025-0001',
      quoteType: 'Auto Insurance',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phoneNumber: '555-1001',
      address: '123 Elm St',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      status: 'Pending Review',
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      informationSecure: true
    },
    {
      id: 'q-002',
      quoteNumber: 'QT-2025-0002',
      quoteType: 'Home Insurance',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@example.com',
      phoneNumber: '555-1002',
      address: '45 Lakeview Ave',
      city: 'Denver',
      state: 'CO',
      zipCode: '80014',
      status: 'Approved',
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      informationSecure: true
    },
    {
      id: 'q-003',
      quoteNumber: 'QT-2025-0003',
      quoteType: 'Business Insurance',
      firstName: 'Mike',
      lastName: 'Davis',
      email: 'mike.davis@example.com',
      phoneNumber: '555-1003',
      address: '800 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      status: 'Rejected',
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      informationSecure: true
    },
    {
      id: 'q-004',
      quoteNumber: 'QT-2025-0004',
      quoteType: 'Boat Insurance',
      firstName: 'Olivia',
      lastName: 'Green',
      email: 'olivia.green@example.com',
      phoneNumber: '555-1004',
      address: '12 Harbor Rd',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      status: 'Pending Review',
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      informationSecure: true
    }
  ]

  let filtered = allQuotes
  if (quoteType && quoteType !== 'All') {
    filtered = filtered.filter(q => q.quoteType === quoteType)
  }
  if (status && status !== 'All') {
    filtered = filtered.filter(q => q.status === status)
  }
  if (search) {
    filtered = filtered.filter(q =>
      q.quoteNumber?.toLowerCase().includes(search) ||
      q.firstName.toLowerCase().includes(search) ||
      q.lastName.toLowerCase().includes(search) ||
      q.email.toLowerCase().includes(search) ||
      q.phoneNumber.toLowerCase().includes(search)
    )
  }

  const totalCount = filtered.length
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize))
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const pageData = filtered.slice(start, end)

  const headers = new Headers()
  headers.set('X-Total-Count', totalCount.toString())
  headers.set('X-Total-Pages', totalPages.toString())

  return NextResponse.json(pageData, { headers })
}