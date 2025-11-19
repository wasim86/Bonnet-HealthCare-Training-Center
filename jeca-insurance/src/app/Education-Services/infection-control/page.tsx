'use client'

import Link from 'next/link'
import React from 'react'
// import { motion } from 'framer-motion'

export default function InfectionControlPage() {
  

  return (
     <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="ACLS banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
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
             Infection Control
            </h1>
          </div>
        </div>
      </section>
      
     
      {/*LInfection Control */}
      <section className="bg-gray-100 mt-0 sm:mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="hidden sm:block text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Infection Control
              </h1>
              <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed">
                <p className='font-semibold text-base sm:text-lg'>
                  At Bonnet Healthcare Training Center, We believe that every action makes a difference in preventing infections and protecting lives.


                </p>
                <p className="text-sm sm:text-base">
                  Our experienced instructors, specializing in infection prevention and control, deliver dynamic and hands-on training sessions. They share the latest best practices in infection control, covering essential topics such as proper hand hygiene, correct use of personal protective equipment (PPE), effective cleaning and disinfection procedures, and clear communication strategies to ensure safety and compliance.


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

            {/* Right: CPR training image */}
            <div className="w-full">
              <img
                src="https://lirp.cdn-website.com/c6cebdbb/dms3rep/multi/opt/AdobeStock_129008289-dc582823-1920w.jpeg"
                alt="  Infection Control"
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
             Infectious diseases present serious challenges across healthcare facilities, workplaces, schools, and community environments. Our comprehensive training programs are tailored to meet the distinct infection control requirements of various sectors, providing individuals and organizations with the knowledge and tools to maintain safe and healthy spaces.


            </p>
            <p>
              Bonnet Healthcare Training Center, We recognize the vital importance of infection prevention and control in safeguarding the health and well-being of individuals and communities. Our Infection Control Skills Training program is designed to equip participants with the essential knowledge and practical skills to reduce infection risks, promote hygiene, and ensure a clean, safe environment across all settings.


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
                  <span className="font-semibold text-gray-900">Fundamentals of Infection Prevention and Control:</span> Participants develop a clear understanding of the importance of infection control in promoting a safe and healthy environment. The training explores the impact of infections, the chain of transmission, and the critical role of effective infection control practices in preventing the spread of diseases.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Infection Control Practices and Preventive Measures:</span> The training emphasizes key strategies and practices for effective infection prevention and control. Participants are guided through essential hand hygiene techniques, including proper handwashing procedures and the appropriate use of hand sanitizers to minimize the risk of infection transmission.
             </li>
                <li>
                  <span className="font-semibold text-gray-900">Essential Infection Control Precautions:</span> Participants learn about standard precautions, the essential infection control practices designed to prevent the transmission of infectious agents and ensure a safe environment for all.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pathogen-Specific Infection Control Precautions:</span> The training introduces additional infection control measures tailored to the specific modes of pathogen transmission. Participants gain an understanding of airborne, droplet, and contact precautions, learning how to apply each effectively to minimize the spread of infectious diseases.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Environmental Cleaning and Disinfection Procedures:</span> Participants develop a thorough understanding of effective cleaning and disinfection methods essential for maintaining a safe and hygienic environment. The training covers various types of disinfectants, their correct application, and the importance of adhering to manufacturer guidelines to ensure optimal results and safety.


                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://mdforlives.com/blog/wp-content/uploads/2025/04/The-Latest-Trends-in-Infection-Control-and-Patient-Safety-1250x715.jpg"
                alt="Instructors demonstrating ACLS techniques during hands-on training"
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
           Benefits of Life Skills Education
          </h2>
          <div className="mt-2 h-0.5 w-28 sm:w-40 md:w-52 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <li>
              <span className="font-semibold text-gray-900">Developing Personal Insight and Awareness:</span> Participants gain a deeper understanding of their unique strengths, areas for growth, personal values, and guiding beliefs. This heightened self-awareness enables them to make thoughtful decisions, set purposeful goals, and align their actions with what truly matters to them.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Advanced Critical Thinking and Strategic Decision-Making:</span> Life Skills Education Training empowers participants with essential critical thinking and problem-solving abilities. Through practical learning, they develop the capacity to assess situations, explore diverse perspectives, evaluate possible outcomes, and make thoughtful, informed decisions with confidence.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhanced Emotional Awareness and Interpersonal Skills:</span> Emotional intelligence is a key factor in achieving both personal and professional success. Through Life Skills Education Training, participants strengthen their emotional intelligence by enhancing self-awareness, fostering empathy, and mastering emotional regulation to build healthier relationships and make balanced decisions.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Personal Finance and Money Management:</span> Understanding key financial principles and developing sound money management skills are essential for achieving financial stability and independence. Life Skills Education Training introduces participants to fundamental financial topics such as budgeting, saving, and making informed financial decisions that support long-term well-being.

            </li>
            {/* <li>
              <span className="font-semibold text-gray-900">Advanced Clinical Authority: </span>ACLS training expands healthcare professionals' scope of practice by authorizing advanced interventions including medication administration, ECG interpretation, transcutaneous pacing, and advanced airway management. This enhanced clinical capacity enables professionals to independently manage complex cardiac emergencies and direct team-based resuscitation efforts.
            </li> */}
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