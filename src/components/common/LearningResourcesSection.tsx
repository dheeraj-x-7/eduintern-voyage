import { ArrowRight, FileText, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const resources = [
  {
    title: 'Self-Made Notes',
    description:
      'Clear, structured study material designed to make academic preparation easier.',
    icon: FileText,
  },
  {
    title: 'Educational Videos',
    description:
      'Self-made educational videos that help explain concepts in a practical and accessible way.',
    icon: PlayCircle,
  },
]

export function LearningResourcesSection() {
  return (
    <section
      aria-labelledby="learning-resources-heading"
      className="border-t border-border/70 bg-background-deep"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(25rem,1.15fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Learning resources
          </p>
          <h2
            id="learning-resources-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Learn Beyond the Classroom
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Access structured study material and educational videos created to support your academic journey.
          </p>
          <Link
            to="/academics"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-8 min-h-11 w-full sm:w-auto')}
          >
            Explore Learning Resources
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Card className="relative overflow-hidden border-border/80 bg-card/80 p-5 shadow-md sm:p-7">
          <div aria-hidden="true" className="absolute right-0 top-0 size-52 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Learning library
              </p>
              <span className="size-2 rounded-full bg-primary/70" aria-hidden="true" />
            </div>

            <div className="mt-5 space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon

                return (
                  <div
                    key={resource.title}
                    className="group rounded-lg border border-border/70 bg-background/40 p-4 transition-[border-color,box-shadow] duration-200 motion-safe:hover:border-primary/40 motion-safe:hover:shadow-sm sm:p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 motion-safe:group-hover:bg-primary/15"
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">{resource.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
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