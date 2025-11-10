'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  LifebuoyIcon,
  PlusCircleIcon,
  
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  BeakerIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  UsersIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const insuranceTypes = [
   {
    name: 'ACLS',
    subtitle: 'Advanced cardiac life support algorithms and skills',
    description: 'Practice ACLS algorithms, ECG interpretation, and emergency pharmacology to manage cardiac arrest and peri-arrest conditions.',
    href: '/services/advanced-cardiovascular-life-support-acls',
    // quoteHref: '/quote/training/acls',
    icon: HeartIcon,
    features: ['Cardiac Arrest Care', 'ECG Interpretation', 'Pharmacology'],
    color: 'from-purple-600 to-fuchsia-600',
    bgColor: 'from-purple-50 to-fuchsia-100',
  },
   {
    name: 'BLS',
    subtitle: 'Basic Life Support for healthcare professionals',
    description: 'Develop high-quality CPR, team dynamics, airway management, and bag-mask ventilation skills required for clinical environments.',
    href: '/services/basic-life-support-bls',
    // quoteHref: '/quote/training/bls',
    icon: AcademicCapIcon,
    features: ['Team Resuscitation', 'Airway Management', 'Bag-Mask Ventilation'],
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'from-blue-50 to-indigo-100',
  },
  {
    name: 'Hands Only CPR',
    subtitle: 'Hands-on CPR skills for emergencies',
    description: 'Learn adult and child CPR techniques, and how to evaluate scene safety to respond effectively in urgent situations.',
    href: '/services/cardiopulmonary-resuscitation-cpr',
    // quoteHref: '/quote/training/cpr-aed',
    icon: LifebuoyIcon,
    features: ['Adult & Child CPR', 'Basic Life Support (BLS)', 'Scene Safety'],
    color: 'from-red-600 to-orange-600',
    bgColor: 'from-red-50 to-orange-100',
  },
  {
    name: 'AED',
    subtitle: 'AEDs are critical tools in the chain of survival for cardiac arrest victims.',
    description: 'We believe that AED Training is crucial for building a community of empowered first responders.',
    href: '/services/automated-external-defibrillator-aed',
    // quoteHref: '/quote/training/pals',
    icon: UserGroupIcon,
    features: ['Safety Considerations', 'Automated External Defibrillator (AED) Usage', 'Electrode Pad Placement'],
    color: 'from-pink-600 to-rose-600',
    bgColor: 'from-pink-50 to-rose-100',
  },
  {
    name: 'Heart Savers First Aid',
    subtitle: 'Essential first aid skills and certification for all ages',
    description: 'Master foundational first aid including bleeding control, wound care, and splinting for common injuries at home and work.',
    href: '/services/heart-savers-first-aid',
    // quoteHref: '/quote/training/first-aid',
    icon: PlusCircleIcon,
    features: ['Bleeding Control', 'Wound Care', 'Burns & Splints'],
    color: 'from-emerald-600 to-teal-700',
    bgColor: 'from-emerald-50 to-teal-100',
  },
 
 
  
  {
    name: 'Heimlich Maneuve',
    subtitle: 'Choking is a potentially life-threatening situation that requires immediate intervention.',
    description: 'We believe that everyone should have access to Heimlich Maneuver Training.',
    href: '/services/heimlich-maneuve',
    // quoteHref: '/quote/training/bloodborne-pathogens',
    icon: BeakerIcon,
    features: ['Understanding Choking Emergencies', 'Performing the Heimlich Maneuver on Children & Adults', 'Recognizing when to Seek Further Medical Assistance'],
    color: 'from-yellow-600 to-amber-700',
    bgColor: 'from-yellow-50 to-amber-100',
  },
  {
    name: 'EPI-PEN',
    subtitle: 'Severe allergic reactions, also known as anaphylaxis, can be life-threatening and require immediate intervention.',
    description: 'we believe that Epi-Pen Training is essential for individuals who may encounter severe allergic reactions.',
    href: '/services/epi-pen',
    // quoteHref: '/quote/training/emergency-response',
    icon: BellAlertIcon,
    features: ['Understanding Anaphylaxis', 'Administration Techniques', 'Recognizing Side Effects and Seeking Further Medical Assistance'],
    color: 'from-slate-600 to-gray-700',
    bgColor: 'from-slate-50 to-gray-100',
  },
]

const features = [
  {
    name: 'Expert Instructors',
    description: 'Each training course includes comprehensive hands-on exercises and simulation-based learning activities. Participants work with medical mannequins, practice emergency protocols, perform life-saving techniques, and engage in scenario-based training that allows them to apply theoretical knowledge to realistic clinical situations before earning certification.',
    icon: HeartIcon,
  },
  {
    name: 'Hands-On Experience',
    description: 'Our trainers are certified healthcare professionals with extensive experience in emergency response training and clinical education. Each trainer holds recognized industry certifications such as BLS, ACLS, and First Aid credentials, and brings years of hands-on expertise from clinical practice. They are passionate educators committed to transforming theoretical knowledge into practical, life-saving skills during every training session.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Customized Solutions',
    description: 'We offer tailored training solutions specifically designed to meet your unique needs and learning goals. Whether you are an individual seeking certification, a healthcare team requiring specialized training, or an organization needing workforce development, we customize programs to enhance your skills and address your specific challenges.',
    icon: UsersIcon,
  },
  {
    name: 'Ongoing Support',
    description: 'We provide ongoing support and resources long after your initial training ends. Through access to updated training materials, continuing education resources, refresher courses, and expert consultation, we ensure you stay current with the latest emergency response techniques, evidence-based practices, and healthcare guidelines—so your skills remain sharp and relevant.',
    icon:  PhoneIcon,
  },
]

export default function ServicesSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </motion.div>
            <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Comprehensive HealthCare
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600">
            From CPR to emergency care, we provide comprehensive training programs tailored to your needs and skill level.
          </p>
        </motion.div>

        {/* Insurance Types Grid */}
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 grid max-w-none grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={insurance.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${insurance.bgColor} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative flex flex-col rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 xl:p-10 shadow-xl ring-1 ring-gray-200 group-hover:shadow-2xl transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between gap-x-3 sm:gap-x-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-x-3 sm:gap-x-4">
                    <motion.div
                      className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-none rounded-xl sm:rounded-2xl bg-gradient-to-r ${insurance.color} flex items-center justify-center shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <insurance.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold leading-6 sm:leading-8 text-gray-900">{insurance.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{insurance.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </motion.div>
                </div>

                <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 mb-4 sm:mb-6">{insurance.description}</p>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {insurance.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-x-2 sm:gap-x-3 items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0"
                      >
                        <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" aria-hidden="true" />
                      </motion.div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link
                      href={insurance.href}
                      className={`block w-full rounded-lg sm:rounded-xl bg-gradient-to-r ${insurance.color} px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-target`}
                    >
                      Learn More
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    {/* <Link
                      href={insurance.quoteHref}
                      className="block w-full rounded-lg sm:rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 touch-target"
                    >
                      Get Quote
                    </Link> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {/* <HeartIcon className="h-6 w-6 text-blue-600" /> */}
              </motion.div>
              {/* <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                What Drives Us
              </span> */}
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Bonnet HealthCare?</span>
            </h2>
            <p className="text-xl leading-8 text-gray-600">
             Bonnet HealthCare Training Center is a trusted provider of evidence‑based life‑support education. Our programs translate current guidelines into rigorous, hands‑on instruction designed to build competence, confidence, and reliable performance in time‑critical situations. Select Bonnet HealthCare as your training partner to develop practitioners who respond effectively when seconds matter. Here’s why:
            </p>
          </motion.div>
          <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-28 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative pl-16"
                >
                  <dt className="text-lg font-bold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                    <motion.div
                      className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </motion.div>
                    {value.name}
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

