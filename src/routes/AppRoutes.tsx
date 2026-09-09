import { Route, Routes } from 'react-router-dom'
import { AcademicSection } from '@/components/common/AcademicSection'
import { CareerOpportunitiesSection } from '@/components/common/CareerOpportunitiesSection'
import { HeroSection } from '@/components/common/HeroSection'
import { LearningResourcesSection } from '@/components/common/LearningResourcesSection'
import { StudentJourneySection } from '@/components/common/StudentJourneySection'
import { ValuePropositionSection } from '@/components/common/ValuePropositionSection'
import { PlaceholderPage } from '@/routes/PlaceholderPage'

const routePlaceholders = [
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
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <ValuePropositionSection />
            <AcademicSection />
            <LearningResourcesSection />
            <CareerOpportunitiesSection />
            <StudentJourneySection />
          </>
        }
      />
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