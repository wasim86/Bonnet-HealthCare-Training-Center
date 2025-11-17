import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = searchParams.toString()
    const url = `${API_BASE_URL}/Consultation${params ? `?${params}` : ''}`
    const response = await fetch(url, { headers: { 'Content-Type': 'application/json' } })
    if (!response.ok) return NextResponse.json({ consultations: [] })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ consultations: [] })
  }
}