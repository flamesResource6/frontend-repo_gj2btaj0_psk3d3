import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
