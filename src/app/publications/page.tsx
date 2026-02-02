import { getAllPublications } from '@/lib/publications'
import { PublicationList } from '@/app/_components/publication-list'

export const metadata = {
  title: 'Publications'
}

export default async function Page() {
  const publications = await getAllPublications()

  return (
    <div className="flex flex-col gap-3 py-6">
      <h1 className="text-2xl font-semibold">Publications</h1>
      <PublicationList publications={publications} showLinks={false}/>
    </div>
  )
}