import { NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149/api'

export async function GET(_req: Request, context: { params: { id: string } }) {
  const { id } = context.params
  try {
    const response = await fetch(`${API_BASE_URL}/Claim/${id}`, { headers: { 'Content-Type': 'application/json' } })
    if (!response.ok) return NextResponse.json({ error: 'Not found' }, { status: response.status })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}