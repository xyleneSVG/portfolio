import type { Project as PayloadProject } from "@/payload-types"
import type { Project } from "../_types/project"

export function mapPayloadProjectToFrontend(p: PayloadProject): Project {
  return {
    id: String(p.id),
    projectTitle: p.projectTitle,
    projectDescription: p.projectDescription,
    hasSourceCode: p.hasSourceCode ?? undefined,
    sourceCodeLink: p.sourceCodeLink ?? undefined,
    hasLiveDemo: p.hasLiveDemo ?? undefined,
    liveDemoLink: p.liveDemoLink ?? undefined,
    thumbnail: typeof p.thumbnail === "object" && p.thumbnail !== null
      ? { filename: (p.thumbnail as any).filename }
      : undefined,
    category: (typeof p.category === "object" && p.category !== null)
      ? { id: String(p.category.id), name: p.category.name, description: p.category.description ?? undefined }
      : undefined,
    tags: p.tags?.map(tag => ({
      id: String(tag.id),
      tag: tag.tag
    }))
  }
}
