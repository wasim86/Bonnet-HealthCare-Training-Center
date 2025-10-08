import Link from 'next/link'
import {
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const insuranceTypes = [
  {
    id: 'auto',
    name: 'Auto Insurance',
    description: 'Comprehensive vehicle protection for cars, trucks, motorcycles, and boats.',
    href: '/insurance/vehicles/auto',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    features: ['Auto Insurance', 'Motorcycle Insurance', 'Boat Insurance', 'Commercial Vehicle Coverage'],
    color: 'from-blue-600 to-indigo-700',
    quoteHref: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
  },
  {
    id: 'health',
    name: 'Health Insurance',
    description: 'Medical coverage for individuals, families, and specialized needs.',
    href: '/insurance/health/individual',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.13c-.08-.32-.13-.66-.13-1H4V6zm6.01 10H4v-1h6.01v1zm0-2H4v-1h6.01v1zm0-2H4V9h6.01v1z"/>
      </svg>
    ),
    features: ['Individual Health Plans', 'Dental Insurance', 'Vision Insurance', 'Medicare Advantage', 'Medicare Supplement'],
    color: 'from-green-600 to-emerald-700',
    quoteHref: '/quote/health',
  },
  {
    id: 'life-financial',
    name: 'Life & Financial',
    description: 'Life insurance, annuities, and financial protection solutions.',
    href: '/insurance/life-financial/life',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    features: ['Life Insurance', 'Annuities', 'Disability Insurance', 'Umbrella Insurance'],
    color: 'from-amber-600 to-red-600',
    quoteHref: '/quotes/life-financial/life',
  },
  {
    id: 'property',
    name: 'Home Owner Insurance',
    description: 'Protect your home, condo, rental property, and more with comprehensive coverage.',
    href: '/insurance/property/home',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    features: ['Home Insurance', 'Flood Insurance', 'Landlords Insurance', 'Renters Insurance'],
    color: 'from-purple-600 to-pink-600',
    quoteHref: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx',
  },
  {
    id: 'business',
    name: 'Business Insurance',
    description: 'Comprehensive business insurance solutions for companies of all sizes.',
    href: '/insurance/business/general',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    features: ['General Liability', 'Business Owner Package (BOP)', 'Workers Compensation', 'Commercial Property'],
    color: 'from-gray-600 to-slate-700',
    quoteHref: '/quote/business',
  },
]

export default function InsurancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Insurance Solutions for Every Need
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover comprehensive insurance coverage options designed to protect what matters most to you and your family.
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Coverage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Select from our comprehensive range of insurance products tailored to your specific needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {insuranceTypes.map((insurance) => (
              <div
                key={insurance.id}
                className="group relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 xl:p-10 hover:shadow-2xl transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-x-4 mb-6">
                  <div className="flex items-center gap-x-4">
                    <div className={`h-16 w-16 flex-none rounded-2xl bg-gradient-to-r ${insurance.color} flex items-center justify-center shadow-lg text-white`}>
                      {insurance.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-8 text-gray-900">{insurance.name}</h3>
                      <p className="text-sm font-semibold text-blue-600">Comprehensive Coverage</p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-6 w-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <p className="text-base leading-7 text-gray-600 mb-6">{insurance.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {insurance.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-x-4">
                  <Link
                    href={insurance.href}
                    className={`flex-1 block text-center rounded-xl bg-gradient-to-r ${insurance.color} px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                  </Link>
                  <Link
                    href={insurance.quoteHref}
                    className="flex-1 block text-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Help Choosing?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our licensed agents are here to help you find the perfect coverage for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                Talk to an Agent
              </Link>
              <Link href="/quotes" className="text-sm font-semibold leading-6 text-white hover:text-blue-100">
                Get Quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
