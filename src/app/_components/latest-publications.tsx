import { getRecentPublications } from '@/lib/publications'
import { PublicationList } from './publication-list'

export default async function LatestPublications({ count = 3 }: { count?: number }) {
  const publications = await getRecentPublications(count)

  if (!publications.length) {
    return null
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold mt-0">Recent Publications</h2>
      <PublicationList
        publications={publications}
        showAbstract={false}
        showTags={false}
        showLinks={true}
      />
    </section>
  )
}
