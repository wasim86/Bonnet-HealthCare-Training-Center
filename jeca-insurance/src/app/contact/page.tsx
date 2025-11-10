'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon as Clock24Icon,
  StarIcon
} from '@heroicons/react/24/outline'
import { useLiveChat } from '@/contexts/LiveChatContext'

const contactMethods = [
  {
    name: 'Phone Support',
    description: 'Speak with a licensed agent',
    contact: '954-709-8196',
    availability: '24/7 Available',
    icon: PhoneIcon,
    color: 'blue',
  },
  {
    name: 'Email Support',
    description: 'Send us your questions',
    contact: 'contact@bonnethealthcare.com',
    availability: 'Response within 24 hours',
    icon: EnvelopeIcon,
    color: 'green',
  },
  {
    name: 'Live Chat',
    description: 'Get instant help online',
    contact: 'Start Chat',
    availability: 'Mon-Fri 8AM-8PM EST',
    icon: ChatBubbleLeftRightIcon,
    color: 'purple',
  },
  // {
  //   name: 'Claims Support',
  //   description: 'File or check claim status',
  //   contact: '954-709-8196',
  //   availability: '24/7 Emergency Claims',
  //   icon: QuestionMarkCircleIcon,
  //   color: 'red',
  // },
]

const offices = [
  {
    city: 'New York',
    address: '123 Insurance Blvd, Suite 100',
    zipCode: 'New York, NY 10001',
    phone: '(212) 555-0123',
    hours: 'Mon-Fri 9AM-6PM',
  },
  {
    city: 'Los Angeles',
    address: '456 Coverage Ave, Floor 5',
    zipCode: 'Los Angeles, CA 90210',
    phone: '(310) 555-0456',
    hours: 'Mon-Fri 8AM-7PM',
  },
  {
    city: 'Chicago',
    address: '789 Protection St, Suite 200',
    zipCode: 'Chicago, IL 60601',
    phone: '(312) 555-0789',
    hours: 'Mon-Fri 9AM-6PM',
  },
]

export default function ContactPage() {
  const { openChat } = useLiveChat()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [contactNumber, setContactNumber] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phone,
          subject: formData.subject,
          message: formData.message,
          inquiryType: formData.inquiryType || null,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        setContactNumber(result.contactNumber)
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: '',
        })
      } else {
        throw new Error('Failed to submit contact form')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 min-h-[80vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Particles - Fixed positioning to avoid hydration issues */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const leftPosition = ((i * 41) % 100); // Pseudo-random but deterministic
            const topPosition = ((i * 67) % 100);
            const duration = 10 + ((i * 2) % 10);
            const delay = (i * 0.7) % 5;

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  left: `${leftPosition}%`,
                  top: `${topPosition}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="h-8 w-8 text-yellow-300" />
              </motion.div>
              <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6"
            >
              Contact
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Bonnet HealthCare</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto max-w-2xl text-xl leading-8 text-blue-100 mb-12"
            >
              Have questions about our training programs? Connect with Bonnet Healthcare Training Center's expert team for course information, registration assistance, and certification guidance.
            </motion.p>

            {/* Quick Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <PhoneIcon className="h-8 w-8 text-yellow-300 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-100 text-sm mb-3">24/7 Support Available</p>
                <a href="tel:877-501-5460" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
                  954-709-8196
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <EnvelopeIcon className="h-8 w-8 text-yellow-300 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-100 text-sm mb-3">Response within 24 hours</p>
                <a href="mailto:support@jecainsurance.com" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
                  contact@bonnethealthcare.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-yellow-300 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-blue-100 text-sm mb-3">Instant assistance online</p>
                <button
                  onClick={openChat}
                  className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors cursor-pointer"
                >
                  Start Chat
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="h-6 w-6 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                Contact Options
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Multiple Ways to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reach Us</span>
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Select the contact method most convenient for you
            </p>
          </motion.div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative flex flex-col rounded-3xl bg-white/80 backdrop-blur-sm p-8 ring-1 ring-gray-200/50 xl:p-10 hover:ring-blue-300/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center gap-x-4 mb-6">
                  <motion.div
                    className={`h-14 w-14 flex-none rounded-xl bg-gradient-to-r ${
                      method.color === 'blue' ? 'from-blue-500 to-blue-700' :
                      method.color === 'green' ? 'from-green-500 to-green-700' :
                      method.color === 'purple' ? 'from-purple-500 to-purple-700' :
                      'from-red-500 to-red-700'
                    } flex items-center justify-center shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <method.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-bold leading-8 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {method.name}
                  </h3>
                </div>
                <p className="text-base leading-6 text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Clock24Icon className="h-4 w-4 mr-2" />
                  {method.availability}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Office Locations */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 sm:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-40 right-40 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  &gt;&gt;&gt; CONTACT US &lt;&lt;&lt;
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8 leading-tight text-center">
                Feel free to get in touch with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> experts</span>
              </h2>

              {/* Contact Info */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <PhoneIcon className="h-4 w-4 text-gray-800" />
                  </div>
                  <div>
                    <a href="tel:954-709-8196" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                      954-709-8196
                    </a>
                    <p className="text-sm text-gray-600">contact@bonnethealthcare.com</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Fax: ( 954) 709-8196</p>
                  <p>7523 SW 8th CT North Lauderdale, FL 33068</p>
                </div>
              </div>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="First name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="Last name"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="Email address"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="Phone number (optional)"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    viewport={{ once: true }}
                  >
                    <select
                      name="inquiryType"
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                    >
                      <option value="">Select inquiry type (optional)</option>
                      <option value="ACLC">ACLC</option>
                      <option value="BLS ">BLS</option>
                      <option value="Hands only CPR">Hands only CPR</option>
                      <option value="AED">AED</option>
                      <option value="Heart Savers First AID">Heart Savers First AID</option>
                      <option value="Heimlich Maneuve">Heimlich Maneuve</option>
                       <option value="EPI-PEN">EPI-PEN</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Compliment">Compliment</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="Subject"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your insurance needs or ask any questions..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send a Message'
                  )}
                </motion.button>
              </motion.form>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-green-800 font-semibold">Message Sent Successfully!</h4>
                      <p className="text-green-700 text-sm">
                        Thank you for contacting us! Your message has been received.
                        {contactNumber && (
                          <span className="block font-medium">Reference Number: {contactNumber}</span>
                        )}
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <div>
                      <h4 className="text-red-800 font-semibold">Error Sending Message</h4>
                      <p className="text-red-700 text-sm">
                        Sorry, there was an error sending your message. Please try again or call us directly at <a href="tel:954-709-8196" className="underline hover:text-red-800 transition-colors">954-709-8196</a>.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Office Hours */}
              {/* <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-100">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Training Center Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">Closed</span>
                  </div>
                </div>
              </div> */}

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border border-yellow-100">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <StarIcon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Why Choose Bonnet Healthcare Training Center?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Expert Instructors with 20+ Years Experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Personalized Training Programs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">24/7 Support and Guidance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Industry-Recognized Certifications</p>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPinIcon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Visit Our Training Center</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <p className="text-gray-900 font-semibold mb-2">Bonnet HealthCare Training Center</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      1379 N. Nebraska Ave Suite 103<br />
                      Tampa, FL 33613
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Free parking available</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Wheelchair accessible</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="relative bg-blue-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative px-6 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ShieldCheckIcon className="h-8 w-8 text-yellow-300" />
              </motion.div>
              <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
                Emergency Support
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
            >
              24/7 Emergency
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Care Training with Compassion at Heart</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xl text-xl leading-8 text-red-100 mb-10"
            >
             At Bonnet Healthcare Training Center, our 24/7 hotline is always available for anyone needing to file an emergency requiring immediate assistance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-x-6"
            >
              <motion.a
                href="tel:877-501-5460"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-2xl hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Emergency: 954-709-8196
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
