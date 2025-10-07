'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function OnlineDocumentsPage() {

  const documentTypes = [
    {
      title: 'Policy Documents',
      description: 'Access your current policy documents, declarations, and coverage details.',
      icon: '📄',
      image: '/images/policy-documents.jpg'
    },
    {
      title: 'Claims Documents',
      description: 'View and download claim forms, status updates, and settlement documents.',
      icon: '📋',
      image: '/images/claims-documents.jpg'
    },
    {
      title: 'Payment Records',
      description: 'Access payment history, receipts, and billing statements.',
      icon: '💳',
      image: '/images/payment-records.jpg'
    },
    {
      title: 'ID Cards',
      description: 'Download and print your insurance ID cards instantly.',
      icon: '🆔',
      image: '/images/id-cards.jpg'
    },
    {
      title: 'Certificates',
      description: 'Generate certificates of insurance for lenders or third parties.',
      icon: '🏆',
      image: '/images/certificates.jpg'
    },
    {
      title: 'Tax Documents',
      description: 'Access tax-related insurance documents and forms.',
      icon: '📊',
      image: '/images/tax-documents.jpg'
    }
  ]



  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online Documents
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Access your insurance documents anytime, anywhere. Secure, convenient, and available 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Document Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Documents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access all your important insurance documents in one secure location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {documentTypes.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{doc.title}</h3>
              <p className="text-gray-600">{doc.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Documents?</h2>
            <p className="text-lg text-gray-600 mb-6">
              For online document queries, you can contact us and our team will assist you with accessing your important insurance documents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </Link>
            <div className="text-gray-500 text-sm">
              Available 24/7 for document assistance
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
