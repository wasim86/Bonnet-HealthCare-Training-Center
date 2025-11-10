'use client'

import Link from 'next/link'
import React from 'react'

export default function ACLSPage() {
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
          <div className="flex h-50 w-180 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
              Advanced Cardiovascular Life Support (ACLS)
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
                Advanced Cardiovascular Life Support (ACLS)
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                  Bonnet Healthcare Training Center is committed to providing world-class ACLS Training that empowers healthcare professionals to deliver exceptional cardiac emergency care.
                </p>
                <p>
                  Our ACLS training program combines scenario-based simulations and hands-on practice to build a deep understanding of ACLS algorithms and protocols. Participants master critical cardiac rhythm interpretation, develop decision-making skills under pressure, and learn advanced life support interventions in realistic, high-stress scenarios. Upon completion, participants receive a 2-year certification recognized by the American Heart Association.
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
            <div className="">
              <img
                src="https://www.aspenmedical.ae/wp-content/uploads/2024/02/ACLS-Left.jpg"
                alt="Advanced Cardiovascular Life Support (ACLS)"
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
              Advanced Cardiovascular Life Support (ACLS) is a specialized training course designed to equip healthcare professionals with advanced interventions and techniques for managing cardiac arrest, stroke, and life-threatening cardiovascular emergencies. At Bonnet Healthcare Training Center, our ACLS program is customized to meet the specific needs of physicians, nurses, paramedics, and other healthcare providers who manage critical cardiovascular situations.
            </p>
            <p>
              Our experienced emergency medicine instructors deliver dynamic, hands-on training covering essential ACLS concepts including early intervention, team collaboration, advanced airway techniques, medications, and electrical therapy. Our program is designed to elevate your clinical skills, enabling you to provide timely, effective care that directly improves patient outcomes and survival rates.
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
                  <span className="font-semibold text-gray-900">Basic Life Support (BLS):</span> Throughout the ACLS program, participants strengthen their foundational BLS competencies, including mastering high-quality CPR techniques, proficient AED operation, and collaborative team dynamics during resuscitation scenarios.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Recognition and Initial Assessment:</span> Participants master systematic patient assessment techniques, learning to recognize cardiac arrest and life-threatening emergencies through primary and secondary surveys. Training emphasizes accurate identification of arrest causes using the "Hs and Ts" framework and selection of appropriate interventions based on clinical presentation.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Airway Management:</span> Participants develop practical skills in advanced airway management techniques including endotracheal intubation, supraglottic airway device insertion, and effective ventilation with adjunctive equipment.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Electrocardiogram (ECG) Interpretation:</span> ACLS training emphasizes mastery of ECG rhythm identification and arrhythmia recognition. Participants learn to systematically analyze cardiac rhythms, understand their clinical significance, and apply appropriate treatment algorithms based on ECG findings.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pharmacology:</span> Participants gain comprehensive knowledge of ACLS pharmacology, learning proper medication administration, dosages, and routes of delivery. Training covers indications, contraindications, and potential side effects of critical medications including epinephrine, amiodarone, atropine, and other ACLS agents—essential for safe, evidence-based medication use during cardiac emergencies.
                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://cprindianapolisin.com/wp-content/uploads/2024/07/acls-renew-cincinnati-290.jpg"
                alt="Advanced Cardiovascular Life Support (ACLS)"
                className="w-full h-200 rounded-lg shadow-md object-cover"
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
            Benefits of Advanced Cardiac Life Support (ACLS)
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Superior Patient Outcomes:</span> Bonnet Healthcare Training Center's ACLS program empowers healthcare professionals with advanced clinical expertise that directly translates to measurable improvements in patient survival. Research demonstrates that ACLS-trained professionals achieve 55-65% higher survival-to-discharge rates compared to untrained responders—a difference that makes life-or-death impact during cardiovascular emergencies.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Emergency Preparedness:</span> ACLS training comprehensively prepares healthcare professionals to confidently manage diverse cardiovascular emergencies including cardiac arrest (VF, pulseless VT, asystole, PEA), complex arrhythmias, acute coronary syndromes, and stroke. Through systematic training in evidence-based protocols and decision-making algorithms, participants develop expertise in recognizing and treating multiple life-threatening conditions effectively.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Lifesaving Potential:</span> ACLS training empowers healthcare professionals with critical skills that directly translate to saving lives during cardiac emergencies. When trained professionals deliver high-quality CPR, rapidly intervene with appropriate medications, and utilize advanced airway management, survival rates increase significantly—with research demonstrating that early, effective ACLS interventions can improve patient survival by up to 30%.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Commitment to Excellence:</span> Earning ACLS certification showcases your professional commitment to staying current with evolving healthcare standards and best practices. This credential demonstrates to employers and colleagues that you prioritize continuous learning and maintain expertise in the latest cardiac care guidelines and protocols.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Advanced Clinical Authority: </span> ACLS training expands healthcare professionals' scope of practice by authorizing advanced interventions including medication administration, ECG interpretation, transcutaneous pacing, and advanced airway management. This enhanced clinical capacity enables professionals to independently manage complex cardiac emergencies and direct team-based resuscitation efforts.
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