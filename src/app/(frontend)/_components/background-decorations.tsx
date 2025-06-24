"use client"

import { useEffect, useState, useMemo } from "react"

export default function BackgroundDecorations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Only generate particles once on mount
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 20}s`,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-300/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/10 to-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-float"
            style={style}
          ></div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-orange-500/10 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-orange-500/10 rounded-full animate-pulse"></div>

      {/* Code Snippets Background */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs text-orange-500 overflow-hidden">
        <div className="absolute top-10 left-10 animate-code-float">{'<div className="portfolio">'}</div>
        <div className="absolute top-32 right-20 animate-code-float delay-1000">
          {'const developer = "passionate";'}
        </div>
        <div className="absolute bottom-40 left-32 animate-code-float delay-2000">{"function createAwesome() {"}</div>
        <div className="absolute bottom-20 right-40 animate-code-float delay-3000">{"return innovation;"}</div>
      </div>
    </div>
  )
}
