import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  Landmark,
  Megaphone,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const opportunityDomains = [
  { label: 'Finance', icon: Landmark },
  { label: 'Accounting', icon: Calculator },
  { label: 'Banking', icon: Building2 },
  { label: 'Business Analytics', icon: BarChart3 },
  { label: 'Human Resources', icon: Users },
  { label: 'Marketing', icon: Megaphone },
]

export function CareerOpportunitiesSection() {
  return (
    <section
      aria-labelledby="career-opportunities-heading"
      className="border-t border-border/70 bg-background"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(25rem,1.15fr)] lg:gap-20 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Career opportunities
          </p>
          <h2
            id="career-opportunities-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Turn Learning Into Opportunity
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Discover internships and career resources that help you take the next step from academic learning toward professional growth.
          </p>
          <Link
            to="/internships"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-8 min-h-11 w-full sm:w-auto')}
          >
            Explore Internships
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Card className="relative overflow-hidden border-border/80 bg-card/80 p-5 shadow-md sm:p-7">
          <div aria-hidden="true" className="absolute right-0 top-0 size-52 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative">
            <div className="border-b border-border/70 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Explore opportunities across
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Career domains that connect academic learning with professional growth.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {opportunityDomains.map((domain) => {
                const Icon = domain.icon

                return (
                  <div
                    key={domain.label}
                    className="group flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 p-4 transition-[border-color,box-shadow] duration-200 motion-safe:hover:border-primary/40 motion-safe:hover:shadow-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 motion-safe:group-hover:bg-primary/15"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{domain.label}</span>
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