export type Subject = {
  name: string
  slug: string
  href: string
  isLocal: boolean
  pageTitle: string
  teacherIntro: string
  inputPlaceholder: string
  heroImage: string
}

const sharedHeroImage = '/images/university-student-1872810_1280.jpg'
const sharedInputPlaceholder = 'Skriv dit spørgsmål ...'

export const subjects: Subject[] = [
  {
    name: 'Matematik',
    slug: 'matematik',
    href: '/matematik/',
    isLocal: true,
    pageTitle: 'Matematik - GymGPT',
    teacherIntro: 'Jeg er din personlige matematiklærer. Hvad kan jeg hjælpe dig med?',
    inputPlaceholder: sharedInputPlaceholder,
    heroImage: sharedHeroImage,
  },
  {
    name: 'Fysik',
    slug: 'fysik',
    href: '/fysik/',
    isLocal: true,
    pageTitle: 'Fysik - GymGPT',
    teacherIntro: 'Jeg er din personlige fysiklærer. Hvad kan jeg hjælpe dig med?',
    inputPlaceholder: sharedInputPlaceholder,
    heroImage: sharedHeroImage,
  },
  {
    name: 'Kemi',
    slug: 'kemi-c',
    href: '/kemi-c/',
    isLocal: true,
    pageTitle: 'Kemi - GymGPT',
    teacherIntro: 'Jeg er din personlige kemilærer. Hvad kan jeg hjælpe dig med?',
    inputPlaceholder: sharedInputPlaceholder,
    heroImage: sharedHeroImage,
  },
  {
    name: 'Biologi',
    slug: 'biologi',
    href: '/biologi/',
    isLocal: true,
    pageTitle: 'Biologi - GymGPT',
    teacherIntro: 'Jeg er din personlige biologilærer. Hvad kan jeg hjælpe dig med?',
    inputPlaceholder: sharedInputPlaceholder,
    heroImage: sharedHeroImage,
  },
]

export function getLocalSubjectByPath(pathname: string) {
  const slug = pathname.replace(/^\/+|\/+$/g, '')

  return subjects.find((subject) => subject.isLocal && subject.slug === slug)
}
