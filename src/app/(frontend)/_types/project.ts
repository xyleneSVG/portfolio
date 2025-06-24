export type Project = {
  id?: string
  thumbnail?: {
    filename?: string
  }
  title?: string
  projectTitle?: string
  projectDescription?: string
  hasSourceCode?: boolean
  sourceCodeLink?: string
  hasLiveDemo?: boolean
  liveDemoLink?: string
  tags?: { id?: string; tag: string }[]
}

export interface ProjectsProps {
  projects?: Project[]
}