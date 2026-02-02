import { PublicationCard } from './publication-card'
import type { Publication } from '@/lib/publications'

type ListProps = {
  publications: Publication[]
  showAbstract?: boolean
  showTags?: boolean
  showLinks?: boolean
}

export function PublicationList({
  publications,
  showAbstract = true,
  showTags = true,
  showLinks = true,
}: ListProps) {
  if (!publications.length) {
    return <p>No publications yet. Add MDX files under <code>src/content/publications</code>.</p>
  }

  return (
    <div className="flex flex-col gap-4">
      {publications.map((pub) => (
        <PublicationCard
          key={pub.slug}
          publication={pub}
          showAbstract={showAbstract}
          showTags={showTags}
          showLinks={showLinks}
        />
      ))}
    </div>
  )
}
