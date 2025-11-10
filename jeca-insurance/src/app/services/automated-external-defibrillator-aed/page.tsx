'use client'

import React from 'react'
import Link from 'next/link'

export default function AEDPage() {
  return (
    <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="AED banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
          alt="  Automated External Defibrillator (AED) background"
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
              Automated External Defibrillator (AED)
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
                Automated External Defibrillator (AED)
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                  Bonnet Healthcare Training Center is committed to providing world-class AED Training that empowers healthcare professionals to deliver exceptional cardiac emergency care.We recognize AED training as essential for cultivating a network of confident first responders who strengthen community resilience.

                </p>
                <p>
                  Our AED training courses focus on hands-on practice to foster participants' assurance in deploying these vital devices. Via realistic simulations and engaging demos, learners hone skills in finding and attaching AEDs, assessing heart rhythms, and administering shocks as required.

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
                src="https://cprcare.com/wp-content/uploads/2024/09/Step-by-Step-Guide-to-Using-an-Automated-External-Defibrillator-AED-post-img.webp"
                alt=" Automated External Defibrillator (AED)"
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
              AEDs form a vital link in the survival chain for cardiac arrest victims. Our AED Training service is designed for healthcare professionals, first responders, and motivated individuals seeking the readiness to respond decisively and with assurance in high-stakes emergencies.

            </p>
            <p>
              we deliver thorough AED (Automated External Defibrillator) Training services, equipping individuals with the expertise and practical abilities to deploy this essential device with precision during critical emergencies.

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
                  <span className="font-semibold text-gray-900">Introduction to AEDs:</span> Participants gain insight into the AED's objectives, operational mechanics, and essential components, ensuring a solid foundation for effective use.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Key Safety Protocols:</span> Participants receive instruction on essential safety protocols for AED application, covering scene evaluation for hazards, safeguarding personal well-being, and establishing a protected space for the victim and rescuers throughout the deployment.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">AED Operation:</span> Participants engage in practical sessions to master AED operation, covering steps like powering on and preparing the device, securely attaching electrode pads to the victim's chest, and adhering to its guided voice and visual cues for effective use.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">AED Application and Usage:</span> Participants develop proficiency in AED application, encompassing rhythm analysis, timely shock delivery as needed, and effective synchronization of CPR with AED interventions to optimize resuscitation efforts.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Proper AED Electrode Placement:</span> Participants master the precise application of AED electrode pads across age groups, from adults to children and infants, ensuring optimal device performance.

                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://head2toefirstaid.com.au/wp-content/uploads/2019/03/AdobeStock_92473231-1536x1022.jpeg"
                alt=" Automated External Defibrillator (AED)"
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
           Benefits of Automated External Defibrillator (AED)
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Elevated Survival Outcomes:</span> AED training empowers individuals with vital knowledge and practical skills to deploy an AED proficiently during cardiac emergencies, potentially saving lives.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhanced Emergency Response Speed:</span> AED training highlights the critical value of immediate response in cardiac crises. Participants acquire skills to swiftly evaluate the scene, access an AED, and apply it efficiently to improve outcomes.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Lifesaving Potential:</span> ACLS training empowers healthcare professionals with critical skills that directly translate to saving lives during cardiac emergencies. When trained professionals deliver high-quality CPR, rapidly intervene with appropriate medications, and utilize advanced airway management, survival rates increase significantly—with research demonstrating that early, effective ACLS interventions can improve patient survival by up to 30%.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Intuitive AED Controls:</span> AED training introduces participants to the straightforward operation of AED units, building familiarity through hands-on practice. Learners master key steps like activating the device, applying electrode pads, and adhering to its intuitive voice prompts and visual cues for confident use.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Seamless AED-CPR Coordination:</span> AED training seamlessly merges CPR (Cardiopulmonary Resuscitation) techniques with AED deployment, equipping participants to deliver comprehensive life-support during cardiac events.

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