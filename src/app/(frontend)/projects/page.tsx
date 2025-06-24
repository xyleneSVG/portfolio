"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, ArrowLeft, Filter, Search } from "lucide-react"
import BackgroundDecorations from "../_components/background-decorations"
import Navigation from "../_components/navigation"
import Link from "next/link"

export default function ProjectsGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
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

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media management with data visualization and automated reporting.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and dark theme.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Expense Tracker",
      description:
        "Personal finance management app with budget tracking, expense categorization, and financial insights.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Firebase", "Chart.js", "Redux"],
      category: "mobile",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Blog CMS",
      description:
        "Content management system for bloggers with rich text editor, SEO optimization, and analytics dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Recipe Finder",
      description:
        "Recipe discovery app with ingredient-based search, nutritional information, and meal planning features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Nuxt.js", "Spoonacular API", "Vuetify"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "fullstack", label: "Full Stack" },
    { value: "frontend", label: "Frontend" },
    { value: "mobile", label: "Mobile" },
  ]

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter

    return matchesSearch && matchesFilter
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
                    All Projects
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Explore my complete collection of projects, from web applications to mobile apps
                </p>
              </div>
            </div>

            {/* Filters and Search */}
            <div
              className={`mb-12 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <div className="flex space-x-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedFilter(category.value)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedFilter === category.value
                            ? "bg-orange-500 text-black"
                            : "bg-gray-900/50 text-gray-400 hover:text-orange-500 border border-orange-500/20 hover:border-orange-500/40"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Count */}
            <div
              className={`mb-8 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-gray-400">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Link
                          href={project.github}
                          className="p-2 bg-black/80 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                        <Link
                          href={project.live}
                          className="p-2 bg-black/80 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded border border-orange-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Category */}
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {categories.find((cat) => cat.value === project.category)?.label || project.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2 text-white">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
