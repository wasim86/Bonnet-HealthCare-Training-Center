'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

// This page mirrors the Services page content and layout
export default function EducationServicesPage() {
//   const services = [
//     {
//       title: 'Report A Claim',
//       description:
//         'Quick and easy claim reporting process. Get your claim started 24/7.',
//       href: '/services/report-claim',
//       icon: '📋',
//       featured: true,
//     },
//     {
//       title: 'Policy Review',
//       description:
//         'Free policy review to ensure you have the right coverage at the best price.',
//       href: '/services/policy-review',
//       icon: '📄',
//       featured: true,
//     },
//     {
//       title: 'Update Contact Info',
//       description:
//         'Keep your policy information current with our easy update process.',
//       href: '/services/update-contact',
//       icon: '📞',
//       featured: false,
//     },
//     {
//       title: 'Proof of Insurance',
//       description:
//         'Get instant proof of insurance documents for your records.',
//       href: '/services/proof-insurance',
//       icon: '📜',
//       featured: false,
//     },
//     {
//       title: 'Free Consultation',
//       description:
//         'Schedule a free consultation with our insurance experts.',
//       href: '/services/consultation',
//       icon: '💬',
//       featured: true,
//     },
//     {
//       title: 'Online Documents',
//       description:
//         'Access all your insurance documents online anytime, anywhere.',
//       href: '/services/documents',
//       icon: '💻',
//       featured: false,
//     },
//     {
//       title: 'JECA Tax Services',
//       description: 'Professional tax preparation and planning services.',
//       href: 'https://www.jecataxservices.com/',
//       icon: '📊',
//       featured: true,
//     },
//     {
//       title: 'Blog',
//       description:
//         'Stay informed with our latest insurance tips and industry news.',
//       href: '/blog',
//       icon: '📝',
//       featured: false,
//     },
//   ]

//   const featuredServices = services.filter(service => service.featured)
//   const otherServices = services.filter(service => !service.featured)

  return (
   <div className="bg-gray-50 min-h-screen">
      {/* Education Services */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Education Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
             Explore our diverse range of programs, including Safety Training, Infection Control, Life Skills Development, Stress Relief Workshops, Heart Savers First Aid, and Mental Health Awareness sessions—each designed to empower individuals and organizations with essential knowledge and practical skills for everyday and emergency situations.


            </p>
          </motion.div>
        </div>
      </div>
      {/* Life Skills Education */}
      <div className="bg-gradient-to-r from-rose-50 to-fuchsia-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* ACLS */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://nalandaschool.org/wp-content/uploads/2023/08/Life-Skills-Education-for-Students0A-1-1536x1024.jpg"
                alt="ACLS training"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Life Skills Education
</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                 We believe that everyone deserves the chance to acquire vital life-saving skills, empowering individuals from all backgrounds and professions to respond effectively in critical situations.

                </p>
                <a href="/Education-Services/life-skills-education" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Infection control */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://lirp.cdn-website.com/c6cebdbb/dms3rep/multi/opt/AdobeStock_129008289-dc582823-1920w.jpeg"
                alt="BLS"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Infection control </h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                 Our Infection Control Training program is designed to equip individuals with the essential knowledge and practical skills needed to effectively prevent and minimize the spread of infections in various environments.

                </p>
                <a href="/Education-Services/infection-control" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

             {/* Safety */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://mybites.io/wp-content/uploads/2021/11/Safety-training-at-the-warehouse.jpg"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Safety</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Our Safety Training program is committed to empowering individuals with the essential knowledge and practical skills needed to promote and maintain a safe, secure, and risk-aware environment for themselves and those around them.

                </p>
                <a href="/Education-Services/safety" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

             {/* Medication Safety */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://www.quasrapp.com/wp-content/uploads/2022/09/Polypharmacy-2.jpg"
                alt="AED"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Medication Safety</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                 Our Medication Safety Training program is designed to equip healthcare professionals and individuals with the essential knowledge and practical skills to prevent medication errors, ensure safe handling, and promote effective medication management across all care settings.

                </p>
                <a href="/Education-Services/medication-safety" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

             {/* Mental Health Awareness */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://www.wgu.edu/blog/2018/10/importance-mental-health-awareness-schools/_jcr_content/root/container/imageandtext.coreimg.85.800.jpeg/1705598842574/worriedteentakingatest-j-525364.jpeg"
                alt="Heart Savers First AID"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Mental Health Awareness</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Our Mental Health Awareness Training program is designed to cultivate understanding, empathy, and proactive support for mental well-being. It equips individuals with the knowledge and practical tools to recognize mental health challenges, reduce stigma, and foster healthy, supportive environments in both personal and professional settings.

                </p>
                <a href="/Education-Services/mental-health-awareness" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

             {/*  Stress Relief Training */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://www.stma.org.in/assets/images/stress.jpg"
                alt="Heimlich Maneuver"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Stress Relief Training</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Our Stress Relief Training program is designed to equip individuals with practical techniques and evidence-based strategies to effectively manage and reduce stress, enhancing emotional resilience and well-being in both personal and professional settings.

                </p>
                <a href="/Education-Services/stress-relief-training" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* EPI-PEN Training */}
            {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="https://www.scnsc.org/sites/default/files/styles/resources_image/public/images/products/EpiPen.jpeg.webp?itok=aVlArPl8"
                alt="EPI-PEN Training"
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">EPI-PEN Training</h3>
                <p className="text-gray-600 text-sm leading-6 mb-4">
                  Bonnet Healthcare Training Center provides comprehensive Epi-Pen certification for healthcare professionals, caregivers, and individuals across all backgrounds.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 font-semibold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
     
      {/* Current Professional Training Offerings */}
      <section aria-labelledby="latest-courses" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="latest-courses" className="text-3xl md:text-4xl font-bold text-gray-900">Current Professional Training Offerings</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              At Bonnet Healthcare Training Center, we're excited to share our newest training programs that teach you the latest life-saving techniques in an easy-to-understand way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course 1 */}
            <Link href="#" aria-label="Professional classroom training" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Participants in a classroom training with laptops"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>

            {/* Course 2 */}
            <Link href="#" aria-label="Corporate training session" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://every1heartmatters.com/wp-content/uploads/2023/06/240_F_195067848_mZ18wn4KUYYkI1BvGNtDrbD8GTGC7GZk.jpg"
                alt="Corporate training group discussion"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>

            {/* Course 3 */}
            <Link href="#" aria-label="Mental health awareness training" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Instructor presenting health awareness on a whiteboard"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>

            {/* Course 4 */}
            <Link href="#" aria-label="Hands-on CPR training with manikins" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://every1heartmatters.com/wp-content/uploads/2023/06/Untitled-design-16.png"
                alt="Hands-on CPR practice with manikins"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>

            {/* Course 5 */}
            <Link href="#" aria-label="First aid bandaging practice" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3763873/pexels-photo-3763873.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="First aid bandaging practice session"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>

            {/* Course 6 */}
            <Link href="#" aria-label="On-site safety training for workers" className="group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl">
              <img
                src="https://every1heartmatters.com/wp-content/uploads/2023/06/240_F_603239501_8HbTZsqORNHxgohTgLKFsWoDfsVE0hAR.jpg"
                alt="On-site safety training for industrial workers"
                className="w-full h-48 object-cover rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-md transition"
              />
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Require Urgent Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to support your healthcare training journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="tel:954-709-8196"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call 954-709-8196
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}