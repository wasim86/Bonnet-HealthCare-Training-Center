import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '10')

  const activities = [
    {
      id: 'act-001',
      quoteNumber: 'QT-2025-0001',
      quoteType: 'Auto Insurance',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      status: 'Pending Review',
      createdDate: new Date().toISOString(),
      activity: 'Quote submitted'
    },
    {
      id: 'act-002',
      quoteNumber: 'QT-2025-0002',
      quoteType: 'Home Insurance',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@example.com',
      status: 'Approved',
      createdDate: new Date().toISOString(),
      activity: 'Quote approved'
    },
    {
      id: 'act-003',
      quoteNumber: 'QT-2025-0003',
      quoteType: 'Business Insurance',
      firstName: 'Mike',
      lastName: 'Davis',
      email: 'mike.davis@example.com',
      status: 'Rejected',
      createdDate: new Date().toISOString(),
      activity: 'Quote rejected'
    }
  ]

  return NextResponse.json(activities.slice(0, limit))
}