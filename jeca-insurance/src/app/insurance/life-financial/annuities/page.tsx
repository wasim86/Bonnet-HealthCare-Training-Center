import React from 'react';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  BanknotesIcon,
  ClockIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default function AnnuitiesPage() {
  const benefits = [
    {
      icon: CheckCircleIcon,
      title: "Fast & Easy",
      description: "Quick application process with streamlined approval"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secured Process",
      description: "Protected transactions with guaranteed security"
    },
    {
      icon: CogIcon,
      title: "Control Over Policy",
      description: "Flexible options to manage your annuity contract"
    },
    {
      icon: BanknotesIcon,
      title: "Save Your Money",
      description: "Tax-advantaged growth and income planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center space-x-2 text-blue-200 text-sm font-medium tracking-wider">
                <span>&gt;&gt;&gt;</span>
                <span>INSURANCE BENEFITS</span>
                <span>&lt;&lt;&lt;</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Annuities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Secure your financial future with guaranteed income streams and tax-advantaged growth
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* What is an Annuity Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium tracking-wider">
                <span>&gt;&gt;&gt;</span>
                <span>INSURANCE BENEFITS</span>
                <span>&lt;&lt;&lt;</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What is an Annuity?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Annuities are contractually-executed, relatively low-risk investment products; the insured (usually, an individual) pays a life insurance company a lump-sum premium at the start of the contract. That money is to be paid back to the insured in fixed, incremental amounts, over some future time period (predetermined by the insured).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The insurer invests the premium; the resulting profit/return on investment fund the payments received by the insured, and, compensate the insurer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Conventional annuity contracts provide a predictable, guaranteed stream of future income (e.g., for retirement) until the death(s) of the beneficiaries(s) named in the contract, or, until a future termination date – whichever occurs first.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These financial instruments have been used to accumulate funds and provide significant and sudden increases in personal income (via future, lump-sum withdrawals), all while legally avoiding the taxes (e.g., income-, capital gains-, estate-) that would otherwise be assessed on them.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BanknotesIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed Income</h3>
                  <p className="text-gray-700">
                    Secure your retirement with predictable, guaranteed payments for life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immediate vs Deferred Annuities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium tracking-wider">
                <span>&gt;&gt;&gt;</span>
                <span>INSURANCE BENEFITS</span>
                <span>&lt;&lt;&lt;</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Immediate Annuities vs. Deferred Annuities
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Immediate Annuities */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Immediate Annuities</h3>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-gray-700 leading-relaxed">
                  An Immediate Annuity is an insurance policy which, in exchange for a sum of money, guarantees that the issuer will make a series of payments. These payments may be either level or increasing periodic payments for a fixed term of years or until the ending of a life or two lives, or even whichever is longer.
                </p>
              </div>
            </div>

            {/* Deferred Annuities */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDaysIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Deferred Annuities</h3>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <p className="text-gray-700 leading-relaxed">
                  A Deferred Annuity is a contract that is chiefly a vehicle for accumulating savings with a view to eventually distribute them either in the manner of an immediate annuity or as a lump-sum payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talk to Insurance Experts Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talk to our insurance experts</h2>
            <div className="mb-6">
              <a
                href="tel:877-601-5400"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
              >
                877-601-5400
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your future with guaranteed income for the rest of your life. Speak with our financial experts today to find the best options for your financial situation.
            </p>
            <Link
              href="/quotes/life-financial/annuity"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Insured Now
            </Link>
          </div>
        </div>
      </div>

      {/* Service Columns */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy Online */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy online</h3>
              <p className="text-gray-600 mb-6">
                You can pay through multiple payment options, you can pay through:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Paypal Account</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Online ATM</span>
                </div>
              </div>
            </div>

            {/* Pay Online */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay Online</h3>
              <p className="text-gray-600 mb-6">
                You can pay through multiple payment options, you can pay through:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Any Visa/Master Credit Card</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Paypal Account</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-sm text-gray-600">Online ATM</span>
                </div>
              </div>
            </div>

            {/* Leave Feedback */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leave Feedback</h3>
              <p className="text-gray-600 mb-6">
                At JECA, the customer comes first. We always delighted to hear from you, any time of the day.
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <div className="flex items-center justify-start space-x-3 hover:text-purple-600 transition-colors duration-300">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm text-gray-600">Leave a Feedback</span>
                  </div>
                </Link>
                <Link href="/contact" className="block">
                  <div className="flex items-center justify-start space-x-3 hover:text-purple-600 transition-colors duration-300">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm text-gray-600">Contact with Experts</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let our experts help you choose the right annuity solution for your retirement planning needs
          </p>
          <Link
            href="/quotes/life-financial/annuity"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Your Annuity Quote Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
