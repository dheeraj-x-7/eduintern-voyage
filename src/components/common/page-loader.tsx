import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PageLoaderProps {
  label?: string
  className?: string
}

export function PageLoader({ label = 'Loading', className }: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('page-glow flex min-h-screen items-center justify-center bg-background', className)}
    >
      <LoaderCircle className="size-7 animate-spin text-primary" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  )
}