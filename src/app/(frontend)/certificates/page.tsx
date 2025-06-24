"use client"

import { useState, useEffect, useRef } from "react"
import { Award, Calendar, ExternalLink, Trophy, Medal, Star, ArrowLeft, Filter, Search } from "lucide-react"
import BackgroundDecorations from "../_components/background-decorations"
import Navigation from "../_components/navigation"
import Link from "next/link"

export default function CertificatesGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("certificates")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
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

  const allCertificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "AWS-CSA-2024-001",
      link: "#",
      category: "cloud",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "GCP-PD-2023-002",
      link: "#",
      category: "cloud",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "META-FED-2023-003",
      link: "#",
      category: "frontend",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "MDB-DEV-2022-004",
      link: "#",
      category: "database",
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "AZ-900-2024-005",
      link: "#",
      category: "cloud",
    },
    {
      title: "React Developer Certification",
      issuer: "React Training",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "REACT-DEV-2023-006",
      link: "#",
      category: "frontend",
    },
    {
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "NODEJS-DEV-2022-007",
      link: "#",
      category: "backend",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialId: "DCA-2023-008",
      link: "#",
      category: "devops",
    },
  ]

  const allCompetitions = [
    {
      title: "International Coding Championship",
      position: "1st Place",
      organizer: "TechCorp Global",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      description: "Won first place in algorithmic problem solving competition with 500+ participants",
      prize: "$5,000",
      category: "programming",
    },
    {
      title: "Hackathon Innovation Award",
      position: "2nd Place",
      organizer: "StartupWeek",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Developed an AI-powered sustainability app in 48 hours",
      prize: "$2,500",
      category: "hackathon",
    },
    {
      title: "Open Source Contributor Award",
      position: "Recognition",
      organizer: "GitHub",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Recognized for significant contributions to open source projects",
      prize: "Recognition Badge",
      category: "opensource",
    },
    {
      title: "University Programming Contest",
      position: "1st Place",
      organizer: "State University",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      description: "Champion of annual programming contest among 200+ students",
      prize: "$1,000",
      category: "programming",
    },
    {
      title: "Web Development Challenge",
      position: "3rd Place",
      organizer: "DevCommunity",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Built a responsive e-commerce platform in 72 hours",
      prize: "$500",
      category: "webdev",
    },
    {
      title: "AI/ML Innovation Contest",
      position: "2nd Place",
      organizer: "TechFest 2024",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      description: "Created machine learning model for predictive analytics",
      prize: "$1,500",
      category: "ai",
    },
  ]

  const years = ["all", "2024", "2023", "2022"]

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === "all" || cert.date === selectedYear
    return matchesSearch && matchesYear
  })

  const filteredCompetitions = allCompetitions.filter((comp) => {
    const matchesSearch =
      comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.organizer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === "all" || comp.date === selectedYear
    return matchesSearch && matchesYear
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundDecorations />
      <Navigation />

      <main className="relative z-10 pt-20">
        <section ref={ref} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div
              className={`mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center mb-8">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 mr-6"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                    All Achievements
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Professional certifications and competition achievements that validate my expertise
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div
              className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/50 rounded-full p-1 border border-orange-500/20 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("certificates")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === "certificates" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-orange-500"
                  }`}
                >
                  <Award className="w-5 h-5" />
                  <span>Certificates ({allCertificates.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab("competitions")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === "competitions" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-orange-500"
                  }`}
                >
                  <Trophy className="w-5 h-5" />
                  <span>Competitions ({allCompetitions.length})</span>
                </button>
              </div>
            </div>

            {/* Filters and Search */}
            <div
              className={`mb-12 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                {/* Year Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <div className="flex space-x-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedYear === year
                            ? "bg-orange-500 text-black"
                            : "bg-gray-900/50 text-gray-400 hover:text-orange-500 border border-orange-500/20 hover:border-orange-500/40"
                        }`}
                      >
                        {year === "all" ? "All Years" : year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div
              className={`mb-8 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-gray-400">
                Showing {activeTab === "certificates" ? filteredCertificates.length : filteredCompetitions.length}{" "}
                {activeTab}
              </p>
            </div>

            {/* Certificates Tab */}
            {activeTab === "certificates" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
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
                        <Link
                          href={cert.link}
                          className="p-2 bg-orange-500/20 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Competitions Tab */}
            {activeTab === "competitions" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompetitions.map((comp, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={comp.image || "/placeholder.svg"}
                        alt={comp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        {comp.position.includes("1st") ? (
                          <Trophy className="w-8 h-8 text-yellow-500" />
                        ) : comp.position.includes("2nd") ? (
                          <Medal className="w-8 h-8 text-gray-400" />
                        ) : (
                          <Star className="w-8 h-8 text-orange-500" />
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
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
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                        {comp.title}
                      </h3>
                      <p className="text-orange-400 text-sm mb-2">{comp.organizer}</p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{comp.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{comp.date}</span>
                        </div>
                        <div className="text-orange-500 font-semibold">{comp.prize}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {((activeTab === "certificates" && filteredCertificates.length === 0) ||
              (activeTab === "competitions" && filteredCompetitions.length === 0)) && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2 text-white">No {activeTab} found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
