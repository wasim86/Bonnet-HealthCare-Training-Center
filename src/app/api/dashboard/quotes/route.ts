import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = searchParams.toString()
    const url = `${API_BASE_URL}/dashboard/quotes${params ? `?${params}` : ''}`

    const response = await fetch(url, { headers: { 'Content-Type': 'application/json' } })

    const headers = new Headers()
    const totalCount = response.headers.get('X-Total-Count')
    const totalPages = response.headers.get('X-Total-Pages')
    if (totalCount) headers.set('X-Total-Count', totalCount)
    if (totalPages) headers.set('X-Total-Pages', totalPages)

    if (!response.ok) {
      return NextResponse.json([], { headers, status: 200 })
    }

    const data = await response.json()
    return NextResponse.json(data, { headers })
  } catch {
    const headers = new Headers()
    headers.set('X-Total-Count', '0')
    headers.set('X-Total-Pages', '0')
    return NextResponse.json([], { headers, status: 200 })
  }
}

