import Link from 'next/link'
import type { Publication } from '@/lib/publications'
import { GitHubIcon } from 'nextra/icons'

const IconButton = ({ href, icon, label }: { href?: string; icon: string; label: string }) => {
  if (!href) return null
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      aria-label={label}
      className="flex pl-2 pr-1 h-10 w-20 items-center justify-center rounded-lg border border-(--border) bg-(--card) text-xs font-semibold text-(--accent-strong) shadow-sm no-underline transition hover:shadow-[0_4px_12px_rgba(14,165,233,0.3)] hover:translate-x-1"
    >
      {icon === 'github' ? (
        <GitHubIcon className="h-4 w-4" />
      ) : <span className="material-symbols-outlined fill text-xs leading-none">{icon}</span>
      }

      <span className="mx-auto">{label}</span>
    </Link>
  )
}

type CardProps = {
  publication: Publication
  showAbstract?: boolean
  showTags?: boolean
  showLinks?: boolean
}

export function PublicationCard({
  publication,
  showTags = true,
  showLinks = true,
}: CardProps) {
  const { title, authors, venueAbbr, venue, date, award, tags, pdf, video, code, project, teaser, myIndex, coFirst, doi } = publication
  const linkItems = [
    { href: project, label: 'Page', icon: 'web' },
    { href: doi, label: 'DOI', icon: 'link' },
    { href: pdf, label: 'PDF', icon: 'article' },
    { href: video, label: 'Video', icon: 'smart_display' },
    { href: code, label: 'Code', icon: 'github' },
  ].filter(({ href }) => Boolean(href))
  return (
    <div className="group relative flex w-full flex-col items-stretch gap-4 rounded-lg border border-(--border) bg-(--card) p-4 shadow-(--shadow) transition hover:border-(--accent) hover:shadow-[0_12px_36px_rgba(14,165,233,0.2)] hover:cursor-pointer md:flex-row md:items-start hover:translate-x-4">
      {teaser ? (
        <div className="flex h-[160px] w-full shrink-0 items-center justify-center overflow-hidden md:h-[140px] md:w-[220px]">
          <img
            src={teaser}
            alt={`${title} teaser`}
            loading="lazy"
            className="block max-h-full max-w-full object-contain"
          />
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col gap-2 mt-1 transition-transform">
        <header>
          <div className="m-0 font-semibold text-foreground">{title} {award ? <span className='m-0 text-orange-400 font-semibold text-sm'>{'🏅' + award}</span> : ''}</div>
          <div className='flex gap-1 mt-1 md:flex-row flex-col'>
            {venueAbbr ? <span className="text-sm text-muted text-nowrap font-semibold">{venueAbbr}<span className='hidden md:inline'> · </span></span> : null}
            {venue ? <span className="text-sm text-muted italic">{venue}
            </span> : null}
          </div>

        </header>

        {authors?.length ? (
          <p className="m-0 flex flex-wrap gap-1 text-foreground text-sm">
            {authors.map((author, idx) => (
              <span
                key={`${author}-${idx}`}
                className={`whitespace-nowrap ${myIndex === idx ? 'font-semibold' : ''}`}
              >
                {author}
                {coFirst && myIndex === idx ? ' (co-first)' : ''}
                {idx < authors.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
        ) : null}

        {showTags && tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] px-2.5 py-1 text-xs font-medium text-(--accent-strong)"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {linkItems.length ? (
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 -translate-x-full flex-col gap-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-x-6 md:flex">
          {linkItems.map(({ href, label, icon }) => (
            <IconButton key={label} href={href as string} icon={icon} label={label} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
