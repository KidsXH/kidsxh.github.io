import fs from 'fs/promises'
import path from 'path'
import { importPage } from 'nextra/pages'

export type PublicationMeta = {
  title: string
  date?: string
  authors?: string[]
  myIndex?: number // zero-based index of your name in authors
  coFirst?: boolean // true if you are co-first author
  venue?: string
  venueAbbr?: string
  pdf?: string
  video?: string
  code?: string
  project?: string
  tags?: string[]
  award?: string
  teaser?: string
  doi?: string
}

export type Publication = PublicationMeta & {
  slug: string
}

const PUBLICATIONS_DIR = path.join(process.cwd(), 'src', 'content', 'publications')

async function getMdxSlugs() {
  try {
    const entries = await fs.readdir(PUBLICATIONS_DIR, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
      .map((entry) => entry.name.replace(/\.mdx$/, ''))
  } catch (error) {
    // If the folder does not exist yet, return an empty list
    return []
  }
}

export async function getAllPublications(): Promise<Publication[]> {
  const slugs = await getMdxSlugs()

  const items = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await importPage(['publications', slug])
      return {
        slug,
        ...(metadata as PublicationMeta)
      }
    })
  )

  return items.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export async function getRecentPublications(limit = 3): Promise<Publication[]> {
  const all = await getAllPublications()
  return all.slice(0, limit)
}
