"use client";
import Link from 'next/link'
import React from 'react'

export default function SafetyPage() {
 
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
          <div className="flex h-40 w-100 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
             Safety
            </h1>
          </div>
        </div>
      </section>
      
     
      {/*Safety */}
      <section className="bg-gray-100 mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Safety
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                  Bonnet HealthCare Training Center, We believe that safety is a shared commitment. By working together, we can create a community of mindful individuals who value and uphold the well-being of themselves and those around them.

                </p>
                <p>
                Our safety training services are designed to be flexible and adaptable, meeting the unique needs of various industries and organizations. We partner with businesses, educational institutions, healthcare facilities, and community groups to create customized training programs that address specific risks, challenges, and workplace environments.


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

            {/* Right: safety image */}
            <div className="w-full">
              <img
                src="https://www.redhatsafety.com/wp-content/uploads/2024/05/Redhat-Safety_-Your-Path-to-Nebosh-Course-Training-in-Puducherry-3.png"
                alt="safety training"
                className="w-full h-150 rounded-xl shadow-sm object-cover"
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
             We recognize that safety is an essential part of personal well-being, whether at home, in the workplace, or in public settings. Our comprehensive safety training programs address a wide array of topics, including emergency preparedness, hazard identification, risk assessment, and effective response procedures to ensure readiness and protection in any environment.


            </p>
            <p>
              Bonnet HealthCare Training Center, We place great importance on safety in every aspect of life. Our safety training programs are designed to empower individuals with the knowledge and practical skills needed to build and maintain safe, secure environments for themselves and those around them.


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
                  <span className="font-semibold text-gray-900">Fundamentals of Safety and Risk Awareness:</span> Participants are introduced to the importance of safety in everyday life, both personally and professionally. The training emphasizes the value of proactive safety measures in minimizing risks, preventing accidents and injuries, and creating secure, well-prepared environments.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Recognizing Hazards and Assessing Risks:</span> The training emphasizes the identification of potential hazards and the systematic assessment of risks. Participants learn to recognize common workplace hazards, evaluate their likelihood and potential impact, and implement effective strategies to minimize or eliminate risks, fostering a safer work environment.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Fire Prevention and Emergency Response Readiness:</span> Participants receive training on essential fire safety practices, including fire prevention methods, evacuation procedures, and the correct use of fire extinguishers. The program also covers emergency preparedness, equipping participants with the skills to respond effectively to medical emergencies, natural disasters, and other critical situations.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Safe Handling of Electrical Systems:</span> Participants are trained in the key principles and practices of electrical safety. The program covers common electrical hazards, safe handling techniques, and preventive measures to reduce the risk of electrical accidents and ensure a secure working environment.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Personal Protective Equipment (PPE):</span> Participants are trained in the proper selection, use, and maintenance of personal protective equipment (PPE). The training highlights the importance of wearing suitable PPE in various work environments to safeguard themselves and others from potential hazards, covering key areas such as head, eye, hearing, and respiratory protection.

                </li>
                  <li>
                  <span className="font-semibold text-gray-900">Safe Handling of Hazardous Substances:</span> The training focuses on the safe management of hazardous materials, including proper handling, storage, and disposal practices. Participants learn how to identify and label hazardous substances, interpret safety data sheets, and follow established protocols to prevent exposure and reduce associated risks in the workplace.


                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://www.redhatsafety.com/wp-content/uploads/2024/05/Redhat-Safety_-Your-Path-to-Nebosh-Course-Training-in-Puducherry-11.png"
                alt="safety training"
                className="w-full h-250 rounded-lg shadow-md object-cover"
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
           Benefits of safety Training
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">DInjury Prevention and Safety Awareness:</span> Safety training equips individuals with the knowledge to recognize potential hazards and effectively manage risks. Through a clear understanding of safety protocols and the adoption of safe work practices, participants learn to take proactive measures to prevent workplace accidents and injuries.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Adherence to Safety Standards and Regulations:</span> Safety training helps individuals and organizations meet all applicable safety regulations and standards. By maintaining awareness of current safety requirements, organizations can prevent legal complications, avoid penalties, and uphold a strong reputation for workplace safety and responsibility.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Minimizing Workplace Accidents and Injuries:</span> By providing employees with the knowledge and skills to recognize and manage potential hazards, safety training plays a vital role in reducing workplace incidents. This leads to a noticeable decrease in accidents, injuries, and near-misses, fostering a safer and more productive working environment for all.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhanced Emergency Preparedness and Response:</span> Safety training incorporates essential emergency preparedness and response procedures. Participants gain the knowledge and skills to act swiftly and effectively during emergencies, including fires, medical incidents, and natural disasters.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Fostering a Culture of Safety and Responsibility:</span> Safety training plays a vital role in building a strong safety culture within an organization. When safety is valued and reinforced at every level, employees become more aware, adhere to safety protocols, and take active responsibility for protecting themselves and their coworkers.

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