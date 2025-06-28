'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ExternalLink, Github, ArrowLeft, Filter, Search } from 'lucide-react'

// Components
const BackgroundDecorations = dynamic(() => import('../_components/background-decorations'), {
  ssr: false,
})
import Navigation from '../_components/navigation'

// Functions
import { getUserProjects } from '../_functions/getUserProject'
import { getProjectCategory } from '../_functions/getProjectCategory'

// Types
import type { Project } from '../_types/project'

// Utils
import { mapPayloadProjectToFrontend } from '../_utils/mapPayloadProjectToFrontend'

export default function ProjectsGallery() {
  const [showContent, setShowContent] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [projects, setProjects] = useState<Project[]>([])
  const [fetching, setFetching] = useState(true)
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([
    { value: "all", label: "All Projects" }
  ])
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, categoryData] = await Promise.all([
          getUserProjects(),
          getProjectCategory()
        ])

        // Map projects
        const rawProjects = Array.isArray(projectsData) ? projectsData : [projectsData]
        const mappedProjects = rawProjects.map(mapPayloadProjectToFrontend)
        setProjects(mappedProjects)

        // Map categories
        const mappedCategories = categoryData.map((cat: any) => ({
          value: cat.name?.toLowerCase() || "",
          label: cat.name || ""
        }))
        setCategories([{ value: "all", label: "All Projects" }, ...mappedCategories])
      } catch (err) {
        console.error("Error fetching data:", err)
      } finally {
        setFetching(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!fetching) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [fetching])

  const filteredProjects = projects.filter((project) => {
    const tags = project.tags?.map((t) => t.tag.toLowerCase()) ?? []
    const matchesSearch =
      (project.projectTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      (project.projectDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      tags.some((tag) => tag.includes(searchTerm.toLowerCase()))

    const matchesFilter =
      selectedFilter === 'all' || project.category?.name?.toLowerCase() === selectedFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundDecorations />
      <Navigation />

      {fetching ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <main className="relative z-10 pt-20">
          <section ref={ref} className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div
                className={`mb-16 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                className={`mb-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute z-2 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="relative w-full z-1 pl-10 pr-4 py-3 bg-gray-900/50 border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all duration-300 backdrop-blur-sm"
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
                              ? 'bg-orange-500 text-black'
                              : 'bg-gray-900/50 text-gray-400 hover:text-orange-500 border border-orange-500/20 hover:border-orange-500/40'
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
                className={`mb-8 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <p className="text-gray-400">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-95 backdrop-blur-sm ${
                      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          project.thumbnail?.filename
                            ? `https://vs7tmjfafevxnjqh.public.blob.vercel-storage.com/${project.thumbnail.filename}`
                            : '/placeholder.svg'
                        }
                        alt={project.projectTitle || 'Project'}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-100 duration-300">
                        <div className="flex space-x-2">
                          {project.hasSourceCode && project.sourceCodeLink && (
                            <a
                              href={project.sourceCodeLink}
                              className="p-2 bg-black/80 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.hasLiveDemo && project.liveDemoLink && (
                            <a
                              href={project.liveDemoLink}
                              className="p-2 bg-black/80 rounded-full text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                        {project.projectTitle}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.projectDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag.id}
                            className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded border border-orange-500/30"
                          >
                            {tag.tag}
                          </span>
                        ))}
                      </div>

                      {/* Category */}
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {project.category?.name || 'Uncategorized'}
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
      )}
    </div>
  )
}
