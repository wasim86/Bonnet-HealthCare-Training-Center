'use client'

import Link from 'next/link'
import React from 'react'

export default function HeimlichManeuvePage() {
  
  return (
   <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="  Heimlich Maneuve banner" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src="/images/services/acls/acls-hero-pexels-raven-domingo-11655091-683x1024.jpg"
          alt="  Heimlich Maneuve background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = '/images/services/acls/acls-illustration-323817935.jpg'
          }}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-50 w-150 items-end">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-gray-900">
             Heimlich Maneuve
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
                Heimlich Maneuve
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="font-semibold">
                 At Bonnet Healthcare Training Center, We firmly believe that Heimlich Maneuver Training should be available to everyone, empowering individuals to act swiftly in choking emergencies.

                </p>
                <p>
                  In our Heimlich Maneuver Training course, participants master the precise steps for delivering abdominal thrusts to dislodge a blocked airway. Through interactive hands-on drills and realistic simulations, they cultivate the confidence and instinctive muscle memory needed to execute this vital technique effectively.


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
                src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/other/heimlich_maneuver_other/1800x1200_getty_rf_heimlich_maneuver_other.jpg?resize=750px:*&output-quality=75"
                alt="  Heimlich Maneuve"
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
              Choking poses a critical, life-threatening emergency demanding swift action. Our Heimlich Maneuver Training service welcomes learners from all walks of life, including healthcare workers, first responders, teachers, parents, caregivers, and anyone motivated to master this essential rescue method.


            </p>
            <p>
                At Bonnet Healthcare Training Center, We deliver specialized Heimlich Maneuver Training services that equip individuals with critical knowledge and skills to address choking emergencies with precision and assurance.


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
                  <span className="font-semibold text-gray-900">Choking Crisis Awareness:</span> Participants explore various airway blockages that trigger choking crises, building awareness of key indicators like the inability to speak or cough, throat-clutching gestures, and labored breathing.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Assessing the Situation:</span> Participants develop the ability to swiftly evaluate choking severity and select the correct intervention strategy. They learn to maintain composure under pressure and take decisive action to aid the victim without delay.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Adult Heimlich Technique:</span> Participants are trained in the correct technique for performing the Heimlich Maneuver on adult choking victims. They learn how to stand behind the victim, make a fist with one hand, and position it above the navel but below the ribcage.

                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pediatric Heimlich Technique:</span> Participants master age-appropriate Heimlich adaptations for choking children, distinguishing critical technique differences for infants under one year and children above that threshold.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Emergency Medical Escalation:</span> Participants learn to identify scenarios where the Heimlich Maneuver fails to dislodge the obstruction, recognizing when escalation to advanced medical intervention becomes essential.


                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="http://news-medical.net/image-handler/ts/20160801122016/ri/458/picture/2016/8/Heimlich_Maneuver_shutterstock_394668226.jpg"
                alt="Heimlich Maneuve training"
                className="w-full h-160 rounded-lg shadow-md object-cover"
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
            Benefits of Heimlich Maneuve
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Mastering Critical Rescue Techniques
:</span> Heimlich Maneuver Training arms participants with vital skills to clear airway obstructions and preserve lives in critical moments. Learners master precise techniques for adults, children, and infants, enabling swift, decisive responses to choking emergencies across all age groups.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Building Assured Responders
:</span> Through Heimlich Maneuver Training, individuals cultivate the self-assurance needed to act decisively during choking emergencies. By recognizing critical warning signs and engaging in hands-on practice, participants gain the composure and competence to execute the technique accurately, delivering vital assistance when seconds count.


            </li>
            
            <li>
              <span className="font-semibold text-gray-900">Immediate Intervention Response
:</span> Choking emergencies demand immediate intervention, as delays can rapidly transform manageable situations into life-threatening crises. Heimlich Maneuver Training instills the urgency of rapid response, equipping participants to evaluate circumstances and act without hesitation.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Age-Adaptive Rescue Techniques
: </span>Choking emergencies affect people across all life stages, from infants and children to adults. Heimlich Maneuver Training provides participants with age-specific modifications, ensuring they can tailor their response to the unique anatomical and physiological needs of each victim, regardless of age.


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