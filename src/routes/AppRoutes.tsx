import { Route, Routes } from 'react-router-dom'
import { PlaceholderPage } from '@/routes/PlaceholderPage'

const routePlaceholders = [
  { path: '/', title: 'Welcome to EduIntern Voyage' },
  { path: '/academics', title: 'Academics' },
  { path: '/courses', title: 'Courses' },
  { path: '/internships', title: 'Internships' },
  { path: '/about', title: 'About EduIntern Voyage' },
  { path: '/contact', title: 'Contact' },
  { path: '/login', title: 'Login' },
  { path: '/register', title: 'Register' },
  { path: '/dashboard', title: 'Dashboard' },
]

export function AppRoutes() {
  return (
    <Routes>
      {routePlaceholders.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PlaceholderPage title={route.title} />}
        />
      ))}
      <Route path="*" element={<PlaceholderPage title="Page not found" />} />
    </Routes>
  )
}