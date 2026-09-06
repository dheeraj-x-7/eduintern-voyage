import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '@/assets/logo/eduintern-voyage.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Academics', to: '/academics' },
  { label: 'Courses', to: '/courses' },
  { label: 'Internships', to: '/internships' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          aria-label="EduIntern Voyage home"
          className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <img
            src={logo}
            alt="EduIntern Voyage"
            className="size-14 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  isActive && 'bg-secondary text-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-border/80 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 pt-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    isActive && 'bg-secondary text-foreground',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}