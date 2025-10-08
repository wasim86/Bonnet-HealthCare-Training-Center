import Link from 'next/link'
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

const coverageTypes = [
  {
    name: 'Liability Coverage',
    description: 'Required by law in most states. Covers bodily injury and property damage you cause to others.',
    included: true,
  },
  {
    name: 'Collision Coverage',
    description: 'Pays for damage to your car from collisions with other vehicles or objects.',
    included: true,
  },
  {
    name: 'Comprehensive Coverage',
    description: 'Covers damage from theft, vandalism, weather, and other non-collision incidents.',
    included: true,
  },
  {
    name: 'Uninsured Motorist',
    description: 'Protects you if you\'re hit by a driver without insurance or insufficient coverage.',
    included: true,
  },
  {
    name: 'Medical Payments',
    description: 'Covers medical expenses for you and your passengers regardless of fault.',
    included: true,
  },
  {
    name: 'Rental Car Coverage',
    description: 'Pays for a rental car while your vehicle is being repaired after a covered claim.',
    included: false,
  },
]

const benefits = [
  {
    name: '24/7 Roadside Assistance',
    description: 'Emergency towing, jump-starts, flat tire changes, and lockout service.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Accident Forgiveness',
    description: 'Your rates won\'t increase after your first at-fault accident.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Multi-Policy Discounts',
    description: 'Save up to 25% when you bundle auto with home or other policies.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Claims Support',
    description: 'File and track claims 24/7 through our app or website.',
    icon: PhoneIcon,
  },
]

export default function AutoInsurancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="flex items-center space-x-2 mb-6">
              <TruckIcon className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">AUTO INSURANCE</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive Auto Insurance Coverage
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Protect yourself and your vehicle with our comprehensive auto insurance. 
              Get competitive rates, excellent coverage, and 24/7 support when you need it most.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Auto Quote
              </a>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                Talk to Agent <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern car on highway"
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
              What's Covered
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive auto insurance includes all the coverage you need to drive with confidence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {coverageTypes.map((coverage) => (
                <div key={coverage.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <CheckIcon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {coverage.name}
                    {coverage.included && (
                      <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Included
                      </span>
                    )}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{coverage.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get more value with these additional benefits included with your auto insurance policy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {benefit.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Affordable Rates
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get competitive auto insurance rates with discounts that can save you hundreds.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Starting at $89/month</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our auto insurance starts at just $89/month for comprehensive coverage. 
                Actual rates depend on your driving record, vehicle, and location.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Available Discounts</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Safe Driver Discount
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Multi-Vehicle Discount
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Bundle & Save
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Good Student Discount
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Get Your Quote</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Quote</span>
                  </p>
                  <a
                    href="https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get Auto Quote
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    No obligation. Get your personalized quote in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Protected?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get your free auto insurance quote today and start saving on comprehensive coverage.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Free Quote
              </a>
              <div className="flex items-center space-x-2 text-white">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">24/7 Support: 877-501-5460</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
