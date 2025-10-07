import { Metadata } from 'next'
import BoatQuoteForm from '@/components/quote/BoatQuoteForm'
import LiveChat from '@/components/ui/LiveChat'

export const metadata: Metadata = {
  title: 'Boat Insurance Quote | JECA Insurance',
  description: 'Get a comprehensive boat insurance quote with competitive rates. Protect your watercraft with our expert coverage options.',
  keywords: 'boat insurance, watercraft insurance, marine insurance, boat coverage, insurance quote',
}

export default function BoatQuotePage() {
  return (
    <main className="min-h-screen">
      <BoatQuoteForm />
      <LiveChat />
    </main>
  )
}
