import type { Program, Semester, University } from '@/types/academic'

const universityId = 'university-of-madras'
const programId = 'b-com-general'

const semesters: Semester[] = Array.from({ length: 6 }, (_, index) => {
  const semesterNumber = index + 1
  const semesterId = `semester-${semesterNumber}`

  return {
    id: semesterId,
    slug: semesterId,
    title: `Semester ${semesterNumber}`,
    programId,
    subjects: [],
  }
})

const bComGeneral: Program = {
  id: programId,
  slug: 'b-com-general',
  name: 'B.Com General',
  universityId,
  semesters,
}

export const academicUniversities: University[] = [
  {
    id: universityId,
    slug: 'university-of-madras',
    name: 'University of Madras',
    programs: [bComGeneral],
  },
]