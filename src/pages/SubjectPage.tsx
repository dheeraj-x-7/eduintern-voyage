import { ArrowRight, BookOpen, ChevronRight, GraduationCap } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { academicUniversities } from '@/data/academic/universityOfMadras'

interface NotFoundStateProps {
  backTo: string
}

function NotFoundState({ backTo }: NotFoundStateProps) {
  return (
    <section aria-labelledby="subject-not-found-heading" className="bg-background">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <h1 id="subject-not-found-heading" className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Subject not found
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We could not find that subject. Return to the academic structure to choose an available level.
          </p>
          <Link
            to={backTo}
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Back to Academics
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SubjectPage() {
  const {
    program: programSlug,
    semester: semesterSlug,
    subject: subjectSlug,
  } = useParams<{
    program: string
    semester: string
    subject: string
  }>()
  const university = academicUniversities.find((item) =>
    item.programs.some((program) => program.slug === programSlug),
  )
  const program = university?.programs.find((item) => item.slug === programSlug)
  const semester = program?.semesters.find((item) => item.slug === semesterSlug)
  const subject = semester?.subjects.find((item) => item.slug === subjectSlug)
  const semesterPath = program && semester
    ? `/academics/${program.slug}/semester/${semester.slug}`
    : '/academics'

  useEffect(() => {
    document.title = subject
      ? `${subject.title} | ${semester?.title ?? 'Semester'} | EduIntern Voyage`
      : 'Subject | EduIntern Voyage'
  }, [semester?.title, subject])

  if (!university || !program || !semester || !subject) {
    return <NotFoundState backTo={semesterPath} />
  }

  return (
    <section aria-labelledby="subject-page-heading" className="bg-background">
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
            <li>
              <Link
                to={semesterPath}
                className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {semester.title}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li aria-current="page" className="font-medium text-foreground">{subject.title}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <div className="mt-6 flex items-start gap-4">
            <div aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <h1 id="subject-page-heading" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {subject.title}
              </h1>
              <p className="mt-2 text-base font-medium text-primary">{program.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{university.name}</p>
            </div>
          </div>
          {subject.description && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subject.description}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore the units and learning resources for this subject.
          </p>
        </header>

        <section aria-labelledby="units-heading" className="mt-16 sm:mt-20">
          <div className="max-w-2xl">
            <h2 id="units-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Units</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Choose a unit to explore its learning materials.
            </p>
          </div>

          {subject.units.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {subject.units.map((unit) => (
                <Link
                  key={unit.id}
                  to={`${semesterPath}/subject/${subject.slug}/unit/${unit.slug}`}
                  aria-label={`Explore ${unit.title}`}
                  className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <Card className="h-full border-border/80 bg-card/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BookOpen className="size-5" aria-hidden="true" />
                      </div>
                      <ArrowRight className="mt-2 size-4 text-muted-foreground transition-colors motion-safe:group-hover:text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{unit.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div role="status" className="mt-8 max-w-xl rounded-xl border border-border/80 bg-card/70 p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground">Units coming soon</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Learning content for this subject is being prepared and will appear here when it is available.
              </p>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}