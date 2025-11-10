'use client'

import Link from 'next/link'
import React from 'react'
export default function LifeSkillsEducationPage() {
 
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
          <div className="flex h-40 w-150 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
             Life Skills Education
            </h1>
          </div>
        </div>
      </section>
      
     
      {/*Life Skills Education */}
      <section className="bg-gray-100 mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Life Skills Education
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                  Bonnet HealthCare Center, We believe that every heartbeat counts. Join us in building a community of confident, skilled, and compassionate lifesavers. Together, we can make a lasting difference—one heartbeat at a time.

                </p>
                <p>
                  Our CPR Training program goes beyond mastering basic techniques. It focuses on building quick response instincts, strong communication skills, and confident decision-making during emergency situations. Participants receive hands-on instruction in identifying cardiac arrest, performing effective chest compressions, delivering CPR, and operating automated external defibrillators (AEDs) with precision and confidence.

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
                src="https://assets.thehansindia.com/h-upload/2024/10/07/1486927-skills.webp"
                alt="   Life Skills Education"
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
             We believe that everyone deserves the chance to learn essential life‑saving skills, no matter their background or profession. Our comprehensive CPR Training courses are designed to be inclusive, engaging, and tailored to meet the unique learning needs of every participant, ensuring confidence and competence in emergency response.

            </p>
            <p>
              We understand the vital role that life skills education plays in preparing individuals to respond effectively in emergencies. Our CPR Training program is committed to empowering people with the knowledge, confidence, and ability to act swiftly, transforming them into capable lifesavers within their communities.

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
                  <span className="font-semibold text-gray-900">Building Strong Communication Skills:</span> Participants gain valuable strategies for mastering both verbal and non-verbal communication, enhancing active listening, and expressing ideas with clarity and confidence. They also develop essential interpersonal skills for fostering positive relationships, resolving conflicts constructively, and appreciating diverse viewpoints in personal and professional settings.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Critical Thinking and Strategic Problem Solving:</span> This training is designed to strengthen critical thinking and problem-solving capabilities. Participants explore practical methods to analyze situations, evaluate options, anticipate outcomes, and make well-informed decisions with confidence and clarity.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Developing Emotional Awareness and Resilience:</span> Participants gain the ability to recognize, understand, and manage their emotions with greater effectiveness. The training explores key areas including self-awareness, emotional regulation, empathy, and relationship-building. Learners also develop strategies to manage stress, strengthen resilience, and sustain emotional well-being in both personal and professional settings.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Effective Time Management and Productivity Skills:</span> This course focuses on developing essential skills for effective time management, goal setting, task prioritization, and productivity enhancement. Participants explore practical strategies to overcome procrastination, build efficient study or work routines, and achieve a sustainable work-life balance for long-term success.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Building Resilience and Well-Being:</span> Participants explore practical stress management techniques, relaxation methods, and self-care strategies to support mental and physical well-being. The training helps them recognize stress triggers, build healthy coping mechanisms, and prioritize self-care routines that promote balance, resilience, and long-term wellness.

                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://www.irishtimes.com/resizer/v2/DCIWV7YKORE3PQSR76HPWAY564.jpg?auth=ffefe1b426e16b9e844b9dc1d8a61ac5460e07b45e8c0df0c94d462e67343a17&smart=true&width=1600&height=898"
                alt="   Life Skills Education"
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
           Benefits of Life Skills Education
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
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