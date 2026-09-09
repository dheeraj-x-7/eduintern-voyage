import { ArrowDown, ArrowRight, GraduationCap, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export function AcademicSection() {
  return (
    <section
      aria-labelledby="academic-learning-heading"
      className="border-t border-border/70 bg-background"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(25rem,1.1fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Academic learning
          </p>
          <h2
            id="academic-learning-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Your B.Com Journey, Organized
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore your B.Com General curriculum through a structured academic experience built around the University of Madras.
          </p>
          <Link
            to="/academics"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-8 min-h-11 w-full sm:w-auto')}
          >
            Explore Academic Structure
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Card className="relative overflow-hidden border-border/80 bg-card/80 p-6 shadow-md sm:p-8">
          <div aria-hidden="true" className="absolute right-0 top-0 size-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <GraduationCap className="size-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Academic program
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">B.Com General</h3>
                <p className="mt-1 text-sm text-muted-foreground">University of Madras</p>
              </div>
            </div>

            <div className="my-7 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-border" />
              <ArrowDown className="size-4 text-primary" />
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="rounded-lg border border-border/70 bg-background/40 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <Layers3 className="size-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground sm:text-base">Structured academic journey</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A clear way to explore your academic structure as the learning experience grows.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}