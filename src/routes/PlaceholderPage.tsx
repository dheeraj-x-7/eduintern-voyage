import { Link } from 'react-router-dom'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-20 sm:px-6">
      <div className="w-full max-w-xl rounded-xl border border-border/80 bg-card/70 p-8 text-center shadow-md backdrop-blur-sm sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">EduIntern Voyage</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">This area is reserved for a future release.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Return home
        </Link>
      </div>
    </section>
  )
}