import { Route, Routes } from 'react-router-dom'
import { AcademicSection } from '@/components/common/AcademicSection'
import { CareerOpportunitiesSection } from '@/components/common/CareerOpportunitiesSection'
import { FinalCTASection } from '@/components/common/FinalCTASection'
import { HeroSection } from '@/components/common/HeroSection'
import { LearningResourcesSection } from '@/components/common/LearningResourcesSection'
import { StudentJourneySection } from '@/components/common/StudentJourneySection'
import { ValuePropositionSection } from '@/components/common/ValuePropositionSection'
import { AcademicsPage } from '@/pages/AcademicsPage'
import { PlaceholderPage } from '@/routes/PlaceholderPage'

const routePlaceholders = [
  { path: '/academics/:program', title: 'Academic program' },
  { path: '/academics/:program/semester/:semester', title: 'Academic semester' },
  {
    path: '/academics/:program/semester/:semester/subject/:subject',
    title: 'Academic subject',
  },
  {
    path: '/academics/:program/semester/:semester/subject/:subject/unit/:unit',
    title: 'Academic unit',
  },
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
            <FinalCTASection />
          </>
        }
      />
      <Route path="/academics" element={<AcademicsPage />} />
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