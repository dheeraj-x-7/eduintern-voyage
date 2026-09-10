export type LearningMaterialAccess = 'public' | 'registered' | 'premium'

export type LearningMaterialKind = 'pdf' | 'video' | 'other'

export interface LearningMaterial {
  id: string
  slug: string
  title: string
  kind: LearningMaterialKind
  access: LearningMaterialAccess
  description?: string
  unitId: string
}

export interface Unit {
  id: string
  slug: string
  title: string
  subjectId: string
  learningMaterials: LearningMaterial[]
}

export interface Subject {
  id: string
  slug: string
  title: string
  semesterId: string
  units: Unit[]
}

export interface Semester {
  id: string
  slug: string
  title: string
  programId: string
  subjects: Subject[]
}

export interface Program {
  id: string
  slug: string
  name: string
  universityId: string
  semesters: Semester[]
}

export interface University {
  id: string
  slug: string
  name: string
  programs: Program[]
}