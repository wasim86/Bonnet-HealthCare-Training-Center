import Link from 'next/link'
import { 
  ExclamationTriangleIcon, 
  PhoneIcon, 
  DocumentTextIcon, 
  ClockIcon,
  CheckCircleIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

const claimSteps = [
  {
    step: 1,
    title: 'Report Your Claim',
    description: 'Contact us immediately to report your claim. The sooner you report, the faster we can help.',
    icon: PhoneIcon,
  },
  {
    step: 2,
    title: 'Document Everything',
    description: 'Take photos, gather receipts, and collect any relevant documentation for your claim.',
    icon: CameraIcon,
  },
  {
    step: 3,
    title: 'Work with Adjuster',
    description: 'Our claims adjuster will contact you to assess the damage and guide you through the process.',
    icon: DocumentTextIcon,
  },
  {
    step: 4,
    title: 'Get Resolution',
    description: 'Receive your settlement and get back to normal as quickly as possible.',
    icon: CheckCircleIcon,
  },
]

const contactMethods = [
  {
    title: '24/7 Claims Hotline',
    description: 'Call our dedicated claims line for immediate assistance',
    contact: '1-800-CLAIMS-1',
    availability: 'Available 24/7',
    icon: PhoneIcon,
    primary: true,
  },
  {
    title: 'Online Claims',
    description: 'File your claim online at your convenience',
    contact: 'File Online',
    availability: 'Available anytime',
    icon: DocumentTextIcon,
    primary: false,
  },
]

export default function ClaimsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
              <span className="text-red-600 font-semibold text-sm tracking-wider uppercase">
                Claims Center
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              File Your Insurance Claim
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to help you through the claims process. Report your claim quickly and easily, 
              and let our experienced team guide you every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-600">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-white">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <span className="font-semibold">Emergency Claims:</span>
            <span>Call 1-800-CLAIMS-1 immediately for urgent situations</span>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Report Your Claim
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the method that works best for you to report your claim.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className={`relative rounded-3xl p-8 shadow-xl ring-1 ${
                  method.primary 
                    ? 'ring-red-200 bg-red-50' 
                    : 'ring-gray-200 bg-white'
                } hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center gap-x-4 mb-6">
                  <div className={`h-12 w-12 flex-none rounded-lg ${
                    method.primary ? 'bg-red-600' : 'bg-blue-600'
                  } flex items-center justify-center`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                </div>
                
                <p className="text-base text-gray-600 mb-6">{method.description}</p>
                
                <div className="mb-4">
                  <p className={`text-2xl font-bold ${
                    method.primary ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {method.contact}
                  </p>
                  <p className="text-sm text-gray-500">{method.availability}</p>
                </div>
                
                <button className={`w-full rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  method.primary 
                    ? 'bg-red-600 hover:bg-red-500' 
                    : 'bg-blue-600 hover:bg-blue-500'
                }`}>
                  {method.primary ? 'Call Now' : 'File Online'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claims Process */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How the Claims Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our streamlined process ensures your claim is handled quickly and efficiently.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {claimSteps.map((step) => (
                <div key={step.step} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-blue-600 font-bold mr-2">Step {step.step}:</span>
                    {step.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What to Have Ready */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What to Have Ready
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Having this information ready will help speed up your claim process.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Policy number',
                'Date and time of incident',
                'Location of incident',
                'Description of what happened',
                'Photos of damage',
                'Police report number (if applicable)',
                'Contact information for other parties',
                'Witness information',
                'Receipts for expenses'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Additional Help?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our claims specialists are available 24/7 to assist you with your claim.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:1-800-CLAIMS-1"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                Call Claims Hotline
              </a>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-100">
                Contact Support <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
