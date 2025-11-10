'use client'

import React from 'react'
import Link from 'next/link'

export default function BLSPage() {
  return (
   <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="ACLS banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
          alt="ACLS training banner background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = '/images/services/acls/acls-illustration-323817935.jpg'
          }}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-40 w-150 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
              Basic Life Support (BLS)
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
                Basic Life Support (BLS)
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className='font-semibold'>
                 At Bonnet Healthcare Training Center, we believe that comprehensive BLS training should be accessible to everyone who may encounter life-threatening emergencies. We're committed to empowering individuals across all backgrounds—healthcare professionals, first responders, educators, and community members—with the knowledge and confidence to become effective first responders and potentially save lives.
                </p>
                <p>
                  Our BLS program at Bonnet Healthcare Training Center emphasizes practical skill development through comprehensive hands-on training and scenario simulations. Participants gain proficiency in high-quality CPR, effective ventilation delivery, AED assessment and use, and collaborative team dynamics during emergency situations. Graduates receive a 2-year American Heart Association BLS certification upon course completion.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#E84545] focus:ring-offset-2 transition-colors"
                >
                  Make An Appointment
                </Link>
              </div>
            </div>

            {/* Right: Basic Life Support (BLS) image */}
            <div className="w-full">
              <img
                src="https://images.pexels.com/photos/33862096/pexels-photo-33862096.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
                alt="Basic Life Support (BLS)"
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
              Basic Life Support (BLS) is a foundational training program focusing on critical skills essential for responding to cardiac arrest, respiratory emergencies, and life-threatening medical situations. Bonnet Healthcare Training Center's BLS training is designed for healthcare professionals, first responders, workplace employees, educators, and community members who may encounter emergencies where immediate life support intervention is needed.
            </p>
            <p>
               Bonnet Healthcare Training Center is dedicated to delivering comprehensive Basic Life Support (BLS) training programs that equip individuals with essential knowledge and practical skills to respond effectively during life-threatening emergencies. Our commitment ensures participants develop confidence and competency to perform high-quality interventions when lives depend on immediate action.
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
                  <span className="font-semibold text-gray-900">Rapid Cardiac Arrest Recognition: </span>Participants master the essential skill of recognizing cardiac arrest through identification of three critical signs: sudden unresponsiveness, no normal breathing, and no pulse. Training emphasizes quick recognition to enable immediate CPR initiation when every second counts.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Mastering High-Quality CPR:</span> Participants develop proficiency in evidence-based CPR techniques meeting American Heart Association standards. Training emphasizes proper hand placement on the lower sternum, chest compressions at the optimal rate of 100-120 compressions per minute, adequate compression depth of 2-2.4 inches with full chest recoil, rescue breathing at 30 compressions-to-2 breaths ratio, and minimizing interruptions to maintain superior blood flow and oxygen delivery.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">AED Operation & Defibrillation: </span>Participants develop proficiency in using an Automated External Defibrillator (AED) through systematic training on device operation and proper electrode pad placement. Training emphasizes powering the device, exposing and preparing the patient's bare chest, correctly positioning pads in upper-right and lower-left positions, allowing the AED to analyze the cardiac rhythm, ensuring all rescuers are clear before delivering the defibrillation shock, and immediately resuming CPR—all crucial steps that deliver timely, life-saving electrical therapy.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Choking Response Mastery:</span> Participants master recognition and treatment of foreign body airway obstruction in both adults and infants. Training covers identifying complete airway blockage, performing back blows and abdominal thrusts for adults/children, delivering back blows and chest thrusts for infants, and continuing until obstruction clears or emergency help arrives. Participants learn critical age-specific modifications and CPR continuation if needed.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Modified CPR Protocols:</span> Participants master CPR modifications for special patient populations including pregnant women receiving left uterine displacement techniques to optimize cardiac output, opioid overdose victims receiving naloxone alongside standard BLS, trauma patients with cervical spine precautions, and other circumstances requiring protocol adjustments. Training emphasizes that high-quality CPR remains fundamental while specific modifications optimize outcomes.
                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/CPR_training-04.jpg"
                alt="Instructors demonstrating ACLS techniques during hands-on training"
                className="w-full h-270 rounded-lg shadow-md object-cover"
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
            Benefits of Basic Life Support (BLS)
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Life-Saving Competence:</span> BLS training provides individuals with vital life-saving skills—such as CPR, airway management, and AED operation—enabling them to respond rapidly and effectively during medical emergencies and critical situations.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Immediate Response:</span> BLS training teaches participants to quickly recognize the signs of cardiac arrest and other medical emergencies, enabling them to respond rapidly and initiate life-saving interventions. Acting without delay helps stabilize the patient and provides essential support until advanced medical assistance arrives, significantly improving patient survival and recovery outcomes.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Assurance in Crisis:</span> Gaining proficiency in BLS empowers individuals to respond to emergencies with assurance and competence.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Group Cooperation:</span> BLS training highlights the value of teamwork during resuscitation, teaching participants to communicate clearly, assign responsibilities, and function as a unified team in emergency situations.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Wide Range of Uses: </span> The skills learned in BLS training can be used in a wide range of environments, such as hospitals, workplaces, schools, and public areas, making them valuable wherever emergencies may occur.
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors"
            >
              Make An Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}