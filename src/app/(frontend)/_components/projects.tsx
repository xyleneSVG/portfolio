"use client"

import { useState, useEffect, useRef, JSX } from "react"
import { ExternalLink, Github } from "lucide-react"

import type { ProjectsProps } from "../_types/project"

export default function Projects({ projects = [] }: ProjectsProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id || index}
              className={`group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `100ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://vs7tmjfafevxnjqh.public.blob.vercel-storage.com/${project.thumbnail?.filename || "/placeholder.svg"}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.projectDescription}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags?.slice(0, 3).map((tagObj, tagIndex) => (
                    <span
                      key={tagObj.id || tagIndex}
                      className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded border border-orange-500/30"
                    >
                      {tagObj.tag}
                    </span>
                  ))}
                  {(project.tags?.length ?? 0) > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">+{(project.tags?.length ?? 0) - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
