"use client"
import Link from 'next/link'
import React from 'react'

export default function StressReliefTrainingPage() {
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
            Stress Relief Training

            </h1>
          </div>
        </div>
      </section>
      
     
      {/* Stress Relief Training
 */}
      <section className="bg-gray-100 mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Stress Relief Training

              </h1>
              <div className="space-y-5 text-gray-700  leading-relaxed">
                <p className="font-semibold">
                  At Bonnet Healthcare Training Center, We believe that managing stress is vital for personal growth and overall well-being. Join us in our mission to empower individuals to handle stress effectively, build resilience, and live healthier, more balanced, and fulfilling lives.




                </p>
                <p>
                 Our skilled instructors, specializing in stress management and well-being, conduct interactive and insightful training sessions. They share valuable knowledge about the causes and impacts of stress, along with evidence-based methods for stress reduction and relaxation. Participants learn to recognize their personal stress triggers, adopt healthy coping strategies, and create a tailored stress management plan for long-term balance and resilience.



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

            {/* Right: Stress Relief Training
 image */}
            <div className="w-full">
              <img
                src="https://www.totalsuccess.co.uk/wp-content/uploads/2018/06/iStock-518889364_super-768x512.jpg"
                alt="Healthcare professional demonstrating CPR technique on training mannequin"
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
           In today’s fast-paced world, stress has become an increasingly common challenge, making it essential to equip individuals with effective coping tools. Our comprehensive training programs are designed to foster self-awareness, strengthen resilience, and enhance stress management skills for improved well-being.



            </p>
            <p>
              Bonnet Healthcare Training Center, We recognize the significant impact stress can have on well-being, productivity, and overall quality of life. Our Stress Relief Training program is designed to equip individuals with practical strategies and proven techniques to manage and alleviate stress in both personal and professional settings.




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
                  <span className="font-semibold text-gray-900">Exploring the Nature and Impact of Stress:</span> Participants gain insight into the concept of stress, its effects on physical and mental health, and the common factors that contribute to it. This module lays the groundwork for understanding the significance of effective stress management.




                </li>
                <li>
                  <span className="font-semibold text-gray-900">Identifying the Signs and Effects of Stress:</span> The training explores the physical, emotional, and behavioral indicators of stress. Participants learn to identify these signs in themselves and others, allowing for early recognition, intervention, and support.


             </li>
                <li>
                  <span className="font-semibold text-gray-900">Effective Strategies for Managing Stress:</span> The course introduces participants to a range of practical stress management methods and coping strategies. These include deep breathing exercises, mindfulness and meditation practices, effective time management approaches, relaxation techniques, and physical activities that help alleviate stress.




                </li>
                <li>
                  <span className="font-semibold text-gray-900">Building and Maintaining Healthy Lifestyle Practices:</span> The training highlights the importance of embracing healthy lifestyle choices to effectively manage stress. It covers key areas such as regular physical activity, balanced nutrition, sufficient rest, and understanding how substances like caffeine and alcohol influence stress levels.



                </li>
                <li>
                  <span className="font-semibold text-gray-900">Building Resilience and Adapting to Stress:</span> The training focuses on strengthening stress resilience and adaptability skills. Participants learn to cultivate a growth mindset, remain flexible, embrace change, and recover effectively from challenging or stressful situations.



                </li>
                 <li>
                  <span className="font-semibold text-gray-900">DProactive Approaches for Preventing Stress:</span> The training features strategies to prevent stress before it becomes overwhelming. Participants learn how to establish a healthy work-life balance, set effective boundaries, engage in consistent self-care, and develop sustainable coping mechanisms.


                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://talkshop.ph/blog/wp-content/uploads/2014/05/business-meditation2-1024x716.jpg"
                alt="Instructors demonstrating ACLS techniques during hands-on training"
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
          Benefits of Stress Relief Training
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Enhancing Physical Well-Being Through Stress Management:</span> Effective stress management techniques taught in Stress Relief Training can significantly enhance physical health. By reducing stress, participants may experience lower blood pressure, strengthened immune function, decreased muscle tension, and improved sleep patterns, all of which contribute to overall well-being.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Elevated productivity and achievement:</span> Managing stress enhances individuals’ ability to concentrate, make informed decisions, and perform optimally. Through learning stress reduction techniques and effective time management strategies, participants can improve their productivity, efficiency, and overall performance both personally and professionally.

            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhanced emotional awareness and regulation:</span> Stress Relief Training often includes modules on emotional regulation and self-awareness. Participants gain a deeper understanding of their emotions, learn to recognize and manage stress triggers, and develop enhanced emotional awareness and regulation skills.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Bolstered resilience and dynamic flexibility:</span> Stress Relief Training supports individuals in building strengthened resilience and adaptive flexibility in the face of adversity. Participants acquire skills to recover swiftly from stressful situations, navigate change effectively, and approach challenges with a positive and growth-oriented mindset.


            </li>
            {/* <li>
              <span className="font-semibold text-gray-900">Fostering Personal Growth and Self-Development
: </span>Mental Health Awareness training supports personal growth and self-development by helping participants gain meaningful insights into their own attitudes, perceptions, and beliefs about mental health.

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