import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5149'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Forward the request to the .NET API
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Backend API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'
    const status = searchParams.get('status')

    let url = `${API_BASE_URL}/api/contact?page=${page}&pageSize=${pageSize}`
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
      const errorText = await response.text()
      console.error('Backend API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to fetch contact messages' },
        { status: response.status }
      )
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
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
