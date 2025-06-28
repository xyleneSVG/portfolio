'use client'

// component
import Hero from './_components/hero'
import About from './_components/about'
import Projects from './_components/projects'
import Certificates from './_components/certificates'
import TechStack from './_components/tect-stack'
import Contact from './_components/contact'
const BackgroundDecorations = dynamic(() => import('./_components/background-decorations'), {
  ssr: false,
})
import Navigation from './_components/navigation'

// functions server
import { getUserData } from './_functions/getUserData'
import { getUserProjects } from './_functions/getUserProject'

// modules
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// types
import { Project } from './_types/project'

// utils
import { mapPayloadProjectToFrontend } from './_utils/mapPayloadProjectToFrontend'

export default function Portfolio() {
  const [fetching, setFetching] = useState(true)
  const [name, setName] = useState('')
  const [division, setDivision] = useState('')
  const [greeting, setGreeting] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')
  const [institution, setInstitution] = useState('')
  const [imageProfileUrl, setImageProfileUrl] = useState('')
  const [projects, setProjects] = useState<Project[]>([])

  const domainBlob = 'https://vs7tmjfafevxnjqh.public.blob.vercel-storage.com/'

  useEffect(() => {
    const fetchDataProfile = async () => {
      const profileData = await getUserData()
      setName(profileData.profileUser.nameUser)
      setDivision(profileData.profileUser.divisionUser)
      setGreeting(profileData.profileUser.greetingUser)
      setCurrentStatus(profileData.profileUser.currentStatus)

      const filename =
        typeof profileData.profileUser.imageUser === 'object' &&
        profileData.profileUser.imageUser !== null
          ? (profileData.profileUser.imageUser.filename ?? '')
          : ''

      if (profileData.profileUser.currentStatus === 'working') {
        setInstitution(profileData.profileUser.workingInstitution ?? '')
      } else if (profileData.profileUser.currentStatus === 'learning') {
        setInstitution(profileData.profileUser.learningInstitution ?? '')
      }

      if (filename) {
        setImageProfileUrl(domainBlob + filename)
      }

      console.log('Fetched profile data: ', profileData)
    }

    const fetchProjects = async () => {
      const projectsData = await getUserProjects()
      const rawProjects = Array.isArray(projectsData) ? projectsData : [projectsData]
      const mapped = rawProjects.map(mapPayloadProjectToFrontend)
      setProjects(mapped)
      console.log('Mapped projects: ', mapped)
    }

    const fetchAllData = async () => {
      setFetching(true)
      try {
        await Promise.all([fetchDataProfile(), fetchProjects()])
      } catch (error) {
        console.error('Error in fetching data:', error)
      } finally {
        setFetching(false)
      }
    }

    fetchAllData()
  }, [])

  return (
    <>
      {fetching ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          <BackgroundDecorations />
          <Navigation />
          <main className="relative z-10">
            <Hero name={name} division={division} greeting={greeting} />
            <About
              status={currentStatus}
              institution={institution}
              profileImageUrl={imageProfileUrl}
            />
            <Projects projects={projects} />
            <Certificates />
            <TechStack />
            <Contact />
          </main>
        </div>
      )}
    </>
  )
}
