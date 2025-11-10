import Link from 'next/link'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  FireIcon,
  CloudIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

const coverageTypes = [
  {
    name: 'Dwelling Coverage',
    description: 'Protects the structure of your home from covered perils like fire, wind, and hail.',
    icon: HomeIcon,
  },
  {
    name: 'Personal Property',
    description: 'Covers your belongings inside your home, including furniture, electronics, and clothing.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Liability Protection',
    description: 'Protects you if someone is injured on your property or you accidentally damage others\' property.',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Additional Living Expenses',
    description: 'Pays for temporary housing and living expenses if your home becomes uninhabitable.',
    icon: CurrencyDollarIcon,
  },
]

const protectedPerils = [
  'Fire and Lightning',
  'Windstorm and Hail',
  'Theft and Vandalism',
  'Water Damage (sudden)',
  'Falling Objects',
  'Weight of Ice/Snow',
  'Electrical Damage',
  'Volcanic Eruption',
]

const discounts = [
  { name: 'Security System', savings: 'Up to 15%' },
  { name: 'Smoke Detectors', savings: 'Up to 10%' },
  { name: 'Multi-Policy Bundle', savings: 'Up to 25%' },
  { name: 'Claims-Free', savings: 'Up to 20%' },
  { name: 'New Home', savings: 'Up to 15%' },
  { name: 'Gated Community', savings: 'Up to 10%' },
]

export default function HomeInsurancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="flex items-center space-x-2 mb-6">
              <HomeIcon className="h-8 w-8 text-green-600" />
              <span className="text-sm font-semibold text-green-600">HOME INSURANCE</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Protect Your Home & Everything In It
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive homeowners insurance that protects your most valuable investment. 
              Get coverage for your home, belongings, and liability protection all in one policy.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/quote/home"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Home Quote
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors">
                Talk to Agent <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beautiful family home"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Coverage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our homeowners insurance provides complete protection for your home and peace of mind for your family.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {coverageTypes.map((coverage) => (
                <div key={coverage.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                      <coverage.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {coverage.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{coverage.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Protected Perils */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's Protected
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your home is protected against these common perils and many more.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {protectedPerils.map((peril) => (
                <div key={peril} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{peril}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing and Discounts */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Affordable Protection
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get comprehensive home insurance at competitive rates with discounts that can save you hundreds.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {/* Pricing */}
            <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Starting at $125/month</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Comprehensive homeowners insurance starting at just $125/month. 
                Actual rates depend on your home value, location, and coverage options.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$125</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Link
                href="/quote/home"
                className="mt-6 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get Home Quote
              </Link>
            </div>

            {/* Discounts */}
            <div className="rounded-3xl bg-green-50 p-8 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Available Discounts</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Save money with these available discounts on your home insurance policy.
              </p>
              <ul className="mt-6 space-y-3">
                {discounts.map((discount) => (
                  <li key={discount.name} className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">{discount.name}</span>
                    <span className="text-sm font-semibold text-green-600">{discount.savings}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose JECA Home Insurance?
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <FireIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  24/7 Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  File and track claims anytime with our dedicated support team and mobile app.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <CloudIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Fast Claims Processing
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Most claims are processed within 48 hours with direct payment to contractors.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Replacement Cost Coverage
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Get full replacement cost for your home and belongings, not just depreciated value.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Bundle & Save
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Save up to 25% when you bundle home insurance with auto or other policies.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Protect Your Home Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
              Get comprehensive home insurance coverage and peace of mind. Start with a free quote today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote/home"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Free Quote
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-green-100">
                Talk to Agent <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
