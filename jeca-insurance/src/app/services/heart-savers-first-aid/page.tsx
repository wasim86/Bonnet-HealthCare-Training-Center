'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import AppointmentModal from '@/components/ui/AppointmentModal' 

export default function HeartSaversFirstAidPage() {
 
const [open, setOpen] = useState(false)
  return (
     <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="ACLS banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
          alt=" Heart Savers First AID background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = '/images/services/acls/acls-illustration-323817935.jpg'
          }}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
             Heart Savers First AID
            </h1>
          </div>
        </div>
      </section>
      
     
      {/* Hero Section - two column layout matching screenshot */}
      <section className="bg-gray-100 mt-0 sm:mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="hidden sm:block text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                Heart Savers First AID
              </h1>
              <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold text-base sm:text-lg">
                 At Bonnet Healthcare Training Center,we believe that everyone should have access to comprehensive first aid training.
                </p>
                <p className="text-sm sm:text-base">
                  Our Heart Savers First Aid Training courses focus on immersive hands-on practice and realistic scenarios to sharpen participants' skills and build unshakeable confidence. Through engaging demonstrations and interactive drills, learners master essential techniques like bandaging wounds, performing CPR, operating AEDs, and handling diverse medical crises with poise and precision.

                </p>
              </div>
              <div className="mt-6">
               <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#E84545] focus:ring-offset-2 transition-colors">Make An Appointment</button>
              </div>
            </div>

            {/* Right: CPR training image */}
            <div className="w-full">
              <img
                src="https://savealittlelife.com/wp-content/uploads/2017/01/pediatric-first-aid-cpr-aed.jpg"
                alt=" Heart Savers First AID"
                className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-xl shadow-sm object-cover"
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
              First aid represents an essential skill that can profoundly impact survival and minimize injury until expert medical care arrives. Our Heart Savers First Aid Training service welcomes participants from every walk of life, from workplace teams and educators to parents, caregivers, and anyone eager to acquire vital life-saving abilities.

            </p>
            <p>
               We take pride in delivering thorough Heart Savers First Aid Training services that arm participants with essential knowledge and practical abilities to handle diverse medical emergencies with competence and assurance.

            </p>
          </div>
        </div>
      </section>

      {/* Course Content section placed before the footer (matches provided UI) */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Bulleted course content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Content</h2>
              <div className="mt-2 h-0.5 w-24 sm:w-32 md:w-40 bg-blue-600" aria-hidden="true" />

              <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                <li>
                  <span className="font-semibold text-gray-900">Emergency Scene Evaluation:</span> Participants master techniques for evaluating emergency scenes to protect their own safety, bystanders, and the situation overall before providing aid.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Managing Severe Bleeding:</span> Participants develop expertise in identifying and controlling various bleeding scenarios, from minor to life-threatening. They acquire hands-on proficiency in techniques such as direct pressure application, proper use of dressings and bandages, and appropriate deployment of tourniquets for severe cases.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Effective Wound Management:</span> Participants master essential wound care protocols, from initial cleaning and disinfection to secure dressing application. They recognize how these measures safeguard against infections and support faster, safer healing.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Burn and Scald Treatment:</span> Participants acquire skills to evaluate and administer immediate first aid for burns and scalds, learning to distinguish minor incidents that can be managed on-site from severe cases necessitating urgent medical care.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Sprain and Fracture Response:</span> Participants build expertise in evaluating injuries and delivering targeted first aid for fractures and sprains, ensuring safe stabilization and support until professional help arrives.

                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://www.heartfoundationja.org/wp-content/uploads/2021/08/shutterstock_1476765458-min-scaled.jpg"
                alt=" Heart Savers First AID"
                className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-lg shadow-md object-cover"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Benefits of Heart Savers First AID
          </h2>
          <div className="mt-2 h-0.5 w-28 sm:w-40 md:w-52 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <li>
              <span className="font-semibold text-gray-900">Versatile Emergency Readiness
:</span> Heart Savers First Aid Training empowers participants to confidently address diverse emergencies, from medical crises and injuries to everyday accidents.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Mitigating Additional Harm
:</span> Heart Savers First Aid Training equips participants with techniques to stabilize injuries and curb their escalation. By mastering wound care, fracture immobilization, and burn management, individuals lower the likelihood of complications and foster quicker recovery.

            </li>
            
            <li>
              <span className="font-semibold text-gray-900">Boosted Responder Assurance
:</span> Heart Savers First Aid Training instills unwavering confidence in participants, empowering them to navigate emergency situations with skill and poise.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Regulatory Safety Alignment
: </span>Heart Savers First Aid Training fulfills mandatory requirements for many workplaces, especially those committed to safeguarding employee well-being. Upon completion, participants satisfy key regulatory and compliance obligations, fostering a secure environment for themselves and their teams.

            </li>
          </ul>

          <div className="mt-8">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors">Make An Appointment</button>
          </div>
        </div>
      </section>
      <AppointmentModal open={open} onClose={() => setOpen(false)} defaultService="Heart Savers First AID" />
    </main>
  )
}