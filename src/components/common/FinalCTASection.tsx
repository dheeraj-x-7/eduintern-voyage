import { ArrowRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-border/70 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Card className="relative isolate overflow-hidden border-border/80 bg-card/80 px-6 py-12 text-center shadow-md sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <div
              aria-hidden="true"
              className="mx-auto flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"
            >
              <Compass className="size-5" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Start your journey
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Your Next Step Starts Here
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore your academic resources, discover practical learning opportunities, and take the next step toward your career goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/academics"
                className={cn(buttonVariants({ size: 'lg' }), 'min-h-11 w-full sm:w-auto')}
              >
                Explore Academics
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/register"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'min-h-11 w-full sm:w-auto')}
              >
                Create Your Account
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}