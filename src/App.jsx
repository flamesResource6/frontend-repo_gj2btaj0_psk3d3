import React from 'react'
import Background3D from './components/Background3D'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white">
      <Background3D />

      {/* Overlay gradient to enrich colors without blocking interaction */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/10 to-[#0a0a0f]/50" />

      {/* Content */}
      <div className="relative z-10">
        <Hero name="Alex Johnson" tagline="WebGL Engineer crafting interactive, liquid gradients and immersive web experiences." />
      </div>
    </div>
  )
}

export default App
