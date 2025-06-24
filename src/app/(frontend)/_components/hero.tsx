"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero({ name, division, greeting }: { name: string, division: string, greeting: string }) {
  const [text, setText] = useState("")
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(division.slice(0, index))
      index++
      if (index > division.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [division])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4 mt-[calc(20vh-70px)]">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hello, I&apos;m</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">{name}</span>
        </h1>

        <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
          <span className="text-gray-300">{text}</span>
          <span className="animate-pulse text-orange-500">|</span>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          {greeting}
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-2">
          <a
            href="#"
            className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-orange-500" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-orange-500" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-orange-500" />
          </a>
        </div>

        <a href="#about" className="inline-block animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </a>
      </div>
    </section>
  )
}
