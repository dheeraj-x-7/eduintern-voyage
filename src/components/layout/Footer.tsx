import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Academics', to: '/academics' },
  { label: 'Courses', to: '/courses' },
  { label: 'Internships', to: '/internships' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background-deep">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="max-w-md">
          <p className="text-lg font-semibold text-foreground">EduIntern Voyage</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            A focused learning platform for students building their academic and professional path.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit rounded text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="border-t border-border/60 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} EduIntern Voyage. All rights reserved.
      </div>
    </footer>
  )
}