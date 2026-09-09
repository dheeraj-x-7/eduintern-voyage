import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Lightbulb,
  Target,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const journeySteps = [
  {
    number: '01',
    title: 'Academic Learning',
    description: 'Build a strong academic foundation and understand the concepts you are studying.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Practical Skills',
    description: 'Develop useful skills that help you apply what you learn beyond the classroom.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Experience',
    description: 'Explore internships and real-world opportunities that help you gain experience.',
    icon: BriefcaseBusiness,
  },
  {
    number: '04',
    title: 'Career Preparation',
    description: 'Prepare for your next step with career resources, guidance and practical preparation.',
    icon: Target,
  },
]

export function StudentJourneySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="student-journey-heading"
      className="border-t border-border/70 bg-background-deep"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Your path forward</p>
          <h2
            id="student-journey-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            From Learning to Your Next Opportunity
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Follow a simple path from building your academic foundation to developing practical skills and preparing for the world of work.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-5 top-6 bottom-6 w-px bg-border lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto"
          />
          <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              const isFinalStep = index === journeySteps.length - 1

              return (
                <div
                  key={step.number}
                  className={cn(
                    'journey-reveal relative flex gap-4 lg:block',
                    isVisible && 'journey-reveal-visible',
                    `journey-reveal-${index + 1}`,
                  )}
                >
                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background-deep text-xs font-semibold text-primary lg:mx-auto">
                    {step.number}
                  </div>
                  <Card
                    className={cn(
                      'min-w-0 flex-1 border-border/80 bg-card/75 p-5 shadow-sm transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-primary/40 motion-safe:hover:shadow-md lg:mt-5',
                      isFinalStep && 'border-primary/30 bg-card',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 motion-safe:hover:bg-primary/15"
                      >
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </Card>
                  {index < journeySteps.length - 1 && (
                    <ArrowRight
                      className="absolute left-5 top-full z-10 mt-2 size-4 -translate-x-1/2 text-primary/70 lg:left-full lg:top-6 lg:mt-0 lg:-translate-y-1/2 lg:translate-x-1/2"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}