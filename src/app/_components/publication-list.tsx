import { PublicationCard } from './publication-card'
import type { Publication } from '@/lib/publications'

type ListProps = {
  publications: Publication[]
  showTags?: boolean
  groupByYear?: boolean
}

export function PublicationList({
  publications,
  showTags = true,
  groupByYear = false,
}: ListProps) {
  if (!publications.length) {
    return <p>No publications yet. Add MDX files under <code>src/content/publications</code>.</p>
  }

  const publicationGroupByYear: { [year: string]: Publication[] } = {}

  publications.forEach((pub) => {
    const dateString = pub.date || ''
    const year = new Date(dateString).getFullYear().toString()
    if (!publicationGroupByYear[year]) {
      publicationGroupByYear[year] = []
    }
    publicationGroupByYear[year].push(pub)
  })

  return (
    <div className="flex flex-col gap-4">
      {groupByYear ? Object.keys(publicationGroupByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => (
          <div key={year}>
            <h2 className="text-xl font-bold">{year}</h2>
            <div className="flex flex-col gap-4">
              {publicationGroupByYear[year].map((pub) => (
                <PublicationCard
                  key={pub.slug}
                  publication={pub}
                  showTags={showTags}
                />
              ))}
            </div>
          </div>
        )) :
        publications.map((pub) => (
          <PublicationCard
            key={pub.slug}
            publication={pub}
            showTags={showTags}
          />
        ))
      }
    </div>
  )
}
