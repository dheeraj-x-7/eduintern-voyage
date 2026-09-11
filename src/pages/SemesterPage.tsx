import { ArrowRight, BookOpen, ChevronRight, GraduationCap } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { academicUniversities } from '@/data/academic/universityOfMadras'
import { Card } from '@/components/ui/card'

function NotFoundState() {
  return (
    <section aria-labelledby="semester-not-found-heading" className="bg-background">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <h1 id="semester-not-found-heading" className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Academic semester not found
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We could not find that academic program or semester. Return to the academic overview to choose an available semester.
          </p>
          <Link
            to="/academics"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Back to Academics
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SemesterPage() {
  const { program: programSlug, semester: semesterSlug } = useParams<{
    program: string
    semester: string
  }>()
  const university = academicUniversities.find((item) =>
    item.programs.some((program) => program.slug === programSlug),
  )
  const program = university?.programs.find((item) => item.slug === programSlug)
  const semester = program?.semesters.find((item) => item.slug === semesterSlug)

  useEffect(() => {
    document.title = semester
      ? `${semester.title} | ${program?.name ?? 'Academics'} | EduIntern Voyage`
      : 'Academic Semester | EduIntern Voyage'
  }, [program?.name, semester])

  if (!university || !program || !semester) {
    return <NotFoundState />
  }

  return (
    <section aria-labelledby="semester-page-heading" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link
                to="/academics"
                className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Academic Learning
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li>
              <Link
                to={`/academics/${program.slug}`}
                className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {program.name}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li aria-current="page" className="font-medium text-foreground">{semester.title}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <div className="mt-6 flex items-start gap-4">
            <div aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <h1 id="semester-page-heading" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {semester.title}
              </h1>
              <p className="mt-2 text-base font-medium text-primary">{program.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{university.name}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore the subjects and learning resources for this semester.
          </p>
        </header>

        <section aria-labelledby="subjects-heading" className="mt-16 sm:mt-20">
          <div className="max-w-2xl">
            <h2 id="subjects-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Subjects</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Choose a subject to explore its units and learning resources.
            </p>
          </div>

          {semester.subjects.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {semester.subjects.map((subject) => (
                <Link
                  key={subject.id}
                  to={`/academics/${program.slug}/semester/${semester.slug}/subject/${subject.slug}`}
                  aria-label={`Explore ${subject.title}`}
                  className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <Card className="h-full border-border/80 bg-card/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BookOpen className="size-5" aria-hidden="true" />
                      </div>
                      <ArrowRight className="mt-2 size-4 text-muted-foreground transition-colors motion-safe:group-hover:text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{subject.title}</h3>
                    {subject.description && <p className="mt-3 text-sm leading-6 text-muted-foreground">{subject.description}</p>}
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div role="status" className="mt-8 max-w-xl rounded-xl border border-border/80 bg-card/70 p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground">Subjects coming soon</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Subject information for this semester is being prepared and will appear here when it is available.
              </p>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}