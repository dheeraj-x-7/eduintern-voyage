import { Eye, EyeOff } from 'lucide-react'
import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

interface AuthCardProps {
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  footerText: string
  footerLinkLabel: string
  footerLinkTo: string
  children: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function AuthCard({
  eyebrow,
  title,
  description,
  submitLabel,
  footerText,
  footerLinkLabel,
  footerLinkTo,
  children,
  onSubmit,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md border-border/80 bg-card/85 p-6 shadow-md backdrop-blur-sm sm:p-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
        {children}
        <button type="submit" className={cn(buttonVariants({ size: 'lg' }), 'w-full')}>
          {submitLabel}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {footerText}{' '}
        <Link
          to={footerLinkTo}
          className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {footerLinkLabel}
        </Link>
      </p>
    </Card>
  )
}

interface FieldLabelProps {
  htmlFor: string
  children: ReactNode
  optional?: boolean
}

export function FieldLabel({ htmlFor, children, optional = false }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="flex items-center justify-between text-sm font-medium text-foreground">
      <span>{children}</span>
      {optional && <span className="text-xs font-normal text-muted-foreground">Optional</span>}
    </label>
  )
}

interface PasswordFieldProps {
  id: string
  name: string
  autoComplete: string
  value: string
  onChange: (value: string) => void
}

export function PasswordField({ id, name, autoComplete, value, onChange }: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative mt-2">
      <Input
        id={id}
        name={name}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        required
        aria-required="true"
        className="pr-11"
      />
      <button
        type="button"
        onClick={() => setIsVisible((visible) => !visible)}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {isVisible ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
      </button>
    </div>
  )
}