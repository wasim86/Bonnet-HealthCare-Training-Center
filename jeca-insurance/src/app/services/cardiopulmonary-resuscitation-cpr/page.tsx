'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AppointmentModal from '@/components/ui/AppointmentModal'

export default function CPRPage() {
  const [open, setOpen] = useState(false)
  return (
    <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="CPR banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
          alt="   Cardiopulmonary Resuscitation (CPR)"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = '/images/services/acls/acls-illustration-323817935.jpg'
          }}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-50 w-200 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
              Cardiopulmonary Resuscitation (CPR)
            </h1>
          </div>
        </div>
      </section>
      
     
      {/* Hero Section - two column layout matching screenshot */}
      <section className="bg-gray-100 mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Cardiopulmonary Resuscitation (CPR)
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className='font-semibold'>
                 At Bonnet Healthcare Training Center,We believe that CPR training should be accessible to everyone, as it empowers individuals to become capable first responders in emergencies. Join us in our mission to spread CPR knowledge and skills, helping to save more lives in communities everywhere.
                </p>
                <p>
                  Our CPR Training courses are designed to be practical and hands-on, allowing participants to practice their skills in simulated scenarios. We emphasize the importance of early intervention, effective chest compressions, and maintaining a calm and confident approach during emergency situations.
                </p>
              </div>
              <div className="mt-6">
                <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#E84545] focus:ring-offset-2 transition-colors">Make An Appointment</button>
              </div>
            </div>

            {/* Right: CPR training image */}
            <div className="w-full">
              <img
                src="https://metaclinic.ng/wp-content/uploads/2023/08/how-to-do-CPR-3.jpg"
                alt="Cardiopulmonary Resuscitation (CPR)"
                className="w-full h-auto rounded-xl shadow-sm object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.src = '/images/services/acls/acls-illustration-323817935.jpg'
                }}
              />
            </div>
          </div>
        </div>
        
      </section>

      {/* Additional informational section placed right before the footer */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              CPR is a vital lifesaving skill that can greatly increase the chances of survival during cardiac arrest or other medical emergencies. Our CPR training program is designed for healthcare professionals, first responders, and anyone who wants to be ready to act confidently in emergency situations.
            </p>
            <p>
               Bonnet Healthcare Training Center is dedicated to e provide complete CPR (Cardiopulmonary Resuscitation) training to help people learn how to act quickly and confidently during life-threatening emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Course Content section placed before the footer (matches provided UI) */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Bulleted course content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Content</h2>
              <div className="mt-2 h-0.5 w-84 bg-blue-600" aria-hidden="true" />

              <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900">First Response Care: </span>Participants learn the essential CPR skills, such as how to do chest compressions correctly, give rescue breaths, and check if the person is responsive and breathing.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Adult Cardiopulmonary Resuscitation:</span> Participants develop hands-on expertise in delivering CPR to adult victims, mastering proper hand positioning, optimal compression depth, the ideal compression-to-ventilation ratio, and the critical need for continuous chest compressions without interruption.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">CPR for Infants and Children: </span>Participants learn the unique considerations and techniques required when performing CPR on infants and children.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Automated External Defibrillator (AED) Usage:</span> Participants acquire practical skills in operating an AED, including analyzing heart rhythms, administering timely shocks when indicated, and seamlessly integrating AED use with ongoing CPR to enhance survival outcomes.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Techniques for Rescue Breathing:</span> Participants master essential rescue breathing methods, encompassing mouth-to-mouth ventilation and the safe use of barrier devices such as pocket masks, to support effective oxygenation during emergencies.
                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/CPR_training-04.jpg"
                alt="Instructors demonstrating ACLS techniques during hands-on training"
                className="w-full h-150 rounded-lg shadow-md object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.src = '/images/services/acls/acls-illustration-323817935.jpg'
                }}
              />
            </div>
          </div>
        </div>
      </section>
       {/* Benefits section (as per screenshot) */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Benefits of Cardiopulmonary Resuscitation (CPR)
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Ability to Save Lives:</span> CPR training empowers individuals with essential knowledge and hands-on skills to deliver critical life-saving interventions during cardiac arrest or other urgent medical crises.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Swift Emergency Response:</span>CPR training underscores the vital role of immediate action in emergencies. Participants develop skills to identify cardiac arrest indicators quickly and initiate a prompt response, thereby boosting the likelihood of successful recovery.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Assurance in Crisis:</span>Gaining proficiency in BLS empowers individuals to respond to emergencies with assurance and competence.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Boosted Self-Assurance:</span> CPR training builds lasting confidence in participants, empowering them to confidently manage emergency scenarios and deliver vital assistance when it matters most.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhancing Community Well-Being: </span>Expanding the number of CPR-trained individuals fosters greater overall safety within communities, enhancing preparedness and response capabilities for emergencies.
            </li>
          </ul>

          <div className="mt-8">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors">Make An Appointment</button>
          </div>
        </div>
      </section>
      <AppointmentModal open={open} onClose={() => setOpen(false)} defaultService="Hands Only CPR" />
    </main>
  )
}