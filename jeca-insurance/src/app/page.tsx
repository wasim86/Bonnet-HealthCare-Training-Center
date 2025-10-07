import HeroSection from '@/components/home/HeroSection'
import TrustedByStats from '@/components/home/TrustedByStats'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustedByStats />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
