import { 
  TruckIcon, 
  HomeIcon, 
  DocumentTextIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const policies = [
  {
    id: 'AUTO-001',
    type: 'Auto Insurance',
    vehicle: '2022 Toyota Camry',
    premium: '$89.00/month',
    status: 'Active',
    nextPayment: 'Jan 15, 2024',
    icon: TruckIcon,
    color: 'blue',
  },
  {
    id: 'HOME-001',
    type: 'Home Insurance',
    property: '123 Main St, Springfield',
    premium: '$125.00/month',
    status: 'Active',
    nextPayment: 'Jan 15, 2024',
    icon: HomeIcon,
    color: 'green',
  },
]

const recentClaims = [
  {
    id: 'CLM-2024-001',
    type: 'Auto Claim',
    description: 'Minor fender bender - rear bumper damage',
    status: 'In Progress',
    filed: 'Dec 15, 2023',
    estimatedPayout: '$1,250',
    statusColor: 'yellow',
  },
  {
    id: 'CLM-2023-045',
    type: 'Home Claim',
    description: 'Water damage from burst pipe',
    status: 'Settled',
    filed: 'Nov 8, 2023',
    estimatedPayout: '$3,500',
    statusColor: 'green',
  },
]

const quickActions = [
  {
    name: 'Make a Payment',
    description: 'Pay your premium online',
    icon: CurrencyDollarIcon,
    href: '/payment',
    color: 'blue',
  },
  {
    name: 'File a Claim',
    description: 'Report an incident',
    icon: ExclamationTriangleIcon,
    href: '/claims/new',
    color: 'red',
  },
  {
    name: 'View Documents',
    description: 'Access policy documents',
    icon: DocumentTextIcon,
    href: '/documents',
    color: 'gray',
  },
  {
    name: 'Contact Agent',
    description: 'Speak with your agent',
    icon: PhoneIcon,
    href: '/contact',
    color: 'green',
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-sm text-gray-600">Manage your policies and claims</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last login: Dec 20, 2023</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <div
                key={action.name}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-${action.color}-100`}>
                    <action.icon className={`h-6 w-6 text-${action.color}-600`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Policies */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Active Policies</h2>
              <button className="text-sm text-blue-600 hover:text-blue-500">View All</button>
            </div>
            <div className="space-y-4">
              {policies.map((policy) => (
                <div key={policy.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-${policy.color}-100`}>
                        <policy.icon className={`h-6 w-6 text-${policy.color}-600`} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{policy.type}</h3>
                        <p className="text-sm text-gray-500">{policy.vehicle || policy.property}</p>
                        <p className="text-xs text-gray-400">Policy #{policy.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">{policy.status}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">{policy.premium}</p>
                      <p className="text-xs text-gray-500">Next payment: {policy.nextPayment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Claims */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Claims</h2>
              <button className="text-sm text-blue-600 hover:text-blue-500">View All</button>
            </div>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{claim.type}</h3>
                      <p className="text-sm text-gray-500 mt-1">{claim.description}</p>
                      <p className="text-xs text-gray-400 mt-2">Claim #{claim.id}</p>
                      <p className="text-xs text-gray-400">Filed: {claim.filed}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        {claim.statusColor === 'green' ? (
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <ClockIcon className="h-4 w-4 text-yellow-500 mr-1" />
                        )}
                        <span className={`text-sm ${claim.statusColor === 'green' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {claim.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">{claim.estimatedPayout}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Account Summary</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">Active Policies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$214</div>
                <div className="text-sm text-gray-500">Monthly Premium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15%</div>
                <div className="text-sm text-gray-500">Multi-Policy Discount</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Payments */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Payments</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Next Payment Due</h3>
                <p className="text-sm text-gray-500">January 15, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium text-gray-900">$214.00</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center">
              <PhoneIcon className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Our customer service team is available 24/7 to assist you.
                </p>
                <p className="text-sm font-medium text-blue-600 mt-1">
                  Call: 877-501-5460 or start a live chat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
