"use client";
import Link from 'next/link'
import React from 'react'
export default function MedicationSafetyPage() {
 

  return (
     <main className=" ">
      {/* Top Banner Image */}
      <section aria-label="safety" className="relative isolate w-full h-40 sm:h-48 md:h-56 lg:h-64">
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
             Medication Safety
            </h1>
          </div>
        </div>
      </section>
      
     
      {/*Medication Safety */}
      <section className="bg-gray-100 mt-[-30px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Medication Safety
              </h1>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className='font-semibold'>
                  Bonnet HealthCare Training Center, We believe that medication safety is a collective responsibility. Join us in our commitment to promoting safe medication practices, preventing errors, and safeguarding the health and well-being of every individual.


                </p>
                <p>
                 Our safety training programs are built to be flexible and adaptable, meeting the distinct needs of various industries and organizations. We work closely with businesses, educational institutions, healthcare facilities, and community groups to create customized training solutions that tackle specific risks and operational challenges.


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
                src="https://www.mcmasteroptimalaging.org/images/default-source/blog-post-images/medication-review.tmb-blogpost.jpg?Culture=en&sfvrsn=5f3538d6_4"
                alt=" Medication Safety training"
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
            Medication errors can significantly affect patient safety and treatment outcomes. Our comprehensive training programs aim to address the critical aspects of medication safety, including accurate medication administration, effective medication reconciliation, proper storage and disposal practices, and the vital role of clear communication between healthcare professionals and patients.


            </p>
            <p>
            Bonnet HealthCare training center, We understand that medication safety plays a vital role in protecting the health and well-being of individuals. Our Medication Safety Training program is designed to empower healthcare professionals and individuals with the knowledge and practical skills needed to prevent medication errors and support safe medication practices.


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
                  <span className="font-semibold text-gray-900">Fundamentals of Safe Medication Practices:</span> Participants are introduced to the significance of medication safety and the effects of medication errors on patient well-being. The training helps them understand the main factors that contribute to such errors and emphasizes the need for a structured and proactive approach to medication management.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Safe Practices in Medication Administration:</span> The training provides in-depth guidance on best practices for medication administration, focusing on accurate dosage calculation, proper storage, and safe handling procedures. Participants gain an understanding of various routes of administration, including oral, topical, and parenteral, along with the correct techniques for each method.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Preventing Medication Errors and Ensuring Accuracy:</span> Participants explore key strategies for preventing medication errors, such as accurate medication reconciliation, thorough double-checking processes, and clear, effective communication among healthcare professionals to ensure patient safety.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Safe Practices in Medication Labeling and Packaging:</span> The course highlights the significance of accurate and transparent medication labeling and packaging. Participants develop the ability to read and interpret medication labels, understand drug classifications, and identify potential risks linked to labeling and packaging errors.


                </li>
                <li>
                  <span className="font-semibold text-gray-900">Understanding Drug Interactions and Adverse Effects:</span> Participants develop an understanding of common drug interactions and potential adverse effects. The training emphasizes how to identify high-risk medication combinations and highlights the importance of educating patients about possible interactions and side effects to ensure safe and effective treatment.


                </li>
                 <li>
                  <span className="font-semibold text-gray-900">Proper Medication Storage and Safe Disposal:</span> The training focuses on proper medication storage practices to preserve drug efficacy and ensure safety. Participants gain knowledge of optimal storage conditions, temperature management, and safe disposal procedures for expired or unused medications.



                </li>
              </ul>
            </div>

            {/* Right: Image illustrating training */}
            <div className="order-first lg:order-none">
              <img
                src="https://cdn-ilbhaeb.nitrocdn.com/ddXdbWqAVIjHPMQzvXfaQUVMosItyeTd/assets/images/optimized/rev-54c188a/educationlifeskills.com/wp-content/uploads/2018/02/AdobeStock_61769035.jpeg"
                alt="Instructors Medication Safety training"
                className="w-full h-245 rounded-lg shadow-md object-cover"
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
           Benefits of Medication Safety
          </h2>
          <div className="mt-2 h-0.5 w-202 bg-blue-600" aria-hidden="true" />

          <ul className="mt-6 space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Reducing Medication Errors

:</span>Medication Safety training provides healthcare professionals with the knowledge and skills necessary to reduce medication errors. Through an understanding of best practices in medication administration, accurate dosage calculations, and effective error prevention strategies, participants can play a vital role in improving patient safety and minimizing the risk of medication-related incidents.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Improving Patient Safety and Care Quality

:</span> By promoting safe medication practices, healthcare professionals play a crucial role in ensuring patient well-being. Preventing medication errors helps reduce the risk of adverse drug reactions, complications, and potentially life-threatening outcomes, thereby enhancing overall patient safety.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Enhancing the Quality of Healthcare Services

:</span>Medication Safety training is essential for elevating the quality of healthcare services. By equipping healthcare professionals with a strong understanding of medication safety protocols, the training helps ensure optimal patient care while minimizing the risk of errors and complications.


            </li>
            <li>
              <span className="font-semibold text-gray-900">PLowering Healthcare Costs Through Safer Practices

:</span> Medication errors often lead to higher healthcare expenses through prolonged hospital stays, added treatments, or legal complications. Investing in Medication Safety training helps healthcare organizations lower these costs by preventing errors, reducing unnecessary interventions, and minimizing the risk of legal disputes.


            </li>
            <li>
              <span className="font-semibold text-gray-900">Strengthening Patient Confidence and Trust
: </span>Patients rely heavily on healthcare professionals to manage their medications safely and effectively. By committing to medication safety and participating in specialized training, healthcare professionals can strengthen and sustain the trust and confidence of their patients.

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