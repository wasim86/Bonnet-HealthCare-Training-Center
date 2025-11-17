import { NextResponse } from 'next/server'

export async function GET(_req: Request, context: { params: { id: string } }) {
  const { id } = context.params
  const base = {
    id,
    quoteNumber: `QT-2025-${id.slice(-4).padStart(4, '0')}`,
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
    updatedDate: new Date().toISOString()
  }
  return NextResponse.json(base)
}