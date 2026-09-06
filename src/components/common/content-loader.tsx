import { Skeleton } from '@/components/common/skeleton'
import { cn } from '@/lib/utils'

export interface ContentLoaderProps {
  rows?: number
  className?: string
}

export function ContentLoader({ rows = 3, className }: ContentLoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className={cn('space-y-4', className)}
    >
      <Skeleton className="h-6 w-2/5" />
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton
          key={index}
          className={cn('h-4', index === rows - 1 ? 'w-3/5' : 'w-full')}
        />
      ))}
      <span className="sr-only">Loading content</span>
    </div>
  )
}