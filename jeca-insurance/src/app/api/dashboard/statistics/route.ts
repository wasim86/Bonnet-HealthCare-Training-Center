import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()
  const todayISO = now.toISOString()

  const totalQuotes = 24
  const quotesByType = [
    { quoteType: 'Auto Insurance', count: 8 },
    { quoteType: 'Home Insurance', count: 7 },
    { quoteType: 'Business Insurance', count: 5 },
    { quoteType: 'Boat Insurance', count: 4 }
  ]
  const quotesByStatus = [
    { status: 'Pending Review', count: 12 },
    { status: 'Approved', count: 7 },
    { status: 'Rejected', count: 5 }
  ]
  const dailyTrend = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now)
    d.setDate(now.getDate() - (6 - i))
    return { date: d.toISOString().split('T')[0], count: Math.floor(3 + Math.random() * 6) }
  })
  const quotesThisMonth = dailyTrend.reduce((sum, d) => sum + d.count, 0)
  const quotesThisWeek = dailyTrend.slice(-7).reduce((sum, d) => sum + d.count, 0)
  const averageQuotesPerDay = Math.round(quotesThisMonth / 30)
  const topQuoteTypesThisMonth = quotesByType.slice(0, 3)

  const stats = {
    totalQuotes,
    quotesThisMonth,
    quotesThisWeek,
    averageQuotesPerDay,
    quotesByType,
    quotesByStatus,
    dailyTrend,
    topQuoteTypesThisMonth,
    lastUpdated: todayISO
  }
  return NextResponse.json(stats)
}