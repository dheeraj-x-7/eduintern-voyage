import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Lightbulb,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const journeySteps = [
  {
    label: 'Academic learning',
    icon: BookOpen,
    className: 'bg-primary/10 text-primary',
  },
  {
    label: 'Practical skills',
    icon: Lightbulb,
    className: 'bg-secondary text-foreground',
  },
  {
    label: 'Career opportunities',
    icon: BriefcaseBusiness,
    className: 'bg-primary/10 text-primary',
  },
]

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex flex-1 items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 size-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="hero-entrance hero-entrance-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            EduIntern Voyage
          </p>
          <p className="hero-entrance hero-entrance-2 mt-6 text-lg font-medium text-primary sm:text-xl">
            Learn. Prepare. Grow.
          </p>
          <h1
            id="hero-heading"
            className="hero-entrance hero-entrance-3 mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Your Journey From Learning to Opportunity Starts Here.
          </h1>
          <p className="hero-entrance hero-entrance-4 mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            EduIntern Voyage brings your academic learning, study resources, practical skills, and career opportunities together in one place — starting with B.Com students at the University of Madras.
          </p>
          <div className="hero-entrance hero-entrance-5 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/academics"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'min-h-11',
              )}
            >
              Explore Academics
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/internships"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              Discover Internships
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <Card
          aria-label="A journey from academic learning to career opportunities"
          className="hero-entrance hero-entrance-6 relative overflow-hidden border-border/80 bg-card/75 p-6 shadow-md backdrop-blur-sm sm:p-8"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-primary/5" />
          <div className="relative">
            <p className="text-sm font-medium text-muted-foreground">Your learning journey</p>
            <div className="mt-6 space-y-4">
              {journeySteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div key={step.label}>
                    <div className={cn(
                      'journey-step flex items-center gap-4 rounded-lg border border-border/70 bg-background/35 p-4',
                      `journey-step-${index + 1}`,
                    )}>
                      <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-lg', step.className)}>
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-foreground sm:text-base">{step.label}</span>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <ArrowDown
                        className={cn(
                          'journey-connector mx-auto my-2 size-4 text-muted-foreground/70',
                          `journey-connector-${index + 1}`,
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}