import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  ExternalLink,
  FileText,
  PlayCircle,
} from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { academicUniversities } from '@/data/academic/universityOfMadras'
import type { LearningMaterial } from '@/types/academic'

function NotFoundState({ backTo }: { backTo: string }) {
  return (
    <section aria-labelledby="unit-not-found-heading" className="bg-background">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <h1 id="unit-not-found-heading" className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Unit not found
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            We could not find that unit. Return to the academic structure to choose an available level.
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

function materialAction(kind: LearningMaterial['kind']) {
  if (kind === 'video') return 'Watch'
  if (kind === 'pdf') return 'View'
  return 'Open'
}

function materialKindLabel(kind: LearningMaterial['kind']) {
  if (kind === 'video') return 'Video'
  if (kind === 'pdf') return 'PDF'
  return 'Resource'
}

function MaterialIcon({ kind }: { kind: LearningMaterial['kind'] }) {
  if (kind === 'video') return <PlayCircle className="size-5" />
  if (kind === 'pdf') return <FileText className="size-5" />
  return <BookOpen className="size-5" />
}

function LearningMaterialCard({ material }: { material: LearningMaterial }) {
  const cardContent = (
    <Card className="border-border/80 bg-card/80 p-5 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md sm:p-6">
      <div className="flex items-start gap-4">
        <div aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MaterialIcon kind={material.kind} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">{material.title}</h3>
            {material.url ? (
              <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors motion-safe:group-hover:text-primary" aria-hidden="true" />
            ) : (
              <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            )}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>{materialKindLabel(material.kind)}</span>
            {material.label && <><span aria-hidden="true">•</span><span>{material.label}</span></>}
          </div>
          <p className="mt-4 text-sm font-medium text-primary">{materialAction(material.kind)}</p>
        </div>
      </div>
    </Card>
  )

  if (!material.url) {
    return <div>{cardContent}</div>
  }

  return (
    <a
      href={material.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${materialAction(material.kind)} ${material.title}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      {cardContent}
    </a>
  )
}

export function UnitPage() {
  const {
    program: programSlug,
    semester: semesterSlug,
    subject: subjectSlug,
    unit: unitSlug,
  } = useParams<{
    program: string
    semester: string
    subject: string
    unit: string
  }>()
  const university = academicUniversities.find((item) =>
    item.programs.some((program) => program.slug === programSlug),
  )
  const program = university?.programs.find((item) => item.slug === programSlug)
  const semester = program?.semesters.find((item) => item.slug === semesterSlug)
  const subject = semester?.subjects.find((item) => item.slug === subjectSlug)
  const unit = subject?.units.find((item) => item.slug === unitSlug)
  const semesterPath = program && semester
    ? `/academics/${program.slug}/semester/${semester.slug}`
    : '/academics'
  const subjectPath = program && semester && subject
    ? `/academics/${program.slug}/semester/${semester.slug}/subject/${subject.slug}`
    : semesterPath

  useEffect(() => {
    document.title = unit
      ? `${unit.title} | ${subject?.title ?? 'Subject'} | ${program?.name ?? 'Academics'} | EduIntern Voyage`
      : 'Unit | EduIntern Voyage'
  }, [program?.name, subject?.title, unit])

  if (!university || !program || !semester || !subject || !unit) {
    return <NotFoundState backTo={subjectPath} />
  }

  return (
    <section aria-labelledby="unit-page-heading" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li><Link to="/academics" className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">Academic Learning</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li><Link to={`/academics/${program.slug}`} className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">{program.name}</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li><Link to={`/academics/${program.slug}/semester/${semester.slug}`} className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">{semester.title}</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li><Link to={subjectPath} className="rounded transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">{subject.title}</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-4" /></li>
            <li aria-current="page" className="font-medium text-foreground">{unit.title}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Academic learning</p>
          <div className="mt-6 flex items-start gap-4">
            <div aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="size-6" />
            </div>
            <div>
              <h1 id="unit-page-heading" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{unit.title}</h1>
              <p className="mt-2 text-base font-medium text-primary">{subject.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{program.name} · {university.name}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore the learning materials for this unit.
          </p>
        </header>

        <section aria-labelledby="learning-materials-heading" className="mt-16 sm:mt-20">
          <div className="max-w-2xl">
            <h2 id="learning-materials-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Learning Materials</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">Choose a resource to continue learning.</p>
          </div>

          {unit.learningMaterials.length > 0 ? (
            <div className="mt-8 grid gap-4 lg:max-w-4xl">
              {unit.learningMaterials.map((material) => <LearningMaterialCard key={material.id} material={material} />)}
            </div>
          ) : (
            <div role="status" className="mt-8 max-w-xl rounded-xl border border-border/80 bg-card/70 p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground">No learning materials available yet</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Learning resources for this unit are being prepared and will appear here when they are available.</p>
            </div>
          )}
        </section>
      </div>
    </section>
  )
}