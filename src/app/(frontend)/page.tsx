'use client'

// component
import Hero from "./_components/hero"
import About from "./_components/about"
import Projects from "./_components/projects"
import Certificates from "./_components/certificates"
import TechStack from "./_components/tect-stack"
import Contact from "./_components/contact"
import BackgroundDecorations from "./_components/background-decorations"
import Navigation from "./_components/navigation"

// functions server
import { getUserData } from "./_functions/getUserData"

// modules
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [fetching, setFetching] = useState(true)
  const [name, setName] = useState("")
  const [division, setDivision] = useState("")
  const [greeting, setGreeting] = useState("")
  const [currentStatus, setCurrentStatus] = useState("")
  const [institution, setInstitution] = useState("")
  const [profileImageUrl, setProfileImageUrl] = useState("")

  useEffect(() => {
    const fetchDataProfile = async () => {
      try {
        setFetching(true)
        const profileData = await getUserData()
        setName(profileData.profileUser.nameUser)
        setDivision(profileData.profileUser.divisionUser)
        setGreeting(profileData.profileUser.greetingUser)
        setCurrentStatus(profileData.profileUser.currentStatus)
        setProfileImageUrl(
          typeof profileData.profileUser.imageUser === "object" && profileData.profileUser.imageUser !== null
            ? profileData.profileUser.imageUser.url ?? ""
              : ""
        )
        if (profileData.profileUser.currentStatus === "working") {
          setInstitution(profileData.profileUser.workingInstitution ?? "")
        } else if (profileData.profileUser.currentStatus === "learning") {
          setInstitution(profileData.profileUser.learningInstitution ?? "")
        }
        console.log(profileData)
      } finally {
        console.log(currentStatus)
        setFetching(false)
      }
    }
    console.log("test: ",profileImageUrl)
    fetchDataProfile()
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
            <Hero name={profileImageUrl} division={division} greeting={greeting} />
            <About status={currentStatus} institution={institution} profileImageUrl={profileImageUrl} />
            <Projects />
            <Certificates />
            <TechStack />
            <Contact />
          </main>
        </div>
      )}
    </>
  )
}
