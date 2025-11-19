"use client"
import Link from 'next/link'
import React from 'react'

export default function MentalHealthAwarenessPage() {
  

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
             Mental Health awareness

            </h1>
          </div>
        </div>
      </section>
      
     
      {/* Mental Health awareness */}
      <section className="bg-gray-100 mt-0 sm:mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="hidden sm:block text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Mental Health awareness

              </h1>
              <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed">
                <p className='font-semibold text-base sm:text-lg'>
                  At Bonnet Healthcare Training Center, We believe that mental health holds equal importance to physical health. Join us in our mission to spread awareness, support mental well-being, and foster a compassionate and understanding community.



                </p>
                <p className="text-sm sm:text-base">
                  Our experienced instructors, specializing in mental health and counseling, conduct engaging and insightful training sessions. They share the latest information on common mental health conditions, associated risk factors, early warning signs, and available support resources. Participants gain the skills to identify signs of mental distress, practice active listening, and offer appropriate guidance and referrals.



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

            {/* Right:  Mental Health awareness image */}
            <div className="w-full">
              <img
                src="https://www.championsofwellness.com/wp-content/uploads/2023/05/shutterstock_282356165-scaled.jpg"
                alt="Healthcare professional demonstrating CPR technique on training mannequin"
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
            Mental health challenges can impact anyone, regardless of background or circumstance. It is vital to foster an inclusive and compassionate environment where individuals feel understood, valued, and supported. Our comprehensive training programs are designed to increase mental health awareness, break down stigma, and equip participants with practical tools to promote mental well-being.



            </p>
            <p>
              Bonnet Healthcare Training Center, We understand the profound influence mental health has on overall well-being and quality of life. Our Mental Health Awareness Training program is committed to building understanding, empathy, and support for mental health by providing individuals with the knowledge and skills needed to promote positive mental well-being.



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
                  <span className="font-semibold text-gray-900">Foundations of Mental Health Awareness


:</span> Participants are introduced to the concept of mental health and its vital role in overall well-being. The training helps them understand common mental health conditions, their prevalence, and the effects these challenges can have on individuals as well as the wider community.



                </li>
                <li>
                  <span className="font-semibold text-gray-900">Recognizing Indicators and Symptoms

:</span> The training examines the key indicators and symptoms of a range of mental health conditions, including anxiety, depression, bipolar disorder, and post-traumatic stress disorder (PTSD). Participants learn to identify these signs in themselves and others, encouraging early recognition and timely intervention.

             </li>
                <li>
                  <span className="font-semibold text-gray-900">Challenging Stigma and Promoting Acceptance:</span> The course explores the stigma surrounding mental health and its effects on individuals who seek support. Participants are guided in developing strategies to challenge stigma, foster empathy, and build a supportive environment that promotes open conversation and acceptance.



                </li>
                <li>
                  <span className="font-semibold text-gray-900">Providing Mental Health Support and First Response
:</span> Participants receive foundational training in mental health first aid, learning how to offer immediate support to individuals experiencing mental health challenges or crises. The course emphasizes active listening, empathetic communication, and effective referral practices to connect individuals with appropriate professional care.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Suicide Awareness and Prevention Strategies:</span> The course focuses on suicide awareness and prevention, providing participants with the essential knowledge and skills to recognize warning signs, respond with care, and guide individuals in crisis toward professional help and supportive resources.



                </li>
                 <li>
                  <span className="font-semibold text-gray-900">Developing Self-Awareness and Empathetic Understanding
:</span> The course promotes self-reflection and self-awareness, enabling participants to cultivate empathy and a deeper understanding of individuals experiencing mental health challenges.



                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://cloud.soliant.com/uploads/2021/05/iStock-700673182-690x1024-1.jpg"
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
           Benefits of Mental Health awareness
          </h2>
          <div className="mt-2 h-0.5 w-28 sm:w-40 md:w-52 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <li>
              <span className="font-semibold text-gray-900">Enhancing Mental Health Awareness

:</span> Mental Health Awareness training helps participants develop a comprehensive understanding of mental health, covering common conditions, their indicators and symptoms, and the wide-ranging effects these issues can have on individuals and society.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhancing Mental Health Knowledge and Understanding

:</span> Mental Health Awareness training enhances participants’ understanding of mental health, equipping them to identify signs of distress, provide compassionate support, and guide individuals toward appropriate resources and professional care.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Strengthening Mental Health First Aid Competencies

:</span> Mental Health Awareness training provides participants with the essential skills needed to offer initial support to individuals facing mental health difficulties.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Encouraging Early Help-Seeking and Support

:</span> By promoting a supportive and non-judgmental atmosphere, Mental Health Awareness training empowers individuals to seek help when needed. It also builds participants’ confidence in discussing mental health, inspiring others to reach out for guidance and support.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Fostering Personal Growth and Self-Development
: </span> Mental Health Awareness training supports personal growth and self-development by helping participants gain meaningful insights into their own attitudes, perceptions, and beliefs about mental health.

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
  );
}