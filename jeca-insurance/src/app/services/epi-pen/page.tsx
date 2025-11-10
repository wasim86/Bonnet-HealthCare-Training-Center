'use client'

import Link from 'next/link'
import React from 'react'

export default function EpiPenTrainingPage() {
 

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
          <div className="flex h-50 w-100 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
             EPI-PEN
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
                EPI-PEN
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                 At Bonnet Healthcare Training Center,We recognize that Epi-Pen Training is vital for anyone who may witness or respond to life-threatening allergic reactions, providing them with the confidence to act decisively when anaphylaxis strikes.

                </p>
                <p>
                 In our Epi-Pen Training course, participants master the critical skills needed to evaluate allergic reaction severity, administer epinephrine accurately via Epi-Pen, and deliver immediate care until emergency medical services arrive. Through immersive hands-on drills and realistic simulations, learners build the proficiency and self-assurance required to deploy this life-saving device effectively under pressure.


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
                src="https://www.hamiltonhealthsciences.ca/wp-content/uploads/2019/06/epi-pen.jpg"
                alt="EPI-PEN on training mannequin"
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
              Severe allergic reactions, known as anaphylaxis, present immediate life-threatening emergencies demanding rapid intervention. Our Epi-Pen Training service welcomes learners from all backgrounds, including healthcare professionals, educators, school personnel, parents, caregivers, and anyone committed to mastering epinephrine administration during critical allergic crises.


            </p>
            <p>
              We offer comprehensive Epi-Pen Training services that empower individuals with essential knowledge and hands-on skills to respond swiftly and effectively when confronted with severe allergic emergencies.


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
                  <span className="font-semibold text-gray-900">Recognizing Anaphylactic Emergencies:</span> Participants explore anaphylaxis, a rapid and potentially fatal allergic response that demands immediate recognition and action. They identify common triggers and master the hallmark warning signs, including respiratory distress, facial or throat swelling, widespread hives, and dangerously low blood pressure that can lead to shock.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Recognizing Epi-Pen-Eligible Patients:</span> Participants develop the ability to identify individuals who require Epi-Pen access, including those with documented severe allergies, previous anaphylactic episodes, or high-risk allergen exposures that necessitate immediate epinephrine availability.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Auto-Injector Components and Features:</span> Participants receive thorough instruction on the Epi-Pen auto-injector, covering essential components, proper storage protocols, and expiration tracking. They learn to distinguish between various Epi-Pen models and their corresponding administration guidelines, ensuring accurate device selection and deployment in emergency situations.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Proper Injection Procedures:</span>Participants master the precise technique for deploying an Epi-Pen across diverse emergency scenarios. They practice optimal hand positioning, correct thigh placement for intramuscular injection, and proper device activation, ensuring they can deliver epinephrine swiftly and accurately when seconds matter.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Post-Injection Response and Emergency Escalation:</span> Participants gain critical knowledge about potential epinephrine side effects and strategies to address them. They identify common reactions, including elevated heart rate, anxiety, and tremors, and develop clear protocols for determining when to contact emergency medical services or hospital care following auto-injector deployment.


                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://www.scnsc.org/sites/default/files/styles/resources_image/public/images/products/EpiPen.jpeg.webp?itok=aVlArPl8"
                alt="EPI-PEN training"
                className="w-full h-220 rounded-lg shadow-md object-cover"
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
          Benefits of EPI-PEN
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Essential Anaphylaxis Response Competencies:</span> Epi-Pen training arms individuals with essential knowledge and hands-on skills to deploy epinephrine rapidly during anaphylactic emergencies. By mastering proper auto-injector administration, participants gain the ability to deliver immediate, potentially life-saving intervention to anyone facing a severe allergic crisis, transforming them into confident responders in critical moments.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Building Competent Emergency Responders:</span> Through Epi-Pen training, individuals cultivate the self-assurance needed to respond decisively during anaphylactic emergencies. By mastering the precise injection technique and engaging in hands-on practice scenarios, participants develop the mental preparedness and technical competence to deliver life-saving intervention with composure when it matters most.

            </li>
            
            <li>
              <span className="font-semibold text-gray-900">Rapid Emergency Intervention:</span> Anaphylaxis escalates rapidly, with potential for severe complications or fatality without immediate treatment. Epi-Pen training underscores the critical imperative of swift intervention, where every second of delay significantly increases mortality risk and necessitates instantaneous action upon symptom recognition.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Comprehensive Allergy Care and Prevention Strategies:</span> Epi-Pen training transcends emergency response alone, equipping participants with comprehensive knowledge of anaphylaxis triggers, evidence-based prevention strategies, and the critical importance of developing personalized emergency action plans. Learners gain practical tools to minimize exposure risks and prepare themselves and others for potential allergic crises.


            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2  focus:ring-offset-2 transition-colors"
            >
              Make An Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}