import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { academicUniversities } from '@/data/academic/universityOfMadras'
import { Card } from '@/components/ui/card'

export function AcademicsPage() {
  useEffect(() => {
    document.title = 'Academics | EduIntern Voyage'
  }, [])

  const university = academicUniversities[0]
  const program = university?.programs[0]
  const semesters = program?.semesters ?? []

  return (
    <section aria-labelledby="academics-page-heading" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Academic learning
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"
          >
            <GraduationCap className="size-6" />
          </div>
          <h1
            id="academics-page-heading"
            className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {program?.name ?? 'Academic learning'}
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            {university?.name ?? 'University information unavailable'}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore your academic journey semester by semester through a structured learning experience.
          </p>
        </header>

        <section aria-labelledby="semester-heading" className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="semester-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Choose Your Semester
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Select a semester to explore its subjects and learning resources.
            </p>
          </div>

          {semesters.length > 0 ? (
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {semesters.map((semester) => (
                <Link
                  key={semester.id}
                  to={`/academics/${program?.slug}/semester/${semester.slug}`}
                  aria-label={`Explore ${semester.title}`}
                  className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <Card className="h-full border-border/80 bg-card/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BookOpen className="size-5" aria-hidden="true" />
                      </div>
                      <ArrowRight
                        className="mt-2 size-4 text-muted-foreground transition-colors duration-200 motion-safe:group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Semester
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{semester.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-xl rounded-xl border border-border/80 bg-card/70 p-8 text-center shadow-sm">
              <p className="text-base font-medium text-foreground">No semesters available yet.</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Academic structure details will appear here when they are available.
              </p>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}