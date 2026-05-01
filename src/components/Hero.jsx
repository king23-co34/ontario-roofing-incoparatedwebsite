import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Award, Smile } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-white via-primary-light to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-primary-red rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-red rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-primary-dark mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional Roofing<br />
              <span className="text-primary-red">& Home Services</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your home with expert roofing, gutters, siding, and windows services in the Greater Toronto Area. Get your free estimate today!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="tel:437-533-5279"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors shadow-lg"
              >
                Call Now: 437-533-5279
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-colors"
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Zap, label: 'Free Estimate', value: 'Always Complimentary' },
                { icon: Award, label: 'Fully Licensed', value: '20+ Years Experience' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -5 }}
                  className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-primary-red"
                >
                  <feature.icon className="text-primary-red mb-2" size={24} />
                  <p className="font-semibold text-primary-dark text-sm">{feature.label}</p>
                  <p className="text-gray-600 text-xs">{feature.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Roof Shape Animation */}
            <div className="relative w-80 h-80">
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 bg-black rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.div>

              {/* Roof shape */}
              <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full drop-shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* House outline */}
                <rect x="40" y="90" width="120" height="90" fill="white" stroke="white" strokeWidth="2" />
                {/* Roof */}
                <polygon points="100,30 40,90 160,90" fill="#DC143C" stroke="white" strokeWidth="2" />
                {/* Door */}
                <rect x="90" y="130" width="20" height="50" fill="#DC143C" />
                {/* Window 1 */}
                <rect x="55" y="105" width="15" height="15" fill="#DC143C" />
                {/* Window 2 */}
                <rect x="130" y="105" width="15" height="15" fill="#DC143C" />
              </motion.svg>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-primary-red font-bold text-2xl"
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-red rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary-red rounded-full"
            animate={{ y: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
