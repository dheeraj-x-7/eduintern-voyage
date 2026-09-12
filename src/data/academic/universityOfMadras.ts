import type { LearningMaterial, Program, Semester, Subject, Unit, University } from '@/types/academic'

const universityId = 'university-of-madras'
const programId = 'b-com-general'

function video(
  id: string,
  unitId: string,
  title: string,
  url: string,
  label: string,
): LearningMaterial {
  return {
    id,
    slug: id,
    title,
    kind: 'video',
    accessLevel: 'public',
    url,
    label,
    unitId,
  }
}

function unit(
  subjectId: string,
  number: number,
  learningMaterials: LearningMaterial[] = [],
): Unit {
  const unitId = `${subjectId}-unit-${number}`

  return {
    id: unitId,
    slug: `unit-${number}`,
    title: `Unit ${number}`,
    subjectId,
    learningMaterials,
  }
}

const tamilId = 'tamil-1'
const englishId = 'english-1'
const managementId = 'principles-of-management'
const accountingId = 'financial-accounting-1'
const economicsId = 'business-economics'
const communicationId = 'basic-communication'

const tamilUnit1Id = `${tamilId}-unit-1`
const englishUnit1Id = `${englishId}-unit-1`
const englishUnit2Id = `${englishId}-unit-2`
const managementUnit1Id = `${managementId}-unit-1`
const managementUnit2Id = `${managementId}-unit-2`
const managementUnit3Id = `${managementId}-unit-3`
const managementUnit4Id = `${managementId}-unit-4`
const managementUnit5Id = `${managementId}-unit-5`
const economicsUnit1Id = `${economicsId}-unit-1`
const economicsUnit2Id = `${economicsId}-unit-2`
const economicsUnit3Id = `${economicsId}-unit-3`
const economicsUnit4Id = `${economicsId}-unit-4`

const subjects: Subject[] = [
  {
    id: tamilId,
    slug: tamilId,
    title: 'Tamil 1',
    semesterId: 'semester-1',
    units: [
      unit(tamilId, 1, [
        video('tamil-1-playlist-part-1', tamilUnit1Id, 'Part 1', 'https://youtu.be/MhZPo3UopTk', 'Part 1'),
      ]),
    ],
  },
  {
    id: englishId,
    slug: englishId,
    title: 'English 1',
    semesterId: 'semester-1',
    units: [
      unit(englishId, 1, [
        video('english-1-playlist', englishUnit1Id, 'Playlist', 'https://www.youtube.com/playlist?list=PL6wGELjlOXH-nmOydQsUQ6nxnJ0FgCVYH', 'playlist'),
        video('english-1-unit-1-part-1', englishUnit1Id, 'Part 1', 'https://youtu.be/3SzraYiov9c', 'Part 1'),
        video('english-1-unit-1-part-2', englishUnit1Id, 'Part 2', 'https://youtu.be/S9D_cjLHAS8', 'Part 2'),
        video('english-1-unit-1-part-3', englishUnit1Id, 'Part 3', 'https://youtu.be/feVi9J-Tzy0', 'Part 3'),
        video('english-1-unit-1-part-4', englishUnit1Id, 'Part 4', 'https://youtu.be/44U2CaZXgg0', 'Part 4'),
      ]),
      unit(englishId, 2, [
        video('english-1-unit-2-part-1', englishUnit2Id, 'Part 1', 'https://youtu.be/dXvbL5AH2gA', 'Part 1'),
      ]),
    ],
  },
  {
    id: managementId,
    slug: managementId,
    title: 'Principles of Management',
    semesterId: 'semester-1',
    units: [
      unit(managementId, 1, [
        video('principles-management-playlist', managementUnit1Id, 'Playlist', 'https://www.youtube.com/playlist?list=PLFlnfTyz0S0g', 'playlist'),
        video('principles-management-unit-1-2-mark', managementUnit1Id, '2 mark', 'https://youtu.be/fkvexF5uK_E', '2 mark'),
        video('principles-management-unit-1-10-mark-part-1', managementUnit1Id, '10 mark Part 1', 'https://youtu.be/RClIpbRQIic', '10 mark Part 1'),
        video('principles-management-unit-1-10-mark-part-2', managementUnit1Id, '10 mark Part 2', 'https://youtu.be/OC0btmzUDtI', '10 mark Part 2'),
      ]),
      unit(managementId, 2, [
        video('principles-management-unit-2-2-mark', managementUnit2Id, '2 mark', 'https://youtu.be/IHzl-ftLNpM', '2 mark'),
        video('principles-management-unit-2-10-mark-part-1', managementUnit2Id, '10 mark Part 1', 'https://youtu.be/kFzBT9OEyK0', '10 mark Part 1'),
        video('principles-management-unit-2-10-mark-part-2', managementUnit2Id, '10 mark Part 2', 'https://youtu.be/3BKbuKHbsQQ', '10 mark Part 2'),
      ]),
      unit(managementId, 3, [
        video('principles-management-unit-3-2-mark', managementUnit3Id, '2 mark', 'https://youtu.be/KUej1aIaAmU', '2 mark'),
        video('principles-management-unit-3-10-mark-part-1', managementUnit3Id, '10 mark Part 1', 'https://youtu.be/a8cHenJrNJQ', '10 mark Part 1'),
        video('principles-management-unit-3-10-mark-part-2', managementUnit3Id, '10 mark Part 2', 'https://youtu.be/3BKbuKHbsQQ', '10 mark Part 2'),
      ]),
      unit(managementId, 4, [
        video('principles-management-unit-4-2-mark', managementUnit4Id, '2 mark', 'https://youtu.be/zrRYKKxuAdQ', '2 mark'),
        video('principles-management-unit-4-10-mark-part-1', managementUnit4Id, '10 mark Part 1', 'https://youtu.be/HZhQYa2_ZrY', '10 mark Part 1'),
        video('principles-management-unit-4-10-mark-part-2', managementUnit4Id, '10 mark Part 2', 'https://youtu.be/6AMnyRprdRc', '10 mark Part 2'),
      ]),
      unit(managementId, 5, [
        video('principles-management-unit-5-2-mark', managementUnit5Id, '2 mark', 'https://youtu.be/11BvJ8i0GFo', '2 mark'),
        video('principles-management-unit-5-10-mark-part-1', managementUnit5Id, '10 mark Part 1', 'https://youtu.be/GpEZ8XKEk2M', '10 mark Part 1'),
        video('principles-management-unit-5-10-mark-part-2', managementUnit5Id, '10 mark Part 2', 'https://youtu.be/0RJIYGBRVCk', '10 mark Part 2'),
      ]),
    ],
  },
  {
    id: accountingId,
    slug: accountingId,
    title: 'Financial Accounting 1',
    semesterId: 'semester-1',
    units: [],
  },
  {
    id: economicsId,
    slug: economicsId,
    title: 'Business Economics',
    semesterId: 'semester-1',
    units: [
      unit(economicsId, 1, [
        video('business-economics-playlist', economicsUnit1Id, 'Playlist', 'https://www.youtube.com/playlist?list=PLK11Pa-3bz5E', 'playlist'),
        video('business-economics-unit-1-2-mark', economicsUnit1Id, '2 mark', 'https://youtu.be/R8zGKVMHONA', '2 mark'),
        video('business-economics-unit-1-10-mark-part-1', economicsUnit1Id, '10 mark Part 1', 'https://youtu.be/HhTHEVAq5eA', '10 mark Part 1'),
        video('business-economics-unit-1-10-mark-part-2', economicsUnit1Id, '10 mark Part 2', 'https://youtu.be/UKfJrGC_Ie8', '10 mark Part 2'),
      ]),
      unit(economicsId, 2, [
        video('business-economics-unit-2-2-marks', economicsUnit2Id, '2 marks', 'https://youtu.be/11nh0hLsOEg', '2 marks'),
        video('business-economics-unit-2-10-marks-part-1', economicsUnit2Id, '10 marks Part 1', 'https://youtu.be/-gwv22M6th0', '10 marks Part 1'),
        video('business-economics-unit-2-10-marks-part-2', economicsUnit2Id, '10 marks Part 2', 'https://youtu.be/yDy-MDfGW-g', '10 marks Part 2'),
      ]),
      unit(economicsId, 3, [
        video('business-economics-unit-3-2-mark', economicsUnit3Id, '2 mark', 'https://youtu.be/iDr5oyGANEA', '2 mark'),
        video('business-economics-unit-3-10-mark-part-1', economicsUnit3Id, '10 mark Part 1', 'https://youtu.be/b7CWyjc4HdE', '10 mark Part 1'),
        video('business-economics-unit-3-10-mark-part-2', economicsUnit3Id, '10 mark Part 2', 'https://youtu.be/B_9JW3x6tvs', '10 mark Part 2'),
      ]),
      unit(economicsId, 4, [
        video('business-economics-unit-4-2-mark', economicsUnit4Id, '2 mark', 'https://youtu.be/EiAnGakh0bw', '2 mark'),
      ]),
    ],
  },
  {
    id: communicationId,
    slug: communicationId,
    title: 'Basic Communication',
    semesterId: 'semester-1',
    units: [],
  },
]

const semesters: Semester[] = Array.from({ length: 6 }, (_, index) => {
  const semesterNumber = index + 1
  const semesterId = `semester-${semesterNumber}`

  return {
    id: semesterId,
    slug: semesterId,
    title: `Semester ${semesterNumber}`,
    programId,
    subjects: semesterNumber === 1 ? subjects : [],
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
