"use client"

import { useState, useEffect, useRef } from "react"

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false)
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

  const techCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", level: 95, color: "from-blue-500 to-blue-300" },
        { name: "Next.js", level: 90, color: "from-gray-600 to-gray-400" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-400" },
        { name: "Vue.js", level: 85, color: "from-green-500 to-green-300" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-cyan-300" },
        { name: "SASS/SCSS", level: 80, color: "from-pink-500 to-pink-300" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-400" },
        { name: "Python", level: 85, color: "from-yellow-500 to-yellow-300" },
        { name: "Express.js", level: 88, color: "from-gray-700 to-gray-500" },
        { name: "Django", level: 75, color: "from-green-700 to-green-500" },
        { name: "GraphQL", level: 80, color: "from-pink-600 to-pink-400" },
        { name: "REST APIs", level: 92, color: "from-orange-500 to-orange-300" },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      technologies: [
        { name: "MongoDB", level: 88, color: "from-green-500 to-green-300" },
        { name: "PostgreSQL", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "MySQL", level: 80, color: "from-orange-600 to-orange-400" },
        { name: "Redis", level: 75, color: "from-red-500 to-red-300" },
        { name: "Firebase", level: 82, color: "from-yellow-600 to-yellow-400" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      technologies: [
        { name: "Docker", level: 85, color: "from-blue-500 to-blue-300" },
        { name: "AWS", level: 80, color: "from-orange-600 to-orange-400" },
        { name: "Git", level: 95, color: "from-red-600 to-red-400" },
        { name: "Linux", level: 78, color: "from-gray-600 to-gray-400" },
        { name: "Vercel", level: 90, color: "from-black to-gray-600" },
        { name: "Nginx", level: 70, color: "from-green-600 to-green-400" },
      ],
    },
  ]

  return (
    <section id="tech" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-orange-500/20 p-8 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                    }`}
                    style={{ transitionDelay: `${500 + categoryIndex * 200 + techIndex * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-orange-500 text-sm font-bold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${tech.level}%` : "0%",
                          transitionDelay: `${700 + categoryIndex * 200 + techIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "UI/UX Design",
              "Agile/Scrum",
              "Test-Driven Development",
              "Microservices",
              "CI/CD",
              "Performance Optimization",
              "SEO",
              "Accessibility",
              "Code Review",
              "Mentoring",
              "Technical Writing",
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-300/10 border border-orange-500/30 rounded-full text-orange-300 hover:border-orange-500/50 hover:bg-orange-500/30 transition-all duration-300 cursor-default ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${1200 + index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
