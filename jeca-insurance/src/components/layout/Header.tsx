'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SubmenuItem {
  name: string
  href: string
  external?: boolean
}

interface DropdownItem {
  name: string
  href: string
  hasSubmenu?: boolean
  submenu?: SubmenuItem[]
  external?: boolean
}

interface NavigationItem {
  name: string
  href: string
  dropdown?: DropdownItem[]
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Quotes',
    href: '/quotes',
    dropdown: [
      {
        name: 'Auto Quotes',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Auto Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
          { name: 'Boat Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
          { name: 'Motorcycle Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
        ]
      },
      {
        name: 'Home Owner Quotes',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Home Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
          { name: 'Flood Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
          { name: 'Landlords Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
          { name: 'Renters Insurance Quote', href: 'https://www.agentinsure.com/compare/auto-insurance-home-insurance/jeca/quote.aspx', external: true },
        ]
      },
      {
        name: 'Business Quotes',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Business Insurance Quote', href: '/quote/business' },
          { name: 'Business Owner Package(BOP)', href: '/quote/bop' },
          { name: 'Workers Compensation Quote', href: '/quote/workers-comp' },
        ]
      },
      {
        name: 'Health Quotes',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Health Insurance Quote', href: '/quote/health' },
          { name: 'Dental Insurance quote', href: '/quotes/health/dental' },
          { name: 'Medicare Advantage Plan Quote', href: '/quotes/health/medicare-advantage' },
          { name: 'Medicare Supplement Coverage Quote', href: '/quotes/health/medicare-supplement' },
          { name: 'Vision Insurance Quote', href: '/quotes/health/vision' },
        ]
      },
      {
        name: 'Life & Financial Quotes',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Life Insurance Quote', href: '/quotes/life-financial/life' },
          { name: 'Annuity Quote', href: '/quotes/life-financial/annuity' },
          { name: 'Disability Insurance Quote', href: '/quotes/life-financial/disability' },
          { name: 'Umbrella Insurance Quote', href: '/quotes/life-financial/umbrella' },
        ]
      }
      //{ name: 'Other Quotes', href: '/quotes/other' },
    ]
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Report A Claim', href: '/services/report-claim' },
      { name: 'Policy Review', href: '/services/policy-review' },
      { name: 'Update Contact Info', href: '/services/update-contact' },
      { name: 'Proof of Insurance', href: '/services/proof-insurance' },
      { name: 'Free Consultation', href: '/services/consultation' },
      { name: 'Online Documents', href: '/services/documents' },
      { name: 'JECA Tax Services', href: 'https://www.jecataxservices.com/', external: true },
      { name: 'Blog', href: '/blog' },
    ]
  },
  {
    name: 'Insurance',
    href: '/insurance',
    dropdown: [
      {
        name: 'Vehicles',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Auto Insurance', href: '/insurance/vehicles/auto' },
          { name: 'Boat Insurance', href: '/insurance/vehicles/boat' },
          { name: 'Motorcycle Insurance', href: '/insurance/vehicles/motorcycle' },
        ]
      },
      {
        name: 'Home Owner',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Home Insurance', href: '/insurance/property/home' },
          { name: 'Flood Insurance', href: '/insurance/property/flood' },
          { name: 'Landlords\' Insurance', href: '/insurance/property/landlords' },
          { name: 'Renters Insurance', href: '/insurance/property/renters' },
        ]
      },
      {
        name: 'Business',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Business Insurance', href: '/insurance/business/general' },
          { name: 'Business Owner\'s Package (BOP)', href: '/insurance/business/bop' },
          { name: 'Workers Compensation', href: '/insurance/business/workers-comp' },
        ]
      },
      {
        name: 'Health',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Health Insurance', href: '/insurance/health/individual' },
          { name: 'Dental Insurance', href: '/insurance/health/dental' },
          { name: 'Medicare Advantage Plans', href: '/insurance/health/medicare-advantage' },
          { name: 'Medicare Supplement Insurance', href: '/insurance/health/medicare-supplement' },
          { name: 'Vision Insurance', href: '/insurance/health/vision' },
        ]
      },
      {
        name: 'Life/Financial',
        href: '#',
        hasSubmenu: true,
        submenu: [
          { name: 'Life Insurance', href: '/insurance/life-financial/life' },
          { name: 'Annuities', href: '/insurance/life-financial/annuities' },
          { name: 'Disability Insurance', href: '/insurance/life-financial/disability' },
          { name: 'Umbrella Insurance', href: '/insurance/life-financial/umbrella' },
        ]
      },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
    setActiveSubmenu(null)
  }

  const handleSubmenuEnter = (itemName: string) => {
    setActiveSubmenu(itemName)
  }

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              src="/images/jeca-resources-logo.png"
              alt="JECA Resources & Services"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 touch-target-comfortable hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="text-sm lg:text-sm xl:text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-all duration-300 relative group flex items-center gap-1 px-2 py-2 rounded-md hover:bg-gray-50"
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.name ? "rotate-180" : ""
                    )}
                  />
                )}
                <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 lg:w-72 xl:w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <div
                        key={dropdownItem.name}
                        className="relative"
                        onMouseEnter={() => dropdownItem.hasSubmenu && handleSubmenuEnter(dropdownItem.name)}
                        onMouseLeave={() => dropdownItem.hasSubmenu && handleSubmenuLeave()}
                      >
                        {dropdownItem.external ? (
                          <a
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <span>{dropdownItem.name}</span>
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <span>{dropdownItem.name}</span>
                            {dropdownItem.hasSubmenu && (
                              <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                            )}
                          </Link>
                        )}

                        {/* Submenu */}
                        <AnimatePresence>
                          {dropdownItem.hasSubmenu && dropdownItem.submenu && activeSubmenu === dropdownItem.name && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-0 left-full ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-60"
                            >
                              {dropdownItem.submenu.map((submenuItem) => (
                                submenuItem.external ? (
                                  <a
                                    key={submenuItem.name}
                                    href={submenuItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                  >
                                    <span>{submenuItem.name}</span>
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                ) : (
                                  <Link
                                    key={submenuItem.name}
                                    href={submenuItem.href}
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                  >
                                    {submenuItem.name}
                                  </Link>
                                )
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:justify-end lg:items-center lg:space-x-4 lg:flex-shrink-0 lg:ml-8 xl:ml-10">
          {/*<Link
            href="/login"
            className="text-sm lg:text-sm xl:text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
          >
            Log in
          </Link>*/}
          <a
            href="https://customerservice.agentinsure.com/EzlynxCustomerService/jeca/Account/LogIn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-600 px-4 py-2.5 lg:px-3.5 lg:py-2.5 xl:px-4 xl:py-3 text-sm lg:text-sm xl:text-base font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200 hover:shadow-md"
          >
            Client Portal
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-blue-600 px-4 py-2.5 lg:px-3.5 lg:py-2.5 xl:px-4 xl:py-3 text-sm lg:text-sm xl:text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:shadow-md"
          >
            Get Quote
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50 bg-gray-900/75 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                src="/images/jeca-resources-logo.png"
                alt="JECA Resources & Services"
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 touch-target-comfortable hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 touch-target transition-colors mobile-nav-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <div key={dropdownItem.name}>
                            {dropdownItem.external ? (
                              <a
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-6 text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                                <svg className="inline h-3 w-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              <Link
                                href={dropdownItem.href}
                                className="-mx-3 block rounded-lg px-3 py-3 text-sm leading-6 text-gray-600 hover:bg-gray-50 hover:text-blue-600 touch-target transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                            {dropdownItem.hasSubmenu && dropdownItem.submenu && (
                              <div className="ml-6 mt-1 space-y-1">
                                {dropdownItem.submenu.map((submenuItem) => (
                                  submenuItem.external ? (
                                    <a
                                      key={submenuItem.name}
                                      href={submenuItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2.5 text-xs leading-5 text-gray-500 hover:bg-gray-50 hover:text-blue-600 touch-target transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <span>{submenuItem.name}</span>
                                      <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </a>
                                  ) : (
                                    <Link
                                      key={submenuItem.name}
                                      href={submenuItem.href}
                                      className="-mx-3 block rounded-lg px-3 py-2.5 text-xs leading-5 text-gray-500 hover:bg-gray-50 hover:text-blue-600 touch-target transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {submenuItem.name}
                                    </Link>
                                  )
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                  <PhoneIcon className="h-5 w-5 text-blue-600" />
                  <a href="tel:1-800-JECA-INS" className="font-medium hover:text-blue-600 transition-colors">
                    1-800-JECA-INS
                  </a>
                </div>
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 touch-target transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <a
                  href="https://customerservice.agentinsure.com/EzlynxCustomerService/jeca/Account/LogIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 block rounded-lg bg-gray-600 px-4 py-3 text-center text-base font-semibold text-white hover:bg-gray-500 touch-target-comfortable transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client Portal
                </a>
                <Link
                  href="/quote"
                  className="mx-3 block rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white hover:bg-blue-500 touch-target-comfortable transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
