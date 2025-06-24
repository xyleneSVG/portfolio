"use client"

import { useState, useEffect, useRef } from "react"
import { Award, Calendar, ExternalLink, Trophy, Medal, Star } from "lucide-react"

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("certificates")
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "AWS-CSA-2024-001",
      link: "#",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "GCP-PD-2023-002",
      link: "#",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "META-FED-2023-003",
      link: "#",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "MDB-DEV-2022-004",
      link: "#",
    },
  ]

  const competitions = [
    {
      title: "International Coding Championship",
      position: "1st Place",
      organizer: "TechCorp Global",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      description: "Won first place in algorithmic problem solving competition with 500+ participants",
      prize: "$5,000",
    },
    {
      title: "Hackathon Innovation Award",
      position: "2nd Place",
      organizer: "StartupWeek",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Developed an AI-powered sustainability app in 48 hours",
      prize: "$2,500",
    },
    {
      title: "Open Source Contributor Award",
      position: "Recognition",
      organizer: "GitHub",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Recognized for significant contributions to open source projects",
      prize: "Recognition Badge",
    },
    {
      title: "University Programming Contest",
      position: "1st Place",
      organizer: "State University",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      description: "Champion of annual programming contest among 200+ students",
      prize: "$1,000",
    },
  ]

  return (
    <section id="certificates" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and competition achievements that validate my expertise
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center items-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className= "rounded-4xl p-1 border border-orange-500/20 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center space-x-2 px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === "certificates" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-orange-500"
              }`}
            >
              <Award className="w-5 h-5" />
              <span>Certificates</span>
            </button>
            <button
              onClick={() => setActiveTab("competitions")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "competitions" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-orange-500"
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span>Competitions</span>
            </button>
          </div>
        </div>

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.slice(0, 3).map((cert, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        {cert.date}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Award className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-orange-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs mb-4">ID: {cert.credentialId}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <a
                        href={cert.link}
                        className="p-2 bg-orange-500/20 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button for Certificates */}
            <div
              className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="/certificates"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <span>View All Certificates</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </>
        )}

        {/* Competitions Tab */}
        {activeTab === "competitions" && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {competitions.slice(0, 2).map((comp, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <img
                        src={comp.image || "/placeholder.svg"}
                        alt={comp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        {comp.position.includes("1st") ? (
                          <Trophy className="w-8 h-8 text-yellow-500" />
                        ) : comp.position.includes("2nd") ? (
                          <Medal className="w-8 h-8 text-gray-400" />
                        ) : (
                          <Star className="w-8 h-8 text-orange-500" />
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-center">
                      <div className="mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            comp.position.includes("1st")
                              ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30"
                              : comp.position.includes("2nd")
                                ? "bg-gray-400/20 text-gray-400 border border-gray-400/30"
                                : "bg-orange-500/20 text-orange-500 border border-orange-500/30"
                          }`}
                        >
                          {comp.position}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                        {comp.title}
                      </h3>
                      <p className="text-orange-400 text-sm mb-2">{comp.organizer}</p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{comp.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{comp.date}</span>
                        </div>
                        <div className="text-orange-500 font-semibold">{comp.prize}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button for Competitions */}
            <div
              className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="/certificates"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <span>View All Achievements</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
