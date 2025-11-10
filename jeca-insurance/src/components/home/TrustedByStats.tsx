'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

const stats = [
  { id: 1, name: 'Happy Clients', value: '500+', icon: UsersIcon },
  { id: 2, name: 'Years experiance', value: '20+', icon: ShieldCheckIcon },
  { id: 3, name: 'Customer Rating', value: '4.7/5', icon: StarIcon },
]

export default function TrustedByStats() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Trusted by hundreds worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Join the hundreds of happy clients who trust Bonnet HealthCare with their health and safety.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center group"
                >
                  <motion.div
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.6 + index * 0.2
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                    {stat.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
