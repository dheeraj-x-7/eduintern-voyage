import { BookOpen, BriefcaseBusiness, PlayCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const valuePropositions = [
  {
    title: 'Academic Resources',
    description:
      'University-focused study resources designed to help you understand and prepare for your academic journey.',
    icon: BookOpen,
  },
  {
    title: 'Learn & Practice',
    description:
      'Learn through self-made notes and educational videos created to make your learning more practical and accessible.',
    icon: PlayCircle,
  },
  {
    title: 'Career Opportunities',
    description:
      'Discover internships and opportunities that help you move from academic learning toward professional growth.',
    icon: BriefcaseBusiness,
  },
]

export function ValuePropositionSection() {
  return (
    <section
      aria-labelledby="value-proposition-heading"
      className="border-t border-border/70 bg-background-deep"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Your journey
          </p>
          <h2
            id="value-proposition-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Everything You Need for Your Journey
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            From university-focused learning to practical skills and career opportunities, EduIntern Voyage brings the next steps of your journey together.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {valuePropositions.map((proposition) => {
            const Icon = proposition.icon

            return (
              <Card
                key={proposition.title}
                className="group h-full border-border/80 bg-card/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:border-primary/40 motion-safe:hover:shadow-md sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    'flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary',
                    'transition-colors duration-200 motion-safe:group-hover:bg-primary/15',
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{proposition.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {proposition.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}