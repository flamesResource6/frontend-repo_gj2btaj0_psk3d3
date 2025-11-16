import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ name = 'Your Name', tagline = 'Creative Developer • WebGL • Interactive Experiences' }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(800px_400px_at_80%_80%,rgba(59,130,246,0.15),transparent_60%)]"/>

      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(59,130,246,0.35)]"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 backdrop-blur-md transition-colors"
          >
            View Work
          </a>
          <a
            href="#"
            className="rounded-full bg-white text-gray-900 px-6 py-2 font-medium hover:bg-gray-100 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-0 bg-[radial-gradient(80%_50%_at_50%_50%,rgba(30,27,75,0.65),transparent_80%)]"/>
    </section>
  )
}
